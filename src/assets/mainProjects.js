import * as icons from './Icons';

export const mainProjects = [
  {
    id: 1,
    title: 'Vomad Guide',
    url: 'https://vomad.guide',
    github: 'https://github.com/benmneb/guide',
    image: 'https://i.ibb.co/6gBsR7d/Screen-Shot-2020-05-12-at-8-55-25-am.png',
    subTitle: "The world's first complete vegan product guide to Australia.",
    stack: [
      {
        icon: icons.ReactJS,
        description: 'ReactJS, React-Router, Material-UI',
      },
      { icon: icons.Redux, description: 'Redux / React-Redux' },
      { icon: icons.NodeJS, description: 'NodeJS / ExpressJS server' },
      { icon: icons.PostgreSQL, description: 'PostgreSQL with Knex.js' },
      { icon: icons.AWS, description: 'AWS Elastic Beanstalk' },
      { icon: icons.PWA, description: 'Installable as a PWA' },
    ],
  },
  {
    id: 2,
    title: 'Veganise It!',
    url: 'https://veganise.it',
    github: 'https://github.com/benmneb/veganise-it',
    image: 'https://i.ibb.co/6gBsR7d/Screen-Shot-2020-05-12-at-8-55-25-am.png',
    subTitle: "The internet's most surprisingly vegan recipes.",
    stack: [
      {
        icon: icons.ReactJS,
        description: 'ReactJS, React-Router, MUI',
      },
      { icon: icons.Redux, description: 'Redux / React-Redux' },
      { icon: icons.NodeJS, description: 'NodeJS / ExpressJS server' },
      { icon: icons.Netlify, description: 'Front-end hosted on Netlify' },
      { icon: icons.Heroku, description: 'Server hosted on Heroku' },
      {
        icon: icons.MongoDB,
        description: 'MongoDB (Native NodeJS Driver) on Atlas',
      },
      { icon: icons.AWS, description: 'Images stored on AWS S3' },
      { icon: icons.PWA, description: 'Installable as a PWA' },
    ],
  },
  {
    id: 3,
    title: 'Four Noble Truths',
    url: 'https://four-noble-truths.vercel.app/',
    github: 'https://github.com/benmneb/four-noble-truths',
    image: 'https://i.ibb.co/9Nqx1Pn/Screen-Shot-2020-05-12-at-8-52-19-am.png',
    subTitle:
      'Deep elaboration of the heart of Buddhas teachings - in his own words.',
    stack: [
      {
        icon: icons.ReactJS,
        description: 'ReactJS, Material-UI',
      },
      {
        icon: icons.Redux,
        description: 'Redux / React-Redux',
      },
      { icon: icons.ExpressJS, description: 'NodeJS / ExpressJS server' },
      { icon: icons.MongoDB, description: 'MongoDB Atlas' },
      { icon: icons.Vercel, description: 'Front-end hosted on Vercel' },
      { icon: icons.Heroku, description: 'Back-end hosted on Heroku' },
      { icon: icons.PWA, description: 'Installable as a PWA' },
    ],
    keyPoints: ['Working with large data objects'],
  },
  // {
  //   id: 4,
  //   title: 'Meditation Subjects',
  //   url: 'github.com',
  //   github: 'https://github.com/benmneb/meditation-subjects',
  //   image: 'https://i.ibb.co/m6sYBw2/Screen-Shot-2020-05-12-at-8-53-59-am.png',
  //   subTitle:
  //     'A 1,500-year-old classic Buddhist manual is now a modern web-app.',
  //   stack: [
  //     {
  //       icon: icons.ReactJS,
  //       description: 'ReactJS, useContext replicating Redux',
  //     },
  //     { icon: icons.PWA, description: 'Installable as a PWA' },
  //   ],
  //   keyPoints: ['Working with large data objects'],
  // },
  {
    id: 4,
    title: 'mui-image',
    url: 'https://mui-image.surge.sh',
    github: 'https://github.com/benmneb/mui-image',
    image: 'https://i.ibb.co/wsKcm17/Screen-Shot-2020-05-12-at-8-51-07-am.png',
    subTitle:
      'The only MUI React component to satisfy the Material guidelines for loading images.',
    stack: [
      {
        icon: icons.ReactJS,
        description: 'ReactJS, NWB, MUI',
      },
      {
        icon: icons.NPM,
        description: 'Published on the NPM registry',
      },
      { icon: icons.Surge, description: 'Demo hosted on Surge' },
    ],
  },
  {
    id: 5,
    title: 'Simple Simon',
    url: 'https://simple-simon.surge.sh',
    github: 'https://github.com/benmneb/simon',
    image: 'https://i.ibb.co/wsKcm17/Screen-Shot-2020-05-12-at-8-51-07-am.png',
    subTitle:
      'Simon game with audio, settings, keyboard navigation and global high scores.',
    stack: [
      { icon: icons.HTML, description: 'HTML5' },
      { icon: icons.CSS, description: 'CSS3' },
      { icon: icons.Jquery, description: 'jQuery' },
      { icon: icons.ExpressJS, description: 'NodeJS / ExpressJS server' },
      { icon: icons.MongoDB, description: 'MongoDB (NodeJS Driver) on Atlas' },
      { icon: icons.Surge, description: 'Front-end hosted on Surge' },
      { icon: icons.Heroku, description: 'Server hosted on Heroku' },
    ],
  },
];
