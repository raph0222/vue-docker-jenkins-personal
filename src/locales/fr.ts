import en from './en'
import type { LocaleMessages } from '@/types/localeMessages'

// can have only same field than English, if there are missing fields => english value
const fr: Partial<LocaleMessages> = {
    USER_NAME: 'Raphael Rocha',
    USER_POSITION: 'Développeur Fullstack',
    USER_LOCATION: 'Séoul, Corée du Sud',
    BIO_TEXT: `
              <p>Bonjour, je m'appelle Raphael, je suis un développeur fullstack junior né en France, vivant maintenant en Corée du Sud.</p>
              <p>J'ai plus d'un an d'expérience en tant que développeur. Je travaille actuellement sur des projets personnels, comme celui-ci, et 
              je prévois de travailler sur un projet orienté backend pour mon prochain projet.</p>
              <p>J'ai vécu un an en Corée de mai 2022 à mai 2023, puis je suis rentré en France, où j'ai travaillé plus d'un an jusqu'en juillet 2024
               en tant que développeur fullstack chez AtolCD (Dijon).
              Maintenant, je suis de retour en Corée pour y poursuivre ma carrière. Mon objectif à moyen/long terme est de m'installer à Séoul, 
              c'est pourquoi j'apprends actuellement le coréen à l'Université Chung-Ang (Programme de langue coréenne) avec un visa D-4, tout en recherchant 
              un poste de développeur fullstack.</p>
              <p>Être développeur est un poste vraiment intéressant pour moi. Chaque jour, j'apprends de nouvelles choses, de nouvelles pratiques, 
              et c'est toujours un challenge de
              produire du clean code, d'utiliser de bonnes pratiques, et de rester à jour avec les nouvelles sorties.
              Chaque jour, je partage des connaissances et surtout, je reçois du feedback pour améliorer ce que je fais. C'est l'un des meilleurs aspects,
               selon moi.</p>
              <p>J'ai travaillé chez Manpower Korea pendant 6 mois (12/2022 - 06/2023) en tant que recruteur IT à temps partiel.
              Cette expérience, même si elle est non liée à l'IT, m'a donné un aperçu de la culture du travail en Corée. Cela m'a encore plus motivé
               à travailler dans mon domaine : le développement</p>
            `,
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
}

//english default overwritten by fr
const french = {...en, ...fr}

export default french