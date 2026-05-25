import en from './en'
import type { LocaleMessages } from '@/types/localeMessages'

// can have only same field than English, if there are missing fields => english value
const fr: Partial<LocaleMessages> = {
  USER_NAME: 'Raphael Rocha',
  USER_POSITION: 'Ingénieur Logiciel',
  USER_LOCATION: 'Séoul, Corée du Sud',
  BIO_TEXT_INTRO: `Ingénieur logiciel français vivant en Corée du Sud, avec deux ans d'expérience. J'ai travaillé pendant un an dans une startup SaaS B2B à Séoul pendant l'année 2025.`,
  BIO_TEXT_EXPERTISE: `Domaines d'expertise :`,
  BIO_TEXT_BULLET_1: 'Backend: Python / Django (DRF), Flask, Fast API, Java / Spring',
  BIO_TEXT_BULLET_2: 'DevOps: Docker, Docker Compose, Git, Github, Ansible, Gerrit',
  BIO_TEXT_BULLET_3:
    'Cloud/Infra: AWS (EC2, RDS, ECR, S3, Route 53, certificats, load balancer, registrar), Cloudflare (DNS, Workers, Pages)',
  BIO_TEXT_BULLET_4: 'AI/LLM Application: LangChain, LangSmith, Vertex AI (Gemini), Claude',
  BIO_TEXT_BULLET_5: 'Frontend: Vue.js, Vuex, Tailwind',
  BIO_TEXT_BULLET_6: 'Base de données: PostgreSQL',
  BIO_TEXT_CONCLUSION: `Mon intérêt pour les mathématiques et l'informatique m'a naturellement conduit vers le développement, où j'aime résoudre des problèmes complexes par la logique et des systèmes bien structurés. Je m'appuie sur les principes SOLID et veille à bien comprendre les besoins afin que chaque décision contribue à des solutions propres, efficaces et maintenables. Au-delà du simple fonctionnement, je m'attache à concevoir des systèmes qui réduisent la dette technique, améliorent la fiabilité et évoluent avec les besoins du produit. Ces dernières années, j'ai également intégré des outils de développement assistés par l'IA à mon travail pour gagner en efficacité, tout en conservant un solide jugement technique et en restant attentif à la maintenabilité à long terme et à la qualité du code.`,
  TIMELINE_TITLE_0: `Ingénieur Logiciel chez Phyxup Health`,
  TIMELINE_START_DATE_0: '2025-02',
  TIMELINE_END_DATE_0: '2025-12',
  TIMELINE_TEXT_0: `Développement sur le frontend et le backend avec Vue et Django (DRF). Ajout de nouvelles fonctionnalités, d'API endpoints, travail sur l'authentification, les logs, refactor du legacy code, gestion de la conformité avec HIPAA et FHIR.
                    Travail avec PostgreSQL sur notre base de données hébergée sur RDS. Amélioration des processus CI/CD, des workflows et de la documentation pour l'équipe, en utilisant GitHub Actions pour le backend et Cloudflare Pages pour le frontend.
                    Mise en place d'un nouvel environnement de staging (et de son deploiement) avec AWS comme hébergeur et Cloudflare pour la gestion de la résolution DNS. Utilisation de Docker pour gérer tous les services de l'application.
                    Améliorations de sécurité, logging, etc.`,
  TIMELINE_TITLE_1: `Ingénieur Logiciel chez AtolCD`,
  TIMELINE_TEXT_1: `Travail sur plusieurs projets, au sein d'une équipe d'environ 10 personnes, utilisant plusieurs stacks différentes.
                      Développement de fonctionnalités, correction de bugs, développement de logique métier, nouvelles 
                      API RESTFUL, webservices, fix de sécurité, captcha on-premise...
                      J'ai également travaillé sur des bases de données, en particulier PostgreSQL et l'extension PostGIS. 
                      Utilisation des données via Geoserver et openLayers.
                      Enfin, j'ai travaillé sur les workflows ci/cd, de nouvelles pipelines Jenkins, en utilisant Docker inside Jenkins 
                      et docker-compose pour générer des packages, des bases de données...
                      Mise en place de serveurs de démo, mises à jour Java, nouveau processus de packaging et de déploiement, documentation, 
                      script Ansible pour configurer le serveur de démo.`,
  TIMELINE_TITLE_2: `Développeur Web au Conseil Départemental de la Haute-Saône`,
  TIMELINE_TEXT_2: `Conception et Développement : De manière similaire au précédent stage, j'ai réalisé les mêmes tâches pour un projet différent.`,
  TIMELINE_TITLE_3: `Développeur Web au Conseil Départemental de la Haute-Saône`,
  TIMELINE_TEXT_3: `Conception et Développement : Interface web et back-office utilisant Js/Jquery et un backend PHP. Conception de bases de données PostgreSQL.`,
  PERSONAL_PROJECT_TEXT_0: `J'ai développé une application IA prête pour la production qui analyse la compatibilité CV/offre via un pipeline de scoring basé sur des LLM. Architecture Dockerisée avec un frontend Vue 3 + Vite et un backend Python Flask, LangChain pour l'orchestration LLM sur Google Vertex AI (Gemini). Observabilité avec LangSmith, logs structurés et tracing.`,
  // period text
  TEXT_YEAR: 'an',
  TEXT_MONTH: 'mois',
  DOWNLOAD_TEXT: 'CV',
  EDUCATION_TITLE: 'Formation',
  EDUCATION_SCHOOL: 'Université Marie et Louis Pasteur (UMLP)',
  EDUCATION_DEGREE: 'Licence - Informatique',
  EDUCATION_LOCATION: 'Belfort, France',
  EDUCATION_GRAD_LABEL: 'Diplômé :',
  EDUCATION_GRAD_YEAR: '2021',
  TIMELINE_CURRENT: 'Actuellement'
}

//english default overwritten by fr
const french = { ...en, ...fr }

export default french
