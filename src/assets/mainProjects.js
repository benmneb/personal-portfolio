import * as icons from './icons';

export const mainProjects = [
	{
		id: 1,
		title: 'Vomad Guide',
		url: 'https://vomad.guide',
		github: 'https://github.com/benmneb',
		image: 'https://i.ibb.co/6gBsR7d/Screen-Shot-2020-05-12-at-8-55-25-am.png',
		subTitle: 'The worlds first complete vegan product guide to Australia.',
		stack: [
			icons.ReactJS,
			icons.Redux,
			icons.NodeJS,
			icons.PostgreSQL,
			icons.AWS,
			icons.PWA,
		],
	},
	{
		id: 2,
		title: 'Meditation Subjects',
		url: 'github.com',
		github: 'https://github.com/benmneb/meditation-subjects',
		image: 'https://i.ibb.co/m6sYBw2/Screen-Shot-2020-05-12-at-8-53-59-am.png',
		subTitle: 'A 1,500-year-old classic Buddhist manual is now a modern web-app.',
		stack: [icons.ReactJS, icons.PWA],
		keyPoints: [
			'State managed by React Context replicating Redux',
			'Working with large data objects',
		],
	},
	{
		id: 3,
		title: 'Four Noble Truths',
		url: 'github.com',
		github: 'https://github.com/benmneb/four-noble-truths',
		image: 'https://i.ibb.co/9Nqx1Pn/Screen-Shot-2020-05-12-at-8-52-19-am.png',
		subTitle: 'Deep elaboration of the heart of Buddhas teachings - in his own words.',
		stack: [icons.ReactJS],
		keyPoints: [
			'State managed by React Context replicating Redux use',
			'Working with large data objects',
		],
	},
	{
		id: 4,
		title: 'Simon',
		url: 'github.com',
		github: 'https://github.com/benmneb/simon',
		image: 'https://i.ibb.co/wsKcm17/Screen-Shot-2020-05-12-at-8-51-07-am.png',
		subTitle: 'Simon game with audio, settings and keyboard navigation.',
		stack: [icons.HTML, icons.CSS, icons.Jquery],
	},
];
