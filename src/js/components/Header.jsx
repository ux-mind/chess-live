import React from 'react';
import { Link } from 'react-router-dom';

const links = [
	{ name: 'HOME', route: '/' },
	{ name: 'RELATED CHESS SITES', route: '/related-sites' },
	{ name: 'RELATED CHESS CHANNELS', route: '/related-channels' },
	{ name: 'POPULAR CHESS ACCOUNTS', route: '/related-accounts' },
	{ name: 'CHESS STORES', route: '/stores' }
];

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<ul className="header-links">
					{links.map(({ name, route }) => (
						<li className="header-links__item" key={name}>
							<Link to={route}>{name}</Link>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
};

export default Header;
