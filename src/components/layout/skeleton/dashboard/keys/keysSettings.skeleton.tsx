import { HeadingSkeleton } from '@/components/layout/skeleton/dashboard/heading.skeleton'
import { ToggleCardSkeleton } from '@/components/ui/elements/ToggleCard';





export function KeysSettingsSkeleton() {
	return (
		<div className={`space-y-6`}>
			<HeadingSkeleton />
			<div className={`mt-5 space-y-6`}>
				{Array.from({ length: 2 }).map((_, index) => (
					<ToggleCardSkeleton key={index} />
				))}
			</div>
		</div>
	)
}
