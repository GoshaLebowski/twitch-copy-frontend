import type { FindRandomCategoriesQuery } from '@/graphql/generated/output'

interface CategoriesListProps {
	heading?: string
	categories: FindRandomCategoriesQuery['findRandomCategories']
}

export function CategoriesList({ heading, categories }: CategoriesListProps) {
	return categories.length ? <div>CategoriesList</div> : <div>Not found</div>
}
