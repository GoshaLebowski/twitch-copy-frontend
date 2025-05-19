'use client';

import type { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, Trash } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { toast } from 'sonner';



import { VerifiedChannelAlert } from '@/components/features/sponsorship/plan/table/VerifiedChannelAlert';
import { SponsorshipPlanSkeleton } from '@/components/layout/skeleton/dashboard/plan/SponsorshipPlan.skeleton';
import { Button } from '@/components/ui/common/Button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/common/DropdownMenu';
import { DataTable, DataTableSkeleton } from '@/components/ui/elements/DataTable';
import { Heading } from '@/components/ui/elements/Heading';



import {
	type FindMySponsorshipPlansQuery,
	useFindMySponsorshipPlansQuery,
	useRemoveSponsorshipPlanMutation
} from '@/graphql/generated/output'

import { useAuth } from '@/hooks/useAuth'
import { useCurrent } from '@/hooks/useCurrent';



import { convertPrice } from '@/utils/convert-price';
import { formatDate } from '@/utils/format-date';



import { CreatePlanForm } from '../forms/CreatePlanForm';





export function PlansTable() {
	const t = useTranslations(`dashboard.plans`)
	const { user, isLoadingProfile } = useCurrent()
	const { isAuthenticated } = useAuth()

	const {
		data,
		loading: isLoadingPlans,
		refetch
	} = useFindMySponsorshipPlansQuery()
	const plans = data?.findMySponsorshipPlans ?? []

	const [removePlan, { loading: isLoadingRemove }] = useRemoveSponsorshipPlanMutation({
		onCompleted() {
			refetch()
			toast.success(t('columns.successMessage'))
		},
		onError() {
			toast.error(t('columns.removeMessage'))
		}
	})

	const plansColumns: ColumnDef<
		FindMySponsorshipPlansQuery[`findMySponsorshipPlans`][0]
	>[] = useMemo(() => [
		{
			accessorKey: `createdAt`,
			header: t(`columns.date`),
			cell: ({ row }) => formatDate(row.original.createdAt)
		},
		{
			accessorKey: `title`,
			header: t(`columns.title`),
			cell: ({ row }) => row.original.title
		},
		{
			accessorKey: 'price',
			header: t(`columns.price`),
			cell: ({ row }) => convertPrice(row.original.price)
		},
		{
			accessorKey: 'actions',
			header: t('columns.actions'),
			cell: ({ row }) => (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant={`ghost`} className={`size-8 p-0`}>
							<MoreHorizontal className={`size-4`} />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent side={`right`}>
						<DropdownMenuItem
							onClick={() => removePlan({
								variables: { planId: row.original.id }
							})}
							className={`text-red-500 focus:text-red-500`}
							disabled={isLoadingRemove}
						>
							<Trash className={`mr-2 size-4`} />
							{t(`columns.remove`)}
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		}
	], [t, isLoadingRemove])

	if (isLoadingProfile || !isAuthenticated) {
		return (
			<div className='lg:px-10'>
				<SponsorshipPlanSkeleton />
			</div>
		)
	}

	if (!user?.isVerified) {
		return <VerifiedChannelAlert />
	}

	return (
		<div className={`lg:px-10`}>
			<div className={'flex items-center justify-between space-y-3'}>
				<Heading
					title={t(`header.heading`)}
					description={t(`header.description`)}
				/>
				<CreatePlanForm />
			</div>
			<div className='mt-5'>
				{isLoadingPlans ? (
					<DataTableSkeleton />
				) : (
					<DataTable columns={plansColumns} data={plans} />
				)}
			</div>
		</div>
	)
}
