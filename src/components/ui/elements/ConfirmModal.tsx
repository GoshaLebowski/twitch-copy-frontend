'use client'

import { useTranslations } from 'next-intl'
import type { PropsWithChildren } from 'react'

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '../common/AlertDialog'

interface ConfirmModalProps {
	heading: string
	message: string
	onConfirmAction: () => void
}

export function ConfirmModal({
	children,
	heading,
	message,
	onConfirmAction
}: PropsWithChildren<ConfirmModalProps>) {
	const t = useTranslations('components.confirmModal')

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{heading}</AlertDialogTitle>
					<AlertDialogDescription>{message}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>{t('cancel')}</AlertDialogCancel>
					<AlertDialogAction onClick={onConfirmAction}>
						{t('continue')}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}
