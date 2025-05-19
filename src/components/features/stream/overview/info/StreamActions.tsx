import { FollowButton } from '@/components/features/stream/overview/info/FollowButton'
import { ShareActions } from '@/components/features/stream/overview/info/ShareActions'
import { SupportButton } from '@/components/features/stream/overview/info/SupportButton'

import type { FindChannelByUsernameQuery } from '@/graphql/generated/output'
import { Skeleton } from '@/components/ui/common/Skeleton'

interface StreamActionsProps {
	channel: FindChannelByUsernameQuery[`findChannelByUsername`]
}

export function StreamActions({ channel }: StreamActionsProps) {
	return (
		<div
			className={`mt-5 items-center space-x-3 space-y-4 lg:mt-0 lg:flex lg:space-y-0`}
		>
			<FollowButton channel={channel} />
			{channel.isVerified && channel.sponsorshipPlans.length && (
				<SupportButton channel={channel} />
			)}
			<ShareActions channel={channel} />
		</div>
	)
}

export function StreamActionsSkeleton() {
	return (
		<div className={`mt-6 lg:mt-0`}>
			<div className={`items-center gap-x-4 space-y-4 lg:flex lg:space-y-0`}>
				<Skeleton className={`h-10 w-44 rounded-full`} />
				<Skeleton className={`size-10 rounded-full`} />
			</div>
		</div>
	)
}