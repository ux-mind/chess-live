import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tournaments from './pages/Tournaments';
import PUBLIC_ROUTES from './data/publicRoutes';

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path={PUBLIC_ROUTES.home} element={<Home />} />
					<Route
						path={`${PUBLIC_ROUTES.tournaments}/:event?/game?`}
						element={<Tournaments />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
