import { useEffect, useState } from 'react'

import { settingsStore } from '@/store/dashboard/settings/settings.store'

export function useSettingsStoreHydration() {
	const [isHydrated, setIsHydrated] = useState(false)

	useEffect(() => {
		const unsubscribe = settingsStore.persist.onFinishHydration(() => {
			setIsHydrated(true)
		})

		setIsHydrated(settingsStore.persist.hasHydrated())

		return () => unsubscribe()
	}, [])

	return isHydrated
}
