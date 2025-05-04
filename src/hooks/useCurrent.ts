import { useEffect } from 'react';

import {
	useClearSessionCookieMutation,
	useFindProfileQuery,
} from '@/graphql/generated/output';

import { useAuth } from './useAuth';

export function useCurrent() {
	const { isAuthenticated, exit } = useAuth();

	const {
		data,
		loading: isLoadingProfile,
		refetch,
		error,
	} = useFindProfileQuery({
		skip: !isAuthenticated,
	});

	const [clearSessionCookie] = useClearSessionCookieMutation();

	useEffect(() => {
		if (!error) return;

		if (isAuthenticated) {
			clearSessionCookie();
		}
		exit();
	}, [error, isAuthenticated, clearSessionCookie, exit]);

	return {
		user: data?.findProfile,
		isLoadingProfile,
		refetch,
	};
}