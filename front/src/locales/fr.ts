import en from './en'
import type { LocaleMessages } from '@/types/localeMessages'

// can have only same field than English, if there are missing fields => english value
const fr: Partial<LocaleMessages> = {
  USER_NAME: 'Raphael Rocha',
  USER_POSITION: 'Développeur Fullstack',
  USER_LOCATION: 'Séoul, Corée du Sud',
  BIO_TEXT: `
    <p>Bonjour, je m'appelle Raphael, un développeur fullstack junior né en France et travaillant actuellement en Corée du Sud.</p>
    <p>J'ai 2 ans d'expérience en tant que développeur. Je travaille actuellement comme développeur fullstack chez PhyxUp Health.</p>
    <p>Mes principaux centres d'intérêt sont le développement backend, les pratiques DevOps et le Cloud. 
    J'ai également réalisé beaucoup de développement frontend. J'ai le plus d'expérience avec Vue et Spring, 
    et j'ai aussi travaillé avec Django. Ces derniers temps, je travaille beaucoup avec Vue, Django, 
    les workflows CI/CD, Docker, les services AWS et Cloudflare.</p>
    <p>Être développeur est un rôle vraiment épanouissant pour moi, car c'est un métier où je peux apprendre et progresser chaque jour. 
    Faire fonctionner un software n'est que la base : j'essaie toujours de comprendre en profondeur comment il fonctionne, 
    de suivre les bonnes pratiques et de prendre des décisions réfléchies pour que le code que je produis soit propre, efficace 
    et facile à comprendre.</p>
    <p>Je tiens également à construire des systèmes bien structurés et bien documentés, faciles à maintenir et à faire évoluer pour toute l'équipe. 
    Il vaut mieux prendre le temps d'établir une structure et une logique pour éviter une dette technique qui ralentira tout le monde plus tard.
    Maintenant que l'IA est disponible et performante, contrairement à l'époque où j'ai commencé à coder, nous devons en tirer pleinement parti pour gagner du temps.
    C'est un outil puissant qui peut considérablement améliorer la productivité s'il est utilisé intelligemment.
    Cela dit, investir du temps dès le départ pour éviter un code brouillon et une dette technique reste essentiel.</p>`,
  TIMELINE_TITLE_0: `Developpeur Fullstack chez PhyxupHealth`,
  TIMELINE_START_DATE_0: '2025-02',
  TIMELINE_END_DATE_0: '',
  TIMELINE_TEXT_0: `Développement sur le frontend et le backend avec Vue et Django (DRF). Ajout de nouvelles fonctionnalités, d'API endpoints, travail sur l'authentification, les logs, refactor du legacy code, gestion de la conformité avec HIPAA et FHIR.
                    Travail avec PostgreSQL sur notre base de données hébergée sur RDS. Amélioration des processus CI/CD, des workflows et de la documentation pour l’équipe, en utilisant GitHub Actions pour le backend et Cloudflare Pages pour le frontend.
                    Mise en place d’un nouvel environnement de staging (et de son deploiement) avec AWS comme hébergeur et Cloudflare pour la gestion de la résolution DNS. Utilisation de Docker pour gérer tous les services de l’application.
                    Améliorations de sécurité, logging, etc.`,
  TIMELINE_TITLE_1: `Développeur Fullstack chez AtolCD`,
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
  // period text
  TEXT_YEAR: 'an',
  TEXT_MONTH: 'mois',
  DOWNLOAD_TEXT: 'CV',
  TIMELINE_CURRENT: 'Actuellement'
}

//english default overwritten by fr
const french = { ...en, ...fr }

export default french
