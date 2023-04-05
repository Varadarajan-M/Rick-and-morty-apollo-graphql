import { useEffect, useMemo, useState, useCallback } from 'react';

export function useDebounceValue(value, delay) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	if (typeof value === 'string') value = value.trim();

	let timer = null;
	useEffect(() => {
		if (!timer) timer = setTimeout(() => setDebouncedValue(value), delay);
		return () => clearTimeout(timer);
	}, [value, delay]);

	return debouncedValue;
}

export function useCustomPagination(data, itemsPerPage) {
	const [page, setPage] = useState(1);
	const offset = (page - 1) * itemsPerPage;
	const limit = offset + itemsPerPage;
	const totalPages = Math.ceil(data?.length / itemsPerPage);

	const paginatedData = useMemo(
		() => data?.slice(offset, limit),
		[offset, limit, data],
	);

	return { page, setPage, paginatedData, totalPages };
}

export const useMenu = () => {
	const [open, setOpen] = useState(false);
	const openMenu = useCallback(() => {
		setOpen(true);
	}, []);
	const closeMenu = useCallback(() => {
		setTimeout(() => setOpen(false), 200);
	}, []);

	return { open, openMenu, closeMenu };
};
