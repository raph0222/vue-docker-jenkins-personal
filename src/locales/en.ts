// english is the default value if there are missing fields in other languages
import type { LocaleMessages } from '@/types/localeMessages'

const en: LocaleMessages = {
  USER_NAME: 'Raphael Rocha',
  USER_POSITION: 'Fullstack Developer',
  USER_LOCATION: 'Seoul, South Korea',
  BIO_TEXT: `
            <p>Hello, I'm Raphael, a junior fullstack developer born in France, now living in South Korea.</p>
            <p>I have more than a year experience as a developer. I'm currently working on personal 
            projects such as this one, and will be working on a backend oriented project as my next one.</p>
            <p>I lived one year in Korea from May 2022 to May 2023. Then I came back in France, worked over a year until July 2024 as a fullstack developer at AtolCD (Dijon).
            Now, I'm back to Korea to pursue a career here. My plan is to live in Seoul, which is why I'm currently learning Korean at Chung-Ang University (Korean Language Program) with a D-4 visa, while looking for 
            a position as a fullstack developer.</p>
            <p>Being a developer is a really fulfulling position for me. Everyday, you learn new things, new practices, and this is always challenging to
            make clean code, use good practice, keep up to date with new updates. 
            Everyday, you have to share knowledge, and receive feedback, which means improvement. This is one of the best part in my opinion.</p>
            <p> I've work at Manpower Korea for 6 months (12/2022 - 06-2023) as a part-time IT recruiter, I couldn't find any part-time position as a developer at that time. 
            This IT-unrelated experience gave me a 
            glimpse of the korean working culture. It made me even more motivated to work in my domain, which is a development.</p>
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
}

export default en