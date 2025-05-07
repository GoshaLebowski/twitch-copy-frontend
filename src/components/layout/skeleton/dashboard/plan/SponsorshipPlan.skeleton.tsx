import { HeaderSkeleton } from '@/components/layout/skeleton/dashboard/Header.skeleton'
import { DataTableSkeleton } from '@/components/ui/elements/DataTable'

export function SponsorshipPlanSkeleton() {
	return (
		<div className={`space-y-6`}>
			<HeaderSkeleton />
			<div className={`mt-5 space-y-6`}>
				<DataTableSkeleton />
			</div>
		</div>
	)
}
