import { SocialLinksFormSkeleton } from '@/components/features/user/profile/social-links-form/SocialLinksForm';
import { HeadingSkeleton } from '@/components/layout/skeleton/dashboard/heading.skeleton'
import { Skeleton } from '@/components/ui/common/Skeleton';





export function UserSettingsSkeleton() {
	return (
		<div className={`space-y-6`}>
			<HeadingSkeleton />
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
			<Skeleton className={`h-96 w-full`} />
			<SocialLinksFormSkeleton />
		</div>
	)
}
