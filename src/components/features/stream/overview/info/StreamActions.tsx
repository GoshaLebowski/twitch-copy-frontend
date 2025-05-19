import { FollowButton } from '@/components/features/stream/overview/info/FollowButton';
import { SupportButton } from '@/components/features/stream/overview/info/SupportButton';



import type { FindChannelByUsernameQuery } from '@/graphql/generated/output';





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
		</div>
	)
}
