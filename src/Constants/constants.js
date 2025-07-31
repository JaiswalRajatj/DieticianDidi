/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 18/12/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  npmIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  dateNutMilkshake,
  detoxWater,
  ketoSalad,
  woodApple,
  moongDalChilla,
  tofuRoti,
  roastedMakhana,
  tenderCoconut,
  dalKhichdi,
  avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  npmIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here!",

		"👋 Hi! I’m Dt. Praveena Mishra, a clinical dietitian with 5+ years of industry experience, serving over 10,000+ clients across India. I specialize in crafting custom diet plans that are realistic, region-specific, and tailored to individual health goals and food habits.",
    "No boring meals. No crash diets. Just delicious, science-backed nutrition that fits your culture, lifestyle, cravings, and medical needs — whether it’s diabetes, PCOS, thyroid, weight loss, or muscle gain.",
    "My goal is simple: to make healthy living easy, personal, and sustainable. Let’s work together to build a plan that feels good, tastes great, and actually works for you.",
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Recipes',
  },
  {
    id: 'skills',
    title: 'Services',
  },
  // {
  //   id: 'skills',
  //   title: 'Services',
  // },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Date & Nut Milkshake",
    description: 'Rich in antioxidants, dates provide natural sweetness and energy, while nuts add healthy fats and protein. This milkshake is a delicious way to enjoy a nutritious snack or breakfast.',
    image: dateNutMilkshake,
    // source_code_link: 'https://github.com/bl33h/artMemoryGame',
    demo_link: 'https://www.instagram.com/weight_loss_time_/p/C1FoVLJhk66/?hl=en',
  },
  {
    name: 'Detox Water',
    description: 'Detox water is a refreshing beverage made by infusing water with fruits, vegetables, and herbs. It is known for its hydrating properties and potential health benefits, such as aiding digestion and promoting detoxification.',
    image: detoxWater,
    // source_code_link: 'https://github.com/bl33h/connectFour',
    demo_link: 'https://www.instagram.com/p/C-wuzf3hAFi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    name: 'Keto salad',
    description: 'Keto salad is a low-carb, high-fat dish that typically includes ingredients like leafy greens, avocado, cheese, nuts, and a dressing made with olive oil or mayonnaise. It is designed to fit into a ketogenic diet, which emphasizes high fat and low carbohydrate intake.',
    image: ketoSalad,
    // source_code_link: 'https://github.com/bl33h/pawsitive',
    demo_link: 'https://www.instagram.com/p/C7gNkRvoYfU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    name: 'wood apple/bel juice',
    description: 'Wood apple juice is a refreshing beverage made from the fruit of the wood apple tree. It has a unique flavor and is often enjoyed for its health benefits, including digestive support and hydration.',
    image: woodApple,
    // source_code_link: 'https://github.com/bl33h/clientServerChat',
    demo_link: 'https://www.instagram.com/p/DI6hYJxBM-J/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    name: 'Moong Dal Chilla',
    description: 'Moong Dal Chilla is a savory Indian pancake made from ground moong dal (split green gram) and spices. It is a healthy and protein-rich dish, often served with chutney or yogurt.',
    image: moongDalChilla,
    // source_code_link: 'https://github.com/bl33h/visitOurLands',
    // demo_link: 'https://visitourlands.netlify.app/',
  },
  {
    name: 'Tofu Bhurji with Multigrain Roti',
    description: 'Tofu Bhurji is a delicious and healthy Indian dish made with crumbled tofu, spices, and vegetables. It is often served with multigrain roti for a wholesome meal.',
    image: tofuRoti,
    // source_code_link: 'https://github.com/bl33h/exploringTheSpace',
    // demo_link: 'https://camo.githubusercontent.com/1f7fb7873058b029992d30b8601d2c36582f6bb399482c560d5560c2d02fc37e/68747470733a2f2f6d65646961342e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45784d4773314e6d733459336c6a4e4752684e3270354f574a33625456304f484675616d77314d574a314e6d31344d4849786254567963535a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f76553246666b6d386e6744494e336d6d36572f67697068792e676966',
  },
  {
    name: 'Roasted Makhana',
    description: 'Roasted Makhana is a healthy snack made from fox nuts (lotus seeds) that are roasted until crispy. It is a low-calorie, high-protein snack that is often enjoyed as a guilt-free alternative to chips or other fried snacks.',
    image: roastedMakhana,
    // source_code_link: 'https://github.com/bl33h/disneyPlusReplica',
    // demo_link: 'https://disneyplusreplica.netlify.app',
  },
  {
    name: 'Tender Coconut Water By Nature',
    description: 'Tender Coconut Water is a refreshing and hydrating beverage made from the water of young coconuts. It is rich in electrolytes, making it an excellent choice for rehydration after exercise or on a hot day.',
    image: tenderCoconut,
    // source_code_link: 'https://github.com/bl33h/deepDiveOdysseyRaycasting',
    // demo_link: 'https://camo.githubusercontent.com/94f800b79d759c06717af7d816a16ccff75a0101c942ca9ad3c562d0dd2c9404/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f76312e59326c6b505463354d4749334e6a45784f4870736432527a5a575a6a616e4e366547513364473172616e64755a576b306457357262336f79596d527964584636646a413264535a6c634431324d563970626e526c636d35686246396e61575a66596e6c666157516d593351395a772f634b4c57543837305a4a39587769706e57772f67697068792e676966',
  },
  {
    name: 'Dal Khichdi with Salad',
    description: 'Dal Khichdi is a comforting Indian dish made with rice and lentils, often cooked with spices and vegetables. It is a wholesome and nutritious meal that is easy to digest and perfect for a quick lunch or dinner.',
    image: dalKhichdi,
    // source_code_link: 'https://github.com/bl33h/fibonacciAndFactorial',
    // demo_link: 'https://camo.githubusercontent.com/59b3c9969f369559fbeb1ed6a53f159e0e83b1151b82552b5b2165c4e9686e89/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f312f31612f4669626f6e616363695f63616c6c5f747265655f352e676966',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'Monthly plan',
    icon: htmlIcon,
    description:
      'I have expertise in creating monthly meal plans that are tailored to individual dietary needs and preferences, ensuring a balanced and nutritious approach to healthy eating.',
  },
  {
    id: 'css',
    title: 'Quarterly plan',
    icon: htmlIcon,
    description:
    'I have expertise in creating quarterly meal plans that are tailored to individual dietary needs and preferences, ensuring a balanced and nutritious approach to healthy eating.',
  },
  {
    id: 'javascript',
    title: 'Yearly plan',
    icon: htmlIcon,
    description:
    'I have expertise in creating yearly meal plans that are tailored to individual dietary needs and preferences, ensuring a balanced and nutritious approach to healthy eating.',
  },
  {
    id: 'react',
    title: 'Corporate Wellness plan',
    icon: reactIcon,
    description:
      'I have expertise in creating corporate wellness plans that promote employee health and well-being through tailored nutrition and lifestyle strategies, fostering a healthier and more productive workforce.',
  },
  {
    id: 'java',
    title: 'Hospital collaboration',
    icon: javaIcon,
    description:
      'I have expertise in collaborating with hospitals to provide specialized nutrition services, ensuring patients receive personalized dietary support for their medical conditions and recovery.',
  },
  // {
  //   id: 'aws',
  //   title: 'Amazon Web Services',
  //   icon: awsIcon,
  //   description:
  //     'I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.',
  // },
  // {
  //   id: 'figma',
  //   title: 'Figma',
  //   icon: figmaIcon,
  //   description:
  //   'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
  // },
  // {
  //   id: 'git',
  //   title: 'Git',
  //   icon: gitIcon,
  //   description:
  //   'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  // },
  // {
  //   id: 'github',
  //   title: 'GitHub',
  //   icon: githubIcon,
  //   description:
  //     'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  // },
  // {
  //   id: 'psql',
  //   title: 'Postgresql',
  //   icon: psqlIcon,
  //   description:
  //     'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  // },
  // {
  //   id: 'vite',
  //   title: 'Vite',
  //   icon: viteIcon,
  //   description:
  //     'I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.',
  // },
  // {
  //   id: 'py',
  //   title: 'Python',
  //   icon: pyIcon,
  //   description:
  //     'With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.',
  // },
  // {
  //   id: 'npm',
  //   title: 'npm',
  //   icon: npmIcon,
  //   description:
  //     'When it comes to building web applications, I prefer using npm as my runtime environment over Yarn. I have expertise to develop powerful and scalable web applications.',
  // },
  // {
  //   id: 'neo',
  //   title: 'Neo4j',
  //   icon: neoIcon,
  //   description:
  //     'I am knowledgeable in Neo4j, the graph database management system. I have expertise in utilizing GraphOS to build robust recommendation systems, leveraging the strength of graph-based data modeling.',
  // },
  // {
  //   id: 'raspi',
  //   title: 'Raspberry Pi',
  //   icon: raspIcon,
  //   description:
  //     'I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.',
  // },
  // {
  //   id: 'eslint',
  //   title: 'Eslint',
  //   icon: eslintIcon,
  //   description:
  //     'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  // },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
