import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons'
import {
  faSquareJs,
  faReact,
  faHtml5,
  faCss3Alt,
  faSass,
  faNodeJs,
  faW3c,
} from '@fortawesome/free-brands-svg-icons'

import { urlTo } from '../utils/helper'

export type Project = {
  title: string
  details: { title: string; text: string }[]
  imgSrc: string
  logos: { icon: IconDefinition; title: string }[]
  source: string
  website?: string
}

export const PROJECTS = [
  {
    title: 'Création d’une page web dynamique',
    details: [
      {
        title: 'Contexte',
        text: 'J’ai pu concevoir un site web dynamique pour une architecte d’intérieur, en créant des liens directs avec son API de backend existante.',
      },
      {
        title: 'Objectifs',
        text: 'Le but était de rendre l’accueil dynamique, tout en sécurisant la partie administrateur. Une fois l’interface implémentée, j’ai intégré le système de connexion administrateur, permettant de modifier la galerie du site.',
      },
      {
        title: 'Stack technique',
        text: 'Pour y parvenir, j’ai implémenté les différentes fonctionnalités en JavaScript, à partir des maquettes Figma fournies. Je me suis aussi servi de GitHub pour le suivit des modifications.',
      },
      {
        title: 'Compétences développées',
        text: 'Ce projet m’a permis d’acquérir une maîtrise solide de la manipulation du DOM, ainsi que des appels asynchrones vers une API. J’ai également appris à gérer le cycle vie des données utilisateur.',
      },
      {
        title: 'Perspectives d’amélioration',
        text: 'Certains points peuvent être améliorés pour rendre le site plus performant, dynamique et sécurisé, notamment en utilisant React, un format optimisé pour les images ou encore un module d’authentification comme better-auth.',
      },
    ],
    imgSrc: urlTo('/projects/P6.webp'),
    logos: [
      { icon: faHtml5, title: 'HTML5' },
      { icon: faCss3Alt, title: 'CSS3' },
      { icon: faSquareJs, title: 'JavaScript' },
    ],
    source: 'https://github.com/Just1Fr/OC-Integrateur_Web-P6',
  },
  {
    title: 'Création d’une application web de location immobilière',
    details: [
      {
        title: 'Contexte',
        text: 'J’ai conçu le front-end d’une application immobilière multi-pages proposant une expérience utilisateur moderne et réactive.',
      },
      {
        title: 'Objectifs',
        text: 'L’objectif visé était de structurer l’accès des différentes pages via React Router, et d’extraire les données d’un fichier JSON pour les insérer dans les composants réutilisables, le tout en respectant les maquettes Figma.',
      },
      {
        title: 'Stack technique',
        text: 'Pour cela, j’ai initialisé le projet à l’aide de Vite, et intégré les fonctionnalité et visuels avec React, React Router et SASS.',
      },
      {
        title: 'Compétences développées',
        text: 'J’ai acquis une maîtrise solide sur la création de composants modulaires réutilisables, et l’intégration du routage client via React. J’ai aussi appris à utiliser SASS, pour créer un visuel moderne.',
      },
      {
        title: 'Perspectives d’amélioration',
        text: 'L’étape suivante pour améliorer ce projet serait l’optimisation du SEO, via l’optimisation des performances, de l’accessibilité et du référencement.',
      },
    ],
    imgSrc: urlTo('/projects/P7.webp'),
    logos: [
      { icon: faReact, title: 'React' },
      { icon: faSass, title: 'SASS' },
      { icon: faNodeJs, title: 'Node.js' },
    ],
    source: 'https://github.com/Just1Fr/OC-Integrateur_Web-P7',
    website: 'https://just1fr.github.io/OC-Integrateur_Web-P7',
  },
  {
    title: 'Optimisation du référencement d’un site de photographe',
    details: [
      {
        title: 'Contexte',
        text: 'J’ai été mandaté pour optimiser le SEO d’un site de photographe indépendant.',
      },
      {
        title: 'Objectifs',
        text: 'J’ai d’abord effectué un rapport d’analyse avant optimisation, afin d’avoir un point de comparaison une fois le travail effectué. J’ai pu effectuer des optimisations au niveau des performances, en utilisant un format optimisé pour les images, réduisant ainsi considérablement le temps de chargement. J’ai aussi amélioré l’accessibilité, en utilisant du code HTML sémantique, ainsi qu’en ajustant le contraste de certains élément. Enfin, j’ai utilisé différentes méthodes, tel que Schema.org ou OpenGraph afin d’améliorer le référencement du site.',
      },
      {
        title: 'Stack technique',
        text: 'Les modifications reposaient essentiellement sur du HTML et CSS purs. Pour l’optimisation des images, j’ai utilisé ImageMagick, afin d’effectuer un redimensionnement et une conversion en WebP tout en gardant une qualité acceptable. Pour l’analyse du SEO, j’ai utilisé LightHouse, Wave, et l’outils Rich Results de Google.',
      },
      {
        title: 'Compétences développées',
        text: 'J’ai appris à analyser et optimisé un site afin d’optimiser un maximum sont référencement et son taux de rétention. J’ai aussi pu aborder l’aspects communication avec le client, en créant un rapport clair et détaillé des amélioration apportées.',
      },
      {
        title: 'Perspectives d’amélioration',
        text: 'Les performances pourraient bénéficier d’une légère amélioration en utilisant un CDN, en fonction de l’emplacement de l’hébergeur et du client. L’utilisation de React rendrait la galerie photos beaucoup plus réactive, en réduisant les rechargements superflus.',
      },
    ],
    imgSrc: urlTo('/projects/P8.webp'),
    logos: [
      { icon: faHtml5, title: 'HML5' },
      { icon: faCss3Alt, title: 'CSS3' },
      { icon: faW3c, title: 'W3C' },
      { icon: faUniversalAccess, title: 'Accessibilité' },
    ],
    source: 'https://github.com/Just1Fr/OC-Integrateur_Web-P8',
    website: 'https://just1fr.github.io/OC-Integrateur_Web-P8',
  },
  {
    title: 'Implémentation du front-end d’une application bancaire',
    details: [
      {
        title: 'Contexte',
        text: 'J’ai intégrer le front-end d’une application bancaire, afin de proposer une expérience dynamique et réactive.',
      },
      {
        title: 'Objectifs',
        text: 'J’ai d’abord intégré l’interface communiquant avec le back-end Node.js via des appels API REST. J’ai pu mettre en place la connexion des utilisateurs et la modification de leur compte, tout en assurant la sécurisation des accès. J’ai ensuite proposé de nouvelles routes pour l’API, en vue d’intégrer le reste des fonctionnalités.',
      },
      {
        title: 'Stack technique',
        text: 'L’application utilise React, React Router pour les routes, ainsi que Redux pour la gestion de l’état global. La communication avec le back-end Node.js se fait via des requêtes vers l’API Swagger.',
      },
      {
        title: 'Compétences développées',
        text: 'Ce projet m’a permis d’apprendre à gérer la gestion d’un état global grâce à un outils comme Redux, à sécuriser les états de connexion utilisateur, ainsi que de configurer les route d’une API en utilisant Swagger.',
      },
      {
        title: 'Perspectives d’amélioration',
        text: 'Je me suis concentré sur l’aspect fonctionnel du site, le SEO pourrait donc être amélioré. Aussi, en conditions réelles, la base de donnée, qui utilise MongoDB, devrait plutôt être une base type SQL, comme PostgreSQL, afin d’assurer une quantité de requêtes importante. Évidemment, la sécurité devra aussi être renforcée. ',
      },
    ],
    imgSrc: urlTo('/projects/P10.webp'),
    logos: [
      { icon: faReact, title: 'React' },
      { icon: faNodeJs, title: 'Node.js' },
    ],
    source: 'https://github.com/Just1Fr/OC-Integrateur_Web-P10-Frontend',
  },
]
