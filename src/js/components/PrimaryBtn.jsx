import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryBtn = ({ type, route, onClick, children }) => {
	return (
		<>
			{type === 'link' ? (
				<Link className="btn btn_primary" to={route ? route : '/'}>
					{children}
				</Link>
			) : (
				<button className="btn btn_primary">{children}</button>
			)}
		</>
	);
};

export default PrimaryBtn;
