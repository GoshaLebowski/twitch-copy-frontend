'use client'

import { useTranslations } from 'next-intl'

import { ChannelItem } from '@/components/layout/sidebar/ChannelItem'
import { Separator } from '@/components/ui/common/Separator'

import { useFindRecommendedChannelsQuery } from '@/graphql/generated/output'

import { useSidebar } from '@/hooks/useSidebar'

export function RecommendedChannels() {
	const t = useTranslations(`layout.sidebar.recommended`)

	const { isCollapsed } = useSidebar()

	const { data, loading: isLoadingRecommended } =
		useFindRecommendedChannelsQuery()

	const channels = data?.findRecommendedChannels ?? []

	return (
		<>
			<Separator className={`mb-3`} />
			{!isCollapsed && (
				<h2
					className={`mb-2 px-2 text-lg font-semibold text-foreground`}
				>
					{t(`heading`)}
				</h2>
			)}
			{isLoadingRecommended ? (
				<div></div>
			) : (
				channels.map((channel, index) => (
					<ChannelItem key={index} channel={channel} />
				))
			)}
		</>
	)
}
