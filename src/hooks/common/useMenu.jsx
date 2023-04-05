import { useState, useCallback } from 'react';

export default function useMenu() {
	const [open, setOpen] = useState(false);
	const openMenu = useCallback(() => {
		setOpen(true);
	}, []);
	const closeMenu = useCallback(() => {
		setTimeout(() => setOpen(false), 200);
	}, []);

	return { open, openMenu, closeMenu };
}
