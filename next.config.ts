import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/libs/i18n/request.ts')

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'a7034cfe-7e6e-453c-8e6a-f003dcb63a4e.selstorage.ru'
			}
		]
	},
	devIndicators: false
}

export default withNextIntl(nextConfig)