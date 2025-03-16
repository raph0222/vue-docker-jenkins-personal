// english is the default value if there are missing fields in other languages
import type { LocaleMessages } from '@/types/localeMessages'

const en: LocaleMessages = {
  USER_NAME: 'Raphael Rocha',
  USER_POSITION: 'Fullstack Developer',
  USER_LOCATION: 'Seoul, South Korea',
  BIO_TEXT: `
            <p>Hello, I'm Raphael, a junior fullstack developer born in France, now working in South Korea.</p>
            <p>I have 2 years~ of experience as a developer. I'm currently working as a fullstack developer in PhyxUp Health.</p>
            <p> My main interests are backend development, DevOps practices and Cloud. I also did a lot of front development.
            I have the most experience in Vue and Spring. I also have experience working with Django. These days, I've been working a lot with Vue, Django,
            CI/CD workflows, Docker, AWS services and Cloudflare.</p>
            <p>Being a developer is a truly fulfilling role for me, as it's a role where I get to learn and grow everyday. 
            Making software work is just the baseline, I always try to understand how it works in depth, and follow best practices and make thoughtful decisions to ensure the code I produce is clean, efficient, 
            and easy to understand.</p><p>I also really care about building
            well-structured and well-documented systems that are easy to maintain and scale for the whole team.
            Now that AI is available and very efficient, unlike when I started coding, we should take full advantage of it to save time. It's a powerful tool that can greatly boost productivity if used wisely. Still, investing time upfront to avoid messy code and technical debt remains essential.</p>`,
  TIMELINE_TITLE_0: `Fullstack Developer at PhyxupHealth`,
  TIMELINE_START_DATE_0: '2025-02',
  TIMELINE_END_DATE_0: '',
  TIMELINE_TEXT_0: `Development on both front and backend with Vue and Django (DRF). Adding features, RESTful API endpoints, improving code quality of legacy code, refactoring with better structure/performance, security improvements, worked on authentication, roles/permissions, logging, handling compliance with HIPAA and FHIR.
                    I worked with PostgreSQL on our database (RDS). Improve the CI/CD processes workflows for backend and frontend, handled packaging, release and versioning for our mobile app for iOS and Android using Github Actions for backend 
                    and Cloudflare Pages for the front. Used Github Actions/Codemagic for mobile. I have set up a whole new staging environment (and deployment process, git flow) with AWS as the hosting provider 
                    and Cloudflare managing the DNS resolution. Also working a lot with Docker to manage all services used inside the app.
                    `,
  TIMELINE_TITLE_1: `Fullstack Developer at AtolCD`,
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
  DOWNLOAD_TEXT: ' Resume',
  TIMELINE_CURRENT: 'Current'
}

export default en
