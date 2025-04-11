'use client'

import Link from 'next/link'
import { useTranslations } from 'use-intl'

import { ProfileMenu } from '@/components/layout/header/ProfileMenu'
import { Button } from '@/components/ui/common/Button'

import { useAuth } from '@/hooks/useAuth'

export function HeaderMenu() {
	const t = useTranslations('layout.header.headerMenu')
	const { isAuthenticated } = useAuth()

	return (
		<div className={`ml-auto flex items-center gap-x-4`}>
			{isAuthenticated ? (
				<ProfileMenu />
			) : (
				<>
					<Link href={`/account/login`}>
						<Button variant={`secondary`}>{t('login')}</Button>
					</Link>
					<Link href={`/account/create`}>
						<Button>{t('register')}</Button>
					</Link>
				</>
			)}
		</div>
	)
}
