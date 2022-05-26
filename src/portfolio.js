const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://hamzaiqbal2000.github.io/cleanfolio',
  title: 'HI.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Hamza Iqbal',
  role: 'Front End Engineer',
  description:
    'An aspiring developer who loves to take on new projects that challenges his analytical and technological capacities.',
  resume:
    'https://drive.google.com/file/d/1ue7y6Nr9QD88dr5INR4362kgrH_HO8bv/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/hamza-i-268aa0138/',
    github: 'https://github.com/hamzaiqbal2000',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Music Player',
    description:
      'An open-source music player application made using React and Sass that allows use to play song of their choice.',

    stack: ['SASS', 'Javascript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://music-player23.herokuapp.com/',
  },
  {
    name: 'Learnrr Frontend',
    description:
      'A platform where teachers and students can connect for online tutions/mentorship. It is created using Sass and react.',
    stack: ['SASS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://learnrr-classroom.herokuapp.com/',
  },
  {
    name: 'Ip Tracker',
    description:
      'An open-source application that allows users to search for the specfic location/information using Ip address. It is created using React, Ipify, and Leaflet ',
    stack: ['Tailwind', 'JavaScript', 'React', 'Ipify', 'Leaflet'],
    sourceCode: 'https://github.com',
    livePreview: 'https://ip-tracker-1.herokuapp.com/',
  },
  {
    name: 'Ignite Games',
    description:
      'An open-source application with a huge database of upcoming and famous games, and users can get information about their favourite games. Created using react, redux.',
    stack: ['SASS', 'JavaScript', 'React', 'Redux'],
    sourceCode: 'https://github.com',
    livePreview: 'https://ignite23.herokuapp.com/',
  },
  {
    name: 'Company Management MERN',
    description:
      'An open source company management system which allows users to add, create, delete departments, employees etc',
    stack: ['SASS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/hamzaiqbal2000/Company-Management-MERN',
    // livePreview: 'https://ignite23.herokuapp.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'Tailwind',
  'Leaflet',
  'Ipify',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hiqbal.bscs18seecs@seecs.edu.pk',
}

export { header, about, projects, skills, contact }
