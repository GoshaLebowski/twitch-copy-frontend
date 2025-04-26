'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';



import { Form, FormField } from '@/components/ui/common/Form'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/common/Select'
import { CardContainer } from '@/components/ui/elements/CardContainer';



import { TypeChangeLanguageSchema, changeLanguageSchema } from '@/schemas/user/change-language.schema';





const languagesOptions = {
	ru: 'Русский',
	en: 'English'
}

export function ChangeLanguageForm() {
	const t = useTranslations('dashboard.settings.appearance.language')

	const [isPending, startTransition] = useTransition()
	const router = useRouter()
	const locale = useLocale()

	const form = useForm<TypeChangeLanguageSchema>({
		resolver: zodResolver(changeLanguageSchema),
		values: {
			language: locale as TypeChangeLanguageSchema['language']
		}
	})

	function onSubmit(data: TypeChangeLanguageSchema) {
		startTransition(() => {
			fetch(`/api/set-language`, {
				method: `POST`,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ language: data.language })
			})
				.then(() => {
					toast.success(t(`successMessage`))
					router.refresh()
				})
				.catch(() => {
					toast.error(t(`errorMessage`))
				})
		})
	}

	function handleLanguageChange(value: string) {
		form.setValue(`language`, value as TypeChangeLanguageSchema[`language`])
		form.handleSubmit(onSubmit)()
	}

	return (
		<CardContainer
			heading={t('heading')}
			description={t('description')}
			rightContent={
				<Form {...form}>
					<FormField
						control={form.control}
						name='language'
						render={({ field }) => (
							<Select
								onValueChange={handleLanguageChange}
								value={field.value}
							>
								<SelectTrigger className='w-[180px]'>
									<SelectValue
										placeholder={t('selectPlaceholder')}
									/>
								</SelectTrigger>
								<SelectContent>
									{Object.entries(languagesOptions).map(
										([code, name]) => (
											<SelectItem
												key={code}
												value={code}
												disabled={isPending}
											>
												{name}
											</SelectItem>
										)
									)}
								</SelectContent>
							</Select>
						)}
					/>
				</Form>
			}
		/>
	)
}
