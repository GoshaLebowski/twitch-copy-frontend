import { useSettingsStoreHydration } from '@/hooks/useSettingsStoreHydration'

import { settingsStore } from '@/store/dashboard/settings/settings.store'

export function useDashboardSettings() {
	const isDefaultValue = settingsStore(state => state.isDefaultValue)
	const setIsDefaultValue = settingsStore(state => state.setIsDefaultValue)
	const isHydrated = useSettingsStoreHydration()

	const setIsTabs = (value: string) => setIsDefaultValue(value)

	return {
		isDefaultValue: isHydrated ? isDefaultValue : undefined,
		setIsTabs,
		isHydrated
	}
}
