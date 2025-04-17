'use client'

import { useTranslations } from 'next-intl'

import { Skeleton } from '@/components/ui/common/Skeleton'
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from '@/components/ui/common/Tabs'
import { Heading } from '@/components/ui/elements/Heading'

import { useDashboardSettings } from '@/hooks/useDashboardSettings'

import ChangeAvatarForm from './profile/ChangeAvatarForm'

export function UserSettings() {
	const t = useTranslations(`dashboard.settings`)

	const { isDefaultValue, setIsTabs, isHydrated } = useDashboardSettings()

	return (
		<div className={`lg:px-1`}>
			{!isHydrated ? (
				<UserSettingsSkeleton />
			) : (
				<>
					<Heading
						title={t(`header.heading`)}
						description={t(`header.description`)}
						size={`lg`}
					/>
					<Tabs
						value={isDefaultValue}
						onValueChange={setIsTabs}
						className={`mt-3 w-full`}
					>
						<TabsList className={`grid max-w-2xl grid-cols-5`}>
							<TabsTrigger
								value={`profile`}
								onClick={() => setIsTabs(`profile`)}
							>
								{t(`header.profile`)}
							</TabsTrigger>
							<TabsTrigger
								value={`account`}
								onClick={() => setIsTabs(`account`)}
							>
								{t(`header.account`)}
							</TabsTrigger>
							<TabsTrigger
								value={`appearance`}
								onClick={() => setIsTabs(`appearance`)}
							>
								{t(`header.appearance`)}
							</TabsTrigger>
							<TabsTrigger
								value={`notifications`}
								onClick={() => setIsTabs(`notifications`)}
							>
								{t(`header.notifications`)}
							</TabsTrigger>
							<TabsTrigger
								value={`sessions`}
								onClick={() => setIsTabs(`sessions`)}
							>
								{t(`header.sessions`)}
							</TabsTrigger>
						</TabsList>
						<TabsContent value={`profile`}>
							<div className={`mt-5 space-y-6`}>
								<Heading
									title={t(`profile.header.heading`)}
									description={t(
										`profile.header.description`
									)}
								/>
								<ChangeAvatarForm />
							</div>
						</TabsContent>
						<TabsContent value={`account`}></TabsContent>
						<TabsContent value={`appearance`}></TabsContent>
						<TabsContent value={`notifications`}></TabsContent>
						<TabsContent value={'sessions'}></TabsContent>
					</Tabs>
				</>
			)}
		</div>
	)
}

export function UserSettingsSkeleton() {
	return (
		<div className={`space-y-6`}>
			<div className={`space-y-4`}>
				<Skeleton className={`h-8 w-[190px]`} />
				<Skeleton className={`h-4 w-[250px]`} />
			</div>
			<div className={`flex max-w-2xl grid-cols-5 space-x-2`}>
				<Skeleton className={`h-9 w-full`} />
				<Skeleton className={`h-9 w-full`} />
				<Skeleton className={`h-9 w-full`} />
				<Skeleton className={`h-9 w-full`} />
				<Skeleton className={`h-9 w-full`} />
			</div>
			<div className={`space-y-4`}>
				<Skeleton className={`h-7 w-[120px]`} />
				<Skeleton className={`h-4 w-[290px]`} />
			</div>
			<Skeleton
				className={`h-52 rounded-lg border border-border bg-card shadow-sm`}
			/>
		</div>
	)
}