import { StreamCardSkeleton } from '@/components/features/stream/list/StreamCard';
import { HeaderSkeleton } from '@/components/layout/skeleton/Header.skeleton'





export function StreamListSkeleton() {
	return (
		<div className={`space-y-6`}>
			<HeaderSkeleton />
			<div className={`mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}>
				{Array.from({ length: 12 }).map((_, index) => (
					<StreamCardSkeleton key={index} />
				))}
			</div>
		</div>
	)
}
