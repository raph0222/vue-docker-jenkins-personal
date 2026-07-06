// english is the default value if there are missing fields in other languages
import type { LocaleMessages } from '@/types/localeMessages'

const en: LocaleMessages = {
  USER_NAME: 'Raphael Rocha',
  USER_POSITION: 'Software Engineer',
  USER_LOCATION: 'Seoul, South Korea',
  BIO_TEXT_INTRO: `French software engineer living in South Korea for 3 years, with 2 years of working experience. Worked for a year in a SaaS B2B startup based in Seoul during 2025.`,
  BIO_TEXT_EXPERTISE: `Area of expertise:`,
  BIO_TEXT_BULLET_1: 'Backend: Python / Django (DRF), Flask, Fast API, Java / Spring',
  BIO_TEXT_BULLET_2: 'DevOps: Docker, Docker Compose, Git, Github, Ansible, Gerrit',
  BIO_TEXT_BULLET_3: 'Cloud/Infra: AWS, Cloudflare',
  BIO_TEXT_BULLET_4:
    'AI Application: LangChain, RAG, Qdrant, LangSmith, Vertex AI (Gemini), Claude',
  BIO_TEXT_BULLET_5: 'Frontend: Vue.js, Vuex, Tailwind',
  BIO_TEXT_BULLET_6: 'Database: PostgreSQL',
  BIO_TEXT_CONCLUSION: `My interest in mathematics and computing naturally led me to software engineering, where I enjoy solving complex problems through logic, algorithms, and well-structured systems. I follow strong engineering principles and make sure requirements are clearly understood so that every decision contributes to clean, efficient, and maintainable solutions. Beyond making software work, I focus on building systems that reduce technical debt, improve reliability, and scale with the needs of the product. In recent years, I also integrated AI-assisted development tools into my workflow to improve efficiency while maintaining strong technical judgment and remaining mindful of long-term maintainability and code quality.`,
  TIMELINE_TITLE_0: `Software Engineer at PhyxUp Health`,
  TIMELINE_START_DATE_0: '2025-02',
  TIMELINE_END_DATE_0: '2025-12',
  TIMELINE_TEXT_0: `Partnered directly with the CEO, leading end-to-end delivery across software engineering, cloud infrastructure, data-driven optimization, deployment automation, testing, and production operations.`,
  TIMELINE_TITLE_1: `Software Engineer at AtolCD`,
  TIMELINE_START_DATE_1: '2023-06',
  TIMELINE_END_DATE_1: '2024-07',
  TIMELINE_TEXT_1: `Worked as a fullstack software engineer within an IT consulting company, alongside senior engineers. Worked on various projects for French Ministry of the Interior, ARCEP, ANFR...`,
  TIMELINE_TITLE_2: `Web Developer at Provincial County of Haute-Saone`,
  TIMELINE_START_DATE_2: '2021-03',
  TIMELINE_END_DATE_2: '2021-06',
  TIMELINE_TEXT_2: `Conception and Development : Web interface and back-office.`,
  TIMELINE_TITLE_3: `Web Developer at Provincial County of Haute-Saone`,
  TIMELINE_START_DATE_3: '2019-10',
  TIMELINE_END_DATE_3: '2019-12',
  TIMELINE_TEXT_3: `Conception and Development : continue the project from the previous internship.`,
  KOREA_EXP_TITLE_0: `IT Headhunter at Manpower Korea`,
  KOREA_EXP_START_DATE_0: '2022-12',
  KOREA_EXP_END_DATE_0: '2023-05',
  KOREA_EXP_TEXT_0: `Recruiting of backend engineers, network engineers, infrastructure engineers, DevOps and NLP engineers.`,
  PERSONAL_PROJECT_TITLE_0: 'AI-assisted Resume/JD Comparator',
  PERSONAL_PROJECT_TEXT_0: `Built a production-ready AI-assisted Resume/JD platform with two features: a matching feature that finds
                            the best candidates for a given Job Description from the resume pool, and a comparison feature that scores
                            fit between a single resume and JD. Implemented a "find best candidates" feature using a two-stage RAG pipeline: Qdrant vector search pre-
                            filters the full resume pool to a shortlist, then an LLM scores each, limiting extra LLM calls.`,
  PERSONAL_PROJECT_LINK_LABEL_0: 'Github Repo',
  PERSONAL_PROJECT_LINK_0: 'https://github.com/raph0222/cv-jd-comparator',
  PERSONAL_PROJECT_GITHUB_LABEL: 'Github',
  PERSONAL_PROJECT_LIVE_DEMO_LABEL: 'Live demo',
  PERSONAL_PROJECT_DEMO_LINK_0: 'https://cv-jd-comparator.pages.dev/',
  TEXT_YEAR: 'year',
  TEXT_MONTH: 'month',
  EDUCATION_TITLE: 'Education',
  EDUCATION_SCHOOL: 'University Marie & Louis Pasteur (UMLP)',
  EDUCATION_DEGREE: "Bachelor's Degree - Computer Science",
  EDUCATION_LOCATION: 'Belfort, France',
  EDUCATION_GRAD_LABEL: 'Graduation:',
  EDUCATION_GRAD_YEAR: '2021',
  TIMELINE_CURRENT: 'Current'
}

export default en
