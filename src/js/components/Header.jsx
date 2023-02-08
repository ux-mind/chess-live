import React, { useState } from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import PUBLIC_ROUTES from '../data/publicRoutes';

const links = [
	{ name: 'HOME', route: PUBLIC_ROUTES.home },
	{ name: 'RELATED CHESS SITES', route: PUBLIC_ROUTES.sites },
	{ name: 'RELATED CHESS CHANNELS', route: PUBLIC_ROUTES.channels },
	{ name: 'POPULAR CHESS ACCOUNTS', route: PUBLIC_ROUTES.accounts },
	{ name: 'CHESS STORES', route: PUBLIC_ROUTES.stores }
];

const Header = () => {
	const [menuOpened, setMenuOpened] = useState(false);

	return (
		<>
			<header className="header">
				<div className="container">
					<ul className="header-links">
						{links.map(({ name, route }) => (
							<li className="header-links__item" key={name}>
								<Link to={route}>{name}</Link>
							</li>
						))}
					</ul>
					<button className="menu-btn" onClick={() => setMenuOpened(true)}>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</header>
			<Menu isOpened={menuOpened} setIsOpened={setMenuOpened} />
		</>
	);
};

export default Header;
