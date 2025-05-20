'use client';

import { LiveKitRoom } from '@livekit/components-react';



import {
	LiveChat,
	LiveChatSkeleton
} from '@/components/features/chat/live/LiveChat'
import {
	AboutChannel,
	AboutChannelSkeleton
} from '@/components/features/stream/overview/info/AboutChannel'
import { ChannelSponsor } from '@/components/features/stream/overview/info/ChannelSponsor';
import { StreamInfo, StreamInfoSkeleton } from '@/components/features/stream/overview/info/StreamInfo';
import { StreamVideo, StreamVideoSkeleton } from '@/components/features/stream/overview/player/StreamVideo';



import type { FindChannelByUsernameQuery } from '@/graphql/generated/output';



import { useStreamToken } from '@/hooks/useStreamToken';





interface StreamOverviewProps {
	channel: FindChannelByUsernameQuery['findChannelByUsername']
}

export function StreamOverview({ channel }: StreamOverviewProps) {
	const { identity, token, name } = useStreamToken(channel.id)

	if (!token || !name || !identity) {
		return <StreamOverviewSkeleton />
	}

	return (
		<LiveKitRoom
			token={token}
			serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
			className={`mx-auto grid grid-cols-1 gap-14 lg:grid-cols-7`}
		>
			<div className={`order-1 col-span-1 flex flex-col lg:col-span-5`}>
				<StreamVideo channel={channel} />
				<StreamInfo channel={channel} />
				<AboutChannel channel={channel} />
				<ChannelSponsor channel={channel} />
			</div>
			<div
				className={`order-2 col-span-1 flex h-80 flex-col space-y-6 lg:col-span-2`}
			>
				<LiveChat
					channel={channel}
					isChatEnabled={channel.stream.isChatEnabled}
					isChatFollowersOnly={channel.stream.isChatFollowersOnly}
					isChatPremiumFollowersOnly={
						channel.stream.isChatPremiumFollowersOnly
					}
				/>
			</div>
		</LiveKitRoom>
	)
}

export function StreamOverviewSkeleton() {
	return (
		<div className={`mx-auto grid grid-cols-1 gap-14 lg:grid-cols-7`}>
			<div className={`order-1 col-span-1 flex flex-col lg:col-span-5`}>
				<StreamVideoSkeleton />
				<StreamInfoSkeleton />
				<AboutChannelSkeleton />
			</div>
			<div
				className={`order-2 col-span-1 flex h-80 flex-col space-y-6 lg:col-span-2`}
			>
				<LiveChatSkeleton />
			</div>
		</div>
	)
}