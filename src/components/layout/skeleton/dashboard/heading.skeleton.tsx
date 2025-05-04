import { Skeleton } from '@/components/ui/common/Skeleton'

export function HeadingSkeleton() {
	return (
		<div className={`space-y-4`}>
			<Skeleton className={`h-8 w-[190px]`} />
			<Skeleton className={`h-4 w-[250px]`} />
		</div>
	)
}