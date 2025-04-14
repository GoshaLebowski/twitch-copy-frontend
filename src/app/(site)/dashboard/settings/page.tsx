import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Панель управления'
	}
}

export default function DashboardPage() {
	return <div>Dashboard</div>
}
