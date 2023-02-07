import React from 'react';

const Title = ({ size = 'l', children }) => {
	switch (size) {
		case 'xl': {
			return <h1 className={`title title_size-${size}`}>{children}</h1>;
		}
		case 'l': {
			return <h2 className={`title title_size-${size}`}>{children}</h2>;
		}
		case 's': {
			return <h3 className={`title title_size-${size}`}>{children}</h3>;
		}
		case 'sm': {
			return <h4 className={`title title_size-${size}`}>{children}</h4>;
		}
		case 'xs': {
			return <h5 className={`title title_size-${size}`}>{children}</h5>;
		}
		default: {
			return <h2 className={`title title_size-${size}`}>{children}</h2>;
		}
	}
};

export default Title;
