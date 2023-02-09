import React from 'react';
import PUBLIC_ROUTES from '../data/publicRoutes';
import { Link } from 'react-router-dom';

const links = [
	{ name: 'HOME', route: PUBLIC_ROUTES.home },
	{ name: 'RELATED CHESS SITES', route: PUBLIC_ROUTES.sites },
	{ name: 'RELATED CHESS CHANNELS', route: PUBLIC_ROUTES.channels },
	{ name: 'POPULAR CHESS ACCOUNTS', route: PUBLIC_ROUTES.accounts },
	{ name: 'CHESS STORES', route: PUBLIC_ROUTES.stores }
];

const Menu = ({ isOpened, setIsOpened }) => {
	const menuClose = () => {
		const html = document.documentElement;

		html.classList.remove('.is-locked');

		setIsOpened(false);
	};

	return (
		<div className={isOpened ? `menu menu_opened` : `menu`}>
			<div className="container">
				<div className="menu-wrapper">
					<button className="close" onClick={() => menuClose()}>
						<span></span>
						<span></span>
					</button>
					<ul className="menu-list">
						{links.map(({ name, route }) => (
							<li className="menu-list__item" key={name}>
								<Link to={route} onClick={() => menuClose()}>
									{name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Menu;
