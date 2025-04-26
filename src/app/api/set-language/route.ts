import { NextResponse } from 'next/server'

import { setLanguage } from '@/libs/i18n/language'

export async function POST(req: Request) {
	const { language } = await req.json()
	await setLanguage(language)
	return NextResponse.json({ success: true })
}