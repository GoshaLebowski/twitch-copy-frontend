'use client'

import { useTranslations } from 'use-intl'

export default function Home() {
	const t = useTranslations('home')

	return (
		<div className={`text-4xl font-bold`}>Home</div>
	)
}