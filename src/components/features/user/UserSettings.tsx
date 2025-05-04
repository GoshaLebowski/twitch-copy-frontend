'use client';

import { useTranslations } from 'next-intl';



import { ChangeEmailForm } from '@/components/features/user/account/ChangeEmailForm';
import { ChangePasswordForm } from '@/components/features/user/account/ChangePasswordForm';
import { DeactivateCard } from '@/components/features/user/account/DeactivateCard';
import { WrapperTotp } from '@/components/features/user/account/totp/WrapperTotp';
import { ChangeColorForm } from '@/components/features/user/appearance/ChangeColorForm';
import { ChangeLanguageForm } from '@/components/features/user/appearance/ChangeLanguageForm';
import { ChangeThemeForm } from '@/components/features/user/appearance/ChangeThemeForm';
import { ChangeNotificationsSettingsForm } from '@/components/features/user/notifications/ChangeNotificationsSettingsForm';
import { ChangeInfoForm } from '@/components/features/user/profile/ChangeInfoForm';
import { SocialLinksForm } from '@/components/features/user/profile/social-links-form/SocialLinksForm'
import { SessionsList } from '@/components/features/user/sessions/SessionsList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/common/Tabs';
import { Heading } from '@/components/ui/elements/Heading';



import { useDashboardSettings } from '@/hooks/useDashboardSettings';



import ChangeAvatarForm from './profile/ChangeAvatarForm';
import { UserSettingsSkeleton } from '@/components/layout/skeleton/dashboard/user/UserSettings.skeleton'






export function UserSettings() {
	const t = useTranslations(`dashboard.settings`)

	const { isDefaultValue, setIsTabs, isHydrated } = useDashboardSettings()

	return (
		<div className={`lg:px-10`}>
			{!isHydrated ? (
				<UserSettingsSkeleton />
			) : (
				<>
					<Heading
						title={t(`header.heading`)}
						description={t(`header.description`)}
						size={`lg`}
					/>
					<Tabs
						value={isDefaultValue}
						onValueChange={setIsTabs}
						className={`mt-3 w-full`}
					>
						<TabsList className={`grid max-w-2xl grid-cols-5`}>
							<TabsTrigger
								value={`profile`}
								onClick={() => setIsTabs(`profile`)}
							>
								{t(`header.profile`)}
							</TabsTrigger>
							<TabsTrigger
								value={`account`}
								onClick={() => setIsTabs(`account`)}
							>
								{t(`header.account`)}
							</TabsTrigger>
							<TabsTrigger
								value={`appearance`}
								onClick={() => setIsTabs(`appearance`)}
							>
								{t(`header.appearance`)}
							</TabsTrigger>
							<TabsTrigger
								value={`notifications`}
								onClick={() => setIsTabs(`notifications`)}
							>
								{t(`header.notifications`)}
							</TabsTrigger>
							<TabsTrigger
								value={`sessions`}
								onClick={() => setIsTabs(`sessions`)}
							>
								{t(`header.sessions`)}
							</TabsTrigger>
						</TabsList>
						<TabsContent value={`profile`}>
							<div className={`mt-5 space-y-6`}>
								<Heading
									title={t(`profile.header.heading`)}
									description={t(
										`profile.header.description`
									)}
								/>
								<ChangeAvatarForm />
								<ChangeInfoForm />
								<SocialLinksForm />
							</div>
						</TabsContent>
						<TabsContent value={`account`}>
							<div className={`mt-5 space-y-6`}>
								<Heading
									title={t(`account.header.heading`)}
									description={t(
										`account.header.description`
									)}
								/>
								<ChangeEmailForm />
								<ChangePasswordForm />
								<Heading
									title={t(`account.header.securityHeading`)}
									description={t(
										`account.header.securityDescription`
									)}
								/>
								<WrapperTotp />
								<Heading
									title={t(
										`account.header.deactivationHeading`
									)}
									description={t(
										`account.header.deactivationDescription`
									)}
								/>
								<DeactivateCard />
							</div>
						</TabsContent>
						<TabsContent value={`appearance`}>
							<div className={`mt-5 space-y-6`}>
								<Heading
									title={t(`appearance.header.heading`)}
									description={t(
										`appearance.header.description`
									)}
								/>
								<ChangeThemeForm />
								<ChangeLanguageForm />
								<ChangeColorForm />
							</div>
						</TabsContent>
						<TabsContent value={`notifications`}>
							<div className={`mt-5 space-y-6`}>
								<Heading
									title={t(`notifications.header.heading`)}
									description={t(
										`notifications.header.description`
									)}
								/>
								<ChangeNotificationsSettingsForm />
							</div>
						</TabsContent>
						<TabsContent value={'sessions'}>
							<div className={`mt-5 space-y-6`}>
								<Heading
									title={t(`sessions.header.heading`)}
									description={t(
										`sessions.header.description`
									)}
								/>
								<SessionsList />
							</div>
						</TabsContent>
					</Tabs>
				</>
			)}
		</div>
	)
}