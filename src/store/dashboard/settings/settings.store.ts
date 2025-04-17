import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import { SettingsStore } from '@/store/dashboard/settings/settings.types'

export const settingsStore = create(
	persist<SettingsStore>(
		set => ({
			isDefaultValue: `profile`,
			setIsDefaultValue: (value: string) => set({ isDefaultValue: value })
		}),
		{
			name: 'dashboard-settings',
			storage: createJSONStorage(() => localStorage)
		}
	)
)