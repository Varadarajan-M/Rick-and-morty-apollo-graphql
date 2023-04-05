import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Menu, MenuContainer, MenuItem } from './Menu';
import { useMenu } from '../hooks';

function Navbar() {
	const { open, openMenu, closeMenu } = useMenu();
	return (
		<nav className='navbar'>
			<h5 className='navbar__brand'>
				<Link to={'/characters'}>Rick and Morty</Link>
			</h5>
			<ul className='nav-links'>
				<li>
					<Link to={'/characters'}>Characters </Link>
				</li>
				<li>
					<Link to={'/episodes'}>Episodes</Link>
				</li>
			</ul>

			<MenuContainer className='nav__hamburger'>
				<FaBars onClick={openMenu} />

				<Menu className={'nav__hamburger--menu'} open={open} onBlur={closeMenu}>
					<MenuItem>
						<Link to={'/characters'}>Characters </Link>
					</MenuItem>
					<MenuItem>
						<Link to={'/episodes'}>Episodes</Link>
					</MenuItem>
				</Menu>
			</MenuContainer>
		</nav>
	);
}

export default Navbar;
