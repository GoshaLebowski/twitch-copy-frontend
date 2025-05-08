import { FindRandomStreamsDocument, FindRandomStreamsQuery } from '@/graphql/generated/output';



import { SERVER_URL } from '@/libs/constants/url.constants';





async function findRandomStreams() {
	try {
		const query = FindRandomStreamsDocument.loc?.source.body

		const response = await fetch(SERVER_URL, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({ query }),
			next: {
				revalidate: 30
			}
		})

		const data = await response.json()

		return {
			streams: data.data
				.findRandomStreams as FindRandomStreamsQuery['findRandomStreams']
		}
	} catch (error) {
		console.log(error)
		throw new Error('Ошибка при получени стримов')
	}
}

export default async function HomePage() {
	const {streams} = await findRandomStreams();

	return <div className={`space-y-10`}>
		{JSON.stringify(streams, null, 2)}
	</div>
}