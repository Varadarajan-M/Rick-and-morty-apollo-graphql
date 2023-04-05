import { useEffect, useState } from 'react';

export default function useDebounceValue(value, delay) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	if (typeof value === 'string') value = value.trim();

	let timer = null;
	useEffect(() => {
		if (!timer) timer = setTimeout(() => setDebouncedValue(value), delay);
		return () => clearTimeout(timer);
	}, [value, delay]);

	return debouncedValue;
}
