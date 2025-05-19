import { useTranslations } from 'next-intl'
import Link from 'next/link'

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from '@/components/ui/common/Card'

import {
	type FindChannelByUsernameQuery,
	useFindSponsorByChannelQuery
} from '@/graphql/generated/output'
import { ChannelAvatar } from '@/components/ui/elements/ChannelAvatar'

interface ChannelSponsor {
	channel: FindChannelByUsernameQuery['findChannelByUsername']
}

export function ChannelSponsor({ channel }: ChannelSponsor) {
	const t = useTranslations(`stream.sponsors`)

	const { data, loading: isLoadingSponsors } = useFindSponsorByChannelQuery({
		variables: {
			channelId: channel.id
		}
	})

	const sponsors = data?.findSponsorsByChannel ?? []

	if (!sponsors.length || isLoadingSponsors) return null

	return (
		<Card className={`mt-6`}>
			<CardHeader>
				<CardTitle className={`text-xl`}>
					{t(`heading`)} {channel.displayName}
				</CardTitle>
			</CardHeader>
			<CardContent className={`grid grid-cols-12 px-4`}>
				{sponsors.map((sponsor, index) => (
					<Link key={index} href={`/${sponsor.user.username}`}>
						<ChannelAvatar channel={sponsor.user} size={`lg`}/>
					</Link>
				))}
			</CardContent>
		</Card>
	)
}
