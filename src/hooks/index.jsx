import { useEffect, useState } from 'react';

export function useDebounceValue(value, delay) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	let timer = null;
	useEffect(() => {
		if (!timer) timer = setTimeout(() => setDebouncedValue(value), delay);
		return () => clearTimeout(timer);
	}, [value, delay]);

	return debouncedValue;
}
