import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
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
			<FaBars className='nav__hamburger' />
		</nav>
	);
}

export default Navbar;
