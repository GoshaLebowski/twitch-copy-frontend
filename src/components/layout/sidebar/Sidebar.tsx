'use client';

import { usePathname } from 'next/navigation'



import { DashboardNav } from '@/components/layout/sidebar/DashboardNav';
import { SidebarHeader } from '@/components/layout/sidebar/SidebarHeader';
import { UserNav } from '@/components/layout/sidebar/UserNav';



import { useSidebar } from '@/hooks/useSidebar';



import { cn } from '@/utils/tw-merge';





export function Sidebar() {
	const { isCollapsed } = useSidebar()

	const pathname = usePathname()

	const isDashboardPage = pathname.includes('/dashboard')

	return (
		<aside
			className={cn(
				`fixed left-0 z-50 mt-[75px] flex h-full flex-col border-r border-border bg-card transition-all duration-100 ease-in-out`,
				isCollapsed ? `w-16` : `w-[17rem]`
			)}
		>
			<SidebarHeader />
			{isDashboardPage ? <DashboardNav /> : <UserNav />}
		</aside>
	)
}
