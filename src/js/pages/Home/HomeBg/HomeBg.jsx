import React from 'react';

const HomeBg = () => {
	const vh = window.innerHeight;
	const vw = window.innerWidth;

	const cageWidth = 292;

	const cageCountHeight = vh / cageWidth;
	const cageCountWidth = vw / cageWidth;

	const cageCount = Math.round(Math.ceil(cageCountHeight) * Math.ceil(cageCountWidth) * 2.2);

	const cageArray = Array(cageCount).fill(null);

	return (
		<div className="home-bg">
			{cageArray.map((item, idx) => (
				<div className={idx % 2 ? 'cage cage_transparent' : 'cage'} key={idx}></div>
			))}
		</div>
	);
};

export default HomeBg;
