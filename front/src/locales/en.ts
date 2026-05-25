// english is the default value if there are missing fields in other languages
import type { LocaleMessages } from '@/types/localeMessages'

const en: LocaleMessages = {
  USER_NAME: 'Raphael Rocha',
  USER_POSITION: 'Software Engineer',
  USER_LOCATION: 'Seoul, South Korea',
  BIO_TEXT_INTRO: `French software engineer living/working in South Korea with 2 years of experience. Worked for a year in a SaaS B2B startup based in Seoul during 2025.`,
  BIO_TEXT_EXPERTISE: `Area of expertise:`,
  BIO_TEXT_BULLET_1: 'Backend: Python / Django (DRF), Flask, Fast API, Java / Spring',
  BIO_TEXT_BULLET_2: 'DevOps: Docker, Docker Compose, Git, Github, Ansible, Gerrit',
  BIO_TEXT_BULLET_3: 'Cloud/Infra: AWS, Cloudflare',
  BIO_TEXT_BULLET_4: 'AI/LLM Application: LangChain, LangSmith, Vertex AI (Gemini), Claude',
  BIO_TEXT_BULLET_5: 'Frontend: Vue.js, Vuex, Tailwind',
  BIO_TEXT_BULLET_6: 'Database: PostgreSQL',
  BIO_TEXT_CONCLUSION: `My interest in mathematics and computing naturally led me to software engineering, where I enjoy solving complex problems through logic, algorithms, and well-structured systems. I follow strong engineering principles and make sure requirements are clearly understood so that every decision contributes to clean, efficient, and maintainable solutions. Beyond making software work, I focus on building systems that reduce technical debt, improve reliability, and scale with the needs of the product. In recent years, I also integrated AI-assisted development tools into my workflow to improve efficiency while maintaining strong technical judgment and remaining mindful of long-term maintainability and code quality.`,
  TIMELINE_TITLE_0: `Software Engineer at PhyxUp Health`,
  TIMELINE_START_DATE_0: '2025-02',
  TIMELINE_END_DATE_0: '2025-12',
  TIMELINE_TEXT_0: `Development on both front and backend with Vue and Django (DRF). Adding features, RESTful API endpoints, improving code quality of legacy code, refactoring with better structure/performance, security improvements, worked on authentication, roles/permissions, logging, handling compliance with HIPAA and FHIR.
                    I worked with PostgreSQL on our database (RDS). Improve the CI/CD processes workflows for backend and frontend, handled packaging, release and versioning for our mobile app for iOS and Android using Github Actions for backend 
                    and Cloudflare Pages for the front. Used Github Actions/Codemagic for mobile. I have set up a whole new staging environment (and deployment process, git flow) with AWS as the hosting provider 
                    and Cloudflare managing the DNS resolution. Also working a lot with Docker to manage all services used inside the app.
                    `,
  TIMELINE_TITLE_1: `Software Engineer at AtolCD`,
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
  PERSONAL_PROJECT_TITLE_0: 'Resume/JD Comparator',
  PERSONAL_PROJECT_TEXT_0: `Built a production-ready AI-assisted app that analyzes resume/JD fit through an LLM-based scoring pipeline. Implemented a Dockerized architecture with a Vue 3 + Vite frontend and a Python Flask backend, using LangChain for LLM orchestration on Google Vertex AI (Gemini). Observability with LangSmith and structured logging.`,
  PERSONAL_PROJECT_LINK_LABEL_0: 'Github Repo',
  PERSONAL_PROJECT_LINK_0: 'https://github.com/raph0222/cv-jd-comparator',
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
