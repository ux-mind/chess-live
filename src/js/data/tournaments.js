const tournaments = [
	{
		status: 'current',
		events: [
			{
				path: 'tata-steel-chess-masters-2023',
				event: `Tata Steel Chess Masters 2023`,
				site: 'Almaty, Kazakhstan',
				date: '????.??.??',
				round: '13.1',
				white: 'Saduakassova, Dinara',
				black: 'Tan, Zhongyi',
				result: '0-1',
				timeControl: '15+10',
				whiteElo: '2435',
				blackElo: '2502'
			},
			{
				path: 'tata-steel-chess-challengers-2023',
				event: `Tata Steel Chess Challengers 2023`
			},
			{ path: '1000gm-schiller-gm-2023', event: `1000GM Schiller GM 2023` },
			{ path: '1000GM-schiller-im-2023', event: `1000GM Schiller IM 2023` },
			{ path: '4ncl-division-1-2022-2023', event: `4NCL Division 1 2022/2023` },
			{
				path: 'azerbaijan-championship-final-2023',
				event: `Azerbaijan Championship Final 2023`
			}
		]
	},
	{
		status: 'upcoming',
		events: [
			{
				path: 'fide-world-chess-championship-2023',
				event: `FIDE World Chess Championship 2023`
			},
			{
				path: 'fide-women-grand-prix',
				event: `FIDE Women's Grand Prix | Third Leg 2022/23`
			},
			{ path: 'american-cup-open-2023', event: `American Cup Open 2023` },
			{ path: 'american-cup-women-2023', event: `American Cup Women's 2023` },
			{ path: 'cairns-cup-2023', event: `Cairns Cup 2023` },
			{ path: 'summer-chess-classic-a-2023', event: `Summer Chess Classic A 2023` }
		]
	},
	{
		status: 'completed',
		events: [
			{ path: 'tata-steel-chess-qualifiers-2023', event: `Tata Steel Chess Qualifiers 2023` },
			{
				path: 'singapore-chess-championships-2023',
				event: `Singapore Open and Women Chess Championships 2023`
			},
			{ path: 'sakha-chess-cup-2023', event: `Sakha Chess Cup 2023` },
			{ path: 'rudar-9-im-2023', event: `Rudar 9 IM 2023` },
			{ path: 'perez-chess-open-2023', event: `Perez Chess Open 2023` },
			{ path: 'lozovatsky-memorial-2023', event: `Lozovatsky Memorial - Women 2023` }
		]
	}
];

export default tournaments;
