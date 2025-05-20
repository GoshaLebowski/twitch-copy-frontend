import { Card } from '@/components/ui/common/Card'
import { Loader } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function LoadingChat() {
	const t = useTranslations(`stream.chat`)

	return (
		<Card
			className={`flex justify-center items-center h-[82%] w-[21.5%] flex-col overflow-y-auto lg:fixed xl:mt-0`}
		>
			<Loader className={`size-10 animate-spin text-muted-foreground`}/>
			<p className={`mt-3 text-lg text-muted-foreground`}>{t(`loading`)}</p>
		</Card>
	)
}