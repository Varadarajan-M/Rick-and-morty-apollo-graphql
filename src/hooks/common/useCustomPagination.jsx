import { useMemo, useState } from 'react';

export default function useCustomPagination(data, itemsPerPage) {
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
