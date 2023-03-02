import { useEffect, useState } from 'react';
import axios from 'axios';

const useAnalysis = (fen, multiPv = 1, variant = 'standard') => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	const ANALYSIS_URL = `https://lichess.org/api/cloud-eval`;

	useEffect(() => {
		const query = async () => {
			try {
				const json = await axios.get(ANALYSIS_URL, {
					params: {
						fen,
						multiPv,
						variant
					}
				});

				setData(json.data);
			} catch (err) {
				setError(err);

				console.log(err.message);
			}
		};

		query();
	}, []);

	return { data, error };
};

export default useAnalysis;
