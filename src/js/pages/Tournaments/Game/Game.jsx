import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Standings from '../TournamentsContent/Standings/Standings';

function calculateBoardHeight(board) {
	const width = board.offsetWidth;

	board.style.height = `${width}px`;
}

const Game = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const board = document.querySelector('chess-board');

		if (board) {
			calculateBoardHeight(board);
		}

		window.addEventListener('load', () => {
			if (board) {
				calculateBoardHeight(board);
			}
		});

		window.addEventListener('resize', () => calculateBoardHeight(board));

		return () => {
			window.removeEventListener('load', () => {
				if (board) {
					calculateBoardHeight(board);
				}
			});

			window.removeEventListener('resize', () => calculateBoardHeight(board));
		};
	}, []);

	return (
		<div className="pgn-info">
			<div className="tournament-games">
				<div className="tournament-games__content">
					<div className="tabs-wrapper">
						<button className="tab tab_primary" onClick={() => navigate(-1)}>
							Games
						</button>
						<button className="tab tab_primary tab_active">Artemiev - Grischuk</button>
					</div>
					<div>
						<p>Tata Steel Chess Masters 2023</p>
						<p>2023-01-13 - 2023-01-30</p>
					</div>
				</div>
			</div>
			<div className="pgn-wrapper">
				<ct-pgn-viewer move-list-resizable="true" board-size="auto">
					{`[Event "WRBC 2022. Rapid Women"]
				[Site "Almaty, Kazakhstan"]
				[Date "????.??.??"]
				[Round "13.1"]
				[White "Saduakassova, Dinara"]
				[Black "Tan, Zhongyi"]
				[Result "0-1"]
				[TimeControl "15+10"]
				[WhiteElo "2435"]
				[BlackElo "2502"]

				1. d4 {[%clk 00:03:02]} {[%emt 00:00:02]} Nf6 {[%clk 00:03:03]} 2. Nf3 {[%clk
				00:03:03]} {[%emt 00:00:01]} d5 {[%clk 00:03:04]} 3. Bf4 {[%clk 00:03:04]} Bf5
				{[%clk 00:03:05]} {[%emt 00:00:01]} 4. e3 {[%clk 00:03:01]} {[%emt 00:00:04]}
				e6 {[%clk 00:03:06]} {[%emt 00:00:01]} 5. c4 {[%clk 00:02:52]} {[%emt
				00:00:12]} Bxb1 {[%clk 00:03:06]} {[%emt 00:00:02]} 6. Rxb1 {[%clk 00:02:27]}
				{[%emt 00:00:27]} Bb4+ {[%clk 00:03:07]} {[%emt 00:00:02]} 7. Ke2 {[%clk
				00:02:28]} dxc4 {[%clk 00:02:40]} {[%emt 00:00:28]} 8. Qa4+ {[%clk 00:02:22]}
				{[%emt 00:00:07]} Nc6 {[%clk 00:02:41]} {[%emt 00:00:01]} 9. Ne5 {[%clk
				00:02:16]} {[%emt 00:00:08]} a5 {[%clk 00:01:08]} {[%emt 00:01:35]} 10. Nxc6
				{[%clk 00:02:07]} {[%emt 00:00:12]} Qd7 {[%clk 00:00:57]} {[%emt 00:00:12]} 11.
				a3 {[%clk 00:02:03]} {[%emt 00:00:06]} Bd6 {[%clk 00:00:50]} {[%emt 00:00:07]}
				12. Qxc4 {[%clk 00:01:24]} {[%emt 00:00:42]} Bxf4 {[%clk 00:00:26]} {[%emt
				00:00:26]} 13. exf4 {[%clk 00:01:19]} {[%emt 00:00:07]} bxc6 {[%clk 00:00:27]}
				{[%emt 00:00:01]} 14. g3 {[%clk 00:01:12]} {[%emt 00:00:08]} O-O {[%clk
				00:00:22]} {[%emt 00:00:07]} 15. Bg2 {[%clk 00:01:14]} Nd5 {[%clk 00:00:23]}
				{[%emt 00:00:01]} 16. Rhc1 {[%clk 00:01:08]} {[%emt 00:00:07]} Nb6 {[%clk
				00:00:16]} {[%emt 00:00:10]} 17. Qxc6 {[%clk 00:00:54]} {[%emt 00:00:17]} Qxd4
				{[%clk 00:00:14]} {[%emt 00:00:04]} 18. Qc3 {[%clk 00:00:35]} {[%emt 00:00:20]}
				Qxc3 {[%clk 00:00:13]} {[%emt 00:00:03]} 19. Rxc3 {[%clk 00:00:36]} {[%emt
				00:00:01]} Ra7 {[%clk 00:00:14]} {[%emt 00:00:01]} 20. Rbc1 {[%clk 00:00:31]}
				{[%emt 00:00:07]} Rc8 {[%clk 00:00:15]} 21. Bc6 {[%clk 00:00:31]} {[%emt
				00:00:02]} Kf8 {[%clk 00:00:14]} {[%emt 00:00:02]} 22. a4 {[%clk 00:00:19]}
				{[%emt 00:00:14]} Ke7 {[%clk 00:00:14]} {[%emt 00:00:02]} 23. b3 {[%clk
				00:00:14]} {[%emt 00:00:07]} Nd5 {[%clk 00:00:10]} {[%emt 00:00:06]} 24. Bxd5
				{[%clk 00:00:12]} {[%emt 00:00:04]} exd5 {[%clk 00:00:11]} 25. Rc6 {[%clk
				00:00:09]} {[%emt 00:00:06]} Kd7 {[%clk 00:00:09]} {[%emt 00:00:04]} 26. R6c3
				{[%clk 00:00:07]} {[%emt 00:00:04]} c6 {[%clk 00:00:08]} {[%emt 00:00:02]} 27.
				Rd1 {[%clk 00:00:05]} {[%emt 00:00:04]} Rb7 {[%clk 00:00:08]} {[%emt 00:00:02]}
				28. Re3 {[%clk 00:00:04]} {[%emt 00:00:02]} Re8 {[%clk 00:00:09]} {[%emt
				00:00:02]} 29. Rxe8 Kxe8 30. Rd3 Kd7 {[%clk 00:00:10]} {[%emt 00:00:02]} 31.
				Kd2 {[%clk 00:00:05]} {[%emt 00:00:03]} Kd6 {[%clk 00:00:12]} 32. Kc3 {[%clk
				00:00:04]} {[%emt 00:00:03]} c5 {[%clk 00:00:13]} 33. Kc2 {[%clk 00:00:03]}
				{[%emt 00:00:02]} d4 {[%clk 00:00:13]} 34. Rd1 {[%clk 00:00:03]} {[%emt
				00:00:03]} Re7 {[%clk 00:00:14]} {[%emt 00:00:01]} 35. Kd3 {[%clk 00:00:04]}
				Kd5 {[%clk 00:00:15]} {[%emt 00:00:01]} 36. Rc1 {[%clk 00:00:06]} Rb7 {[%clk
				00:00:16]} 37. Rb1 {[%clk 00:00:07]} Rxb3+ {[%clk 00:00:13]} {[%emt 00:00:05]}
				38. Rxb3 {[%clk 00:00:07]} {[%emt 00:00:01]} c4+ {[%clk 00:00:15]} 39. Kc2
				{[%clk 00:00:08]} cxb3+ {[%clk 00:00:16]} {[%emt 00:00:01]} 40. Kxb3 {[%clk
				00:00:10]} f5 {[%clk 00:00:14]} {[%emt 00:00:03]} 0-1)`}
				</ct-pgn-viewer>
			</div>
			<Standings />
		</div>
	);
};

export default Game;
