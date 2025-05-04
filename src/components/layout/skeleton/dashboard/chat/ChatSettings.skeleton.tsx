import { ToggleCardSkeleton } from '@/components/ui/elements/ToggleCard';
import { HeaderSkeleton } from '@/components/layout/skeleton/dashboard/Header.skeleton'




export function ChatSettingsSkeleton() {
	return (
		<div className={`space-y-6`}>
			<HeaderSkeleton/>
			<div className={`mt-5 space-y-6`}>
				{Array.from({ length: 3 }).map((_, index) => (
					<ToggleCardSkeleton key={index} />
				))}
			</div>
		</div>
	)
}
