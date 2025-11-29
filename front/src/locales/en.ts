// english is the default value if there are missing fields in other languages
import type { LocaleMessages } from '@/types/localeMessages'

const en: LocaleMessages = {
  USER_NAME: 'Raphael Rocha',
  USER_POSITION: 'Fullstack Engineer',
  USER_LOCATION: 'Seoul, South Korea',
  BIO_TEXT_INTRO: `French software engineer living/working in South Korea with 2 years of experience as a developer. I'm currently working as a fullstack engineer at PhyxUp Health, based in Seoul, Mapo-gu.`,
  BIO_TEXT_EXPERTISE: `Area of expertise:`,
  BIO_TEXT_BULLET_1: 'Backend: Java / Spring, Python / Django (DRF)',
  BIO_TEXT_BULLET_2: 'Frontend: Vue.js, Vuex, Tailwind',
  BIO_TEXT_BULLET_3: 'DevOps: Docker, Git, Github, Gerrit',
  BIO_TEXT_BULLET_4: 'Cloud & Networking: AWS, Cloudflare',
  BIO_TEXT_BULLET_5: 'Database: PostgreSQL',
  BIO_TEXT_CONCLUSION: `Software engineering is deeply stimulating to me because it allows me to learn continuously while solving meaningful problems. I follow strong engineering principles and make sure the requirements are clearly understood, so that every decision contributes to clean, efficient, and maintainable solutions. Beyond making software work, I focus on building systems that reduce technical debt, improve reliability, and scale with the needs of the product.`,
  TIMELINE_TITLE_0: `Fullstack Engineer at PhyxUp Health`,
  TIMELINE_START_DATE_0: '2025-02',
  TIMELINE_END_DATE_0: '',
  TIMELINE_TEXT_0: `Development on both front and backend with Vue and Django (DRF). Adding features, RESTful API endpoints, improving code quality of legacy code, refactoring with better structure/performance, security improvements, worked on authentication, roles/permissions, logging, handling compliance with HIPAA and FHIR.
                    I worked with PostgreSQL on our database (RDS). Improve the CI/CD processes workflows for backend and frontend, handled packaging, release and versioning for our mobile app for iOS and Android using Github Actions for backend 
                    and Cloudflare Pages for the front. Used Github Actions/Codemagic for mobile. I have set up a whole new staging environment (and deployment process, git flow) with AWS as the hosting provider 
                    and Cloudflare managing the DNS resolution. Also working a lot with Docker to manage all services used inside the app.
                    `,
  TIMELINE_TITLE_1: `Fullstack Engineer at AtolCD`,
  TIMELINE_START_DATE_1: '2023-06',
  TIMELINE_END_DATE_1: '2024-07',
  TIMELINE_TEXT_1: `Working on multiple projects, in a team of 10~ people, multiple different stacks.
                    Features development, bug issues, business logic development, new 
                    RESTFUL API, webservices, security fix, on-premise captcha...
                    I've also worked on databases, especially PostgreSQL and PostGIS extension. Integrate data with Geoserver and openLayers.
                    Lastly, I've worked on ci/cd workflows, such as new jenkins pipelines, using docker inside jenkins and docker-compose to generate packages, databases...
                    Setting up demo servers, java upgrades, new packaging and deployment process, documentation, Ansible script to setup the demo server.`,
  TIMELINE_TITLE_2: `Web Developer at Provincial County of Haute-Saone`,
  TIMELINE_START_DATE_2: '2021-03',
  TIMELINE_END_DATE_2: '2021-06',
  TIMELINE_TEXT_2: `Conception and Development : Similarly than previous internship, I achieved the same tasks for a different project.`,
  TIMELINE_TITLE_3: `Web Developer at Provincial County of Haute-Saone`,
  TIMELINE_START_DATE_3: '2019-10',
  TIMELINE_END_DATE_3: '2019-12',
  TIMELINE_TEXT_3: `Conception and Development : Web interface and back-office using Js/Jquery and PHP backend. Conception of PostgreSQL databases.`,
  TEXT_YEAR: 'year',
  TEXT_MONTH: 'month',
  DOWNLOAD_TEXT: 'Resume',
  EDUCATION_TITLE: 'Education',
  EDUCATION_SCHOOL: 'University Marie & Louis Pasteur (UMLP)',
  EDUCATION_DEGREE: "Bachelor's Degree - Computer Science",
  EDUCATION_LOCATION: 'Belfort, France',
  EDUCATION_GRAD_LABEL: 'Graduation:',
  EDUCATION_GRAD_YEAR: '2021',
  TIMELINE_CURRENT: 'Current'
}

export default en
