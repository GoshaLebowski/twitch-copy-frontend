'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';



import { ProfileMenu } from '@/components/layout/header/ProfileMenu';
import { Button } from '@/components/ui/common/Button'
import { Skeleton } from '@/components/ui/common/Skeleton'



import { useAuth } from '@/hooks/useAuth';





export function HeaderMenu() {
	const t = useTranslations(`layout.header.headerMenu`)
	const { isAuthenticated } = useAuth()

	if (!isAuthenticated) {
		return (
			<div className={`ml-auto flex items-center gap-x-4`}>
				<Skeleton className={`size-6`} />
				<Skeleton className={`size-9 rounded-full`} />
			</div>
		)
	}

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
