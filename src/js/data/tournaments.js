const tournaments = [
	{
		status: 'current',
		events: [
			{
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
			{ event: `Tata Steel Chess Challengers 2023` },
			{ event: `1000GM Schiller GM 2023` },
			{ event: `1000GM Schiller IM 2023` },
			{ event: `4NCL Division 1 2022/2023` },
			{ event: `Azerbaijan Championship Final 2023` }
		]
	},
	{
		status: 'upcoming',
		events: [
			{ event: `FIDE World Chess Championship 2023` },
			{ event: `FIDE Women's Grand Prix | Third Leg 2022/23` },
			{ event: `American Cup Open 2023` },
			{ event: `American Cup Women's 2023` },
			{ event: `Cairns Cup 2023` },
			{ event: `Summer Chess Classic A 2023` }
		]
	},
	{
		status: 'completed',
		events: [
			{ event: `Tata Steel Chess Qualifiers 2023` },
			{ event: `Singapore Open and Women Chess Championships 2023` },
			{ event: `Sakha Chess Cup 2023` },
			{ event: `Rudar 9 IM 2023` },
			{ event: `Perez Chess Open 2023` },
			{ event: `Lozovatsky Memorial - Women 2023` }
		]
	}
];

export default tournaments;
