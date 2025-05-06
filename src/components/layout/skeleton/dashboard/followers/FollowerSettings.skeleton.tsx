import { HeaderSkeleton } from '@/components/layout/skeleton/dashboard/Header.skeleton'
import { Skeleton } from '@/components/ui/common/Skeleton'

export function FollowerSettingsSkeleton() {
	return (
		<div className={`space-y-6`}>
			<HeaderSkeleton />
			<div className={`mt-5 space-y-6`}>
				<Skeleton className={`h-96 w-full`} />
			</div>
		</div>
	)
}
