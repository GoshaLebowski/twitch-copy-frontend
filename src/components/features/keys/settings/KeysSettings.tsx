'use client';

import { useTranslations } from 'next-intl';



import { StreamKey } from '@/components/features/keys/settings/forms/StreamKey';
import { StreamUrl } from '@/components/features/keys/settings/forms/StreamURL';
import { KeysSettingsSkeleton } from '@/components/layout/skeleton/dashboard/keys/keysSettings.skeleton'
import { Heading } from '@/components/ui/elements/Heading'
import { ToggleCardSkeleton } from '@/components/ui/elements/ToggleCard';



import { useCurrent } from '@/hooks/useCurrent';



import { InstructionModal } from './InstructionModal';
import { CreateIngressForm } from './forms/CreateIngressForm';





export function KeysSettings() {
	const t = useTranslations('dashboard.keys.header')

	const { user, isLoadingProfile } = useCurrent()

	return (
		<div className={`lg:px-10`}>
			{isLoadingProfile ? (
				<KeysSettingsSkeleton />
			) : (
				<>
					<div
						className={`block items-center justify-between space-y-3 lg:flex lg:space-y-0`}
					>
						<Heading
							title={t(`heading`)}
							description={t(`description`)}
							size={`lg`}
						/>
						<div className={`flex items-center gap-x-4`}>
							<InstructionModal />
							<CreateIngressForm />
						</div>
					</div>
					<div className={`mt-5 space-y-6`}>
						{isLoadingProfile ? (
							Array.from({ length: 2 }).map((_, index) => (
								<ToggleCardSkeleton key={index} />
							))
						) : (
							<>
								<StreamUrl value={user?.stream.serverUrl!} />
								<StreamKey value={user?.stream.streamKey!} />
							</>
						)}
					</div>
				</>
			)}
		</div>
	)
}
