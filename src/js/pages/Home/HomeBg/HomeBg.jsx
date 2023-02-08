import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const HomeBg = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 991px)' });

	const [vh, setVh] = useState(window.innerHeight);
	const [vw, setVw] = useState(window.innerWidth);

	const cageWidth = isMobile ? 132 : 292;

	const cageCountHeight = vh / cageWidth;
	const cageCountWidth = vw / cageWidth;

	const cageFactor = isMobile ? 3.2 : 2.2;

	const cageCount = Math.round(
		Math.ceil(cageCountHeight) * Math.ceil(cageCountWidth) * cageFactor
	);

	const cageArray = Array(cageCount).fill(null);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setVh(window.innerHeight);
			setVw(window.innerWidth);
		});

		return () =>
			window.removeEventListener('resize', () => {
				setVh(window.innerHeight);
				setVw(window.innerWidth);
			});
	}, []);

	return (
		<div className="home-bg">
			{cageArray.map((item, idx) => (
				<div className={idx % 2 ? 'cage cage_transparent' : 'cage'} key={idx}></div>
			))}
		</div>
	);
};

export default HomeBg;
