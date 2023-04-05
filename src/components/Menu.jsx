import React, { useEffect, useRef, useState, useMemo } from 'react';

export const MenuContainer = ({ children, className, style }) => {
	const classes = `custom-menu-container ${className ?? ''}`;
	return (
		<div style={style} className={classes}>
			{children}
		</div>
	);
};

export const Menu = ({
	children,
	className,
	open,
	onBlur,
	closedWithMenuItem,
	style,
}) => {
	const MENU_CLOSE_CLASS = useMemo(
		() => `custom-menu ${className ?? ''}`,
		[className],
	);

	const MENU_OPEN_CLASS = useMemo(
		() => `custom-menu ${className ?? ''} ${open ? 'open' : ''}`,
		[className, open],
	);

	const [menuClass, setMenuClass] = useState(MENU_CLOSE_CLASS);

	const menuRef = useRef(null);

	useEffect(() => {
		const { current } = menuRef;
		if (open && current) {
			current?.focus();
			setMenuClass(() => MENU_OPEN_CLASS);
		}
		// *only triggers when the menu is closed by clicking menu item
		if (closedWithMenuItem) setMenuClass(MENU_CLOSE_CLASS);
	}, [open, MENU_CLOSE_CLASS, MENU_OPEN_CLASS, closedWithMenuItem]);

	// *only triggers when the clicked outside of menu component.
	const onBlurFn = () => {
		setMenuClass(MENU_CLOSE_CLASS);
		onBlur?.();
	};

	return (
		<div
			ref={menuRef}
			style={style}
			onBlur={onBlurFn}
			tabIndex={0}
			className={menuClass}
		>
			{children}
		</div>
	);
};

export const MenuItem = ({ children, className, onClick }) => {
	const classes = `custom-menu-item ${className ?? ''}`;
	return (
		<span onClick={onClick} className={classes}>
			{children}
		</span>
	);
};
