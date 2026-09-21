import type { Profile } from '@/types/content'

export const profile: Profile = {
  name: 'Imro Dhondt',
  email: 'imrodhondt@gmail.com',
  github: 'https://github.com/ImroDhondt',
  linkedin: 'https://www.linkedin.com/in/imro-dhondt-4ab4b73b4/',
  location: {
    en: 'Belgium',
    nl: 'België',
  },
  role: {
    en: 'Third-year Software Engineering student',
    nl: 'Derdejaarsstudent Software Engineering',
  },
  school: 'Howest',
  programme: {
    en: 'Bachelor of Applied Computer Science, Software Engineering',
    nl: 'Bachelor Toegepaste Informatica, Software Engineering',
  },
  studyStart: 2024,
  expectedGraduation: {
    en: 'End of the 2026–2027 academic year',
    nl: 'Einde van het academiejaar 2026–2027',
  },
  positioning: {
    en: 'Software engineering student building web applications, Android apps, and interactive digital experiences.',
    nl: 'Student software engineering die webapplicaties, Android-apps en interactieve digitale ervaringen bouwt.',
  },
  shortIntro: {
    en: "I'm Imro Dhondt, a third-year Software Engineering student at Howest. I build web applications, Android apps, and interactive digital experiences while exploring software architecture, distributed systems, and new technologies.",
    nl: 'Ik ben Imro Dhondt, derdejaarsstudent Software Engineering aan Howest. Ik bouw webapplicaties, Android-apps en interactieve digitale ervaringen, terwijl ik softwarearchitectuur, gedistribueerde systemen en nieuwe technologieën verken.',
  },
  longIntro: {
    en: [
      "I'm Imro Dhondt, a curious, patient, and motivated Software Engineering student at Howest. I enjoy solving problems, designing software, learning new technologies, and turning ideas into applications that people can use.",
      'My main focus is web and Android development, but my projects have also led me into software architecture, Domain-Driven Design, microservices, event-driven communication, testing, Docker, Terraform, and cloud deployment.',
      'I enjoy working on projects of different sizes. Some projects are close to deployment, while others are active experiments or learning projects. Together, they show not only what I have built, but also how I continue to develop as an engineer.',
    ],
    nl: [
      'Ik ben Imro Dhondt, een nieuwsgierige, geduldige en gemotiveerde student Software Engineering aan Howest. Ik los graag problemen op, ontwerp software, leer nieuwe technologieën en zet ideeën om in applicaties die mensen kunnen gebruiken.',
      'Mijn hoofdfocus ligt op web- en Android-ontwikkeling, maar mijn projecten brachten me ook bij softwarearchitectuur, Domain-Driven Design, microservices, event-driven communicatie, testen, Docker, Terraform en cloud deployment.',
      'Ik werk graag aan projecten van verschillende groottes. Sommige projecten staan dicht bij deployment, andere zijn actieve experimenten of leerprojecten. Samen tonen ze niet alleen wat ik gebouwd heb, maar ook hoe ik blijf groeien als engineer.',
    ],
  },
  statusRows: [
    { key: 'role', value: { en: 'software engineering student', nl: 'student software engineering' } },
    { key: 'focus', value: { en: 'web applications + Android', nl: 'webapplicaties + Android' } },
    { key: 'building', value: { en: 'QHSE platform + mobile game', nl: 'QHSE-platform + mobiele game' } },
    {
      key: 'exploring',
      value: {
        en: 'distributed systems + game development',
        nl: 'gedistribueerde systemen + game development',
      },
    },
    { key: 'learning', value: { en: 'React + Lua', nl: 'React + Lua' } },
    { key: 'location', value: { en: 'Belgium', nl: 'België' } },
  ],
  availability: {
    en: 'I am available for an internship from the start of 2027, where I can contribute to a development team, learn from experienced engineers, and continue building practical software.',
    nl: 'Ik ben beschikbaar voor een stage vanaf begin 2027, waar ik kan bijdragen aan een ontwikkelteam, kan leren van ervaren engineers en praktische software kan blijven bouwen.',
  },
  availabilityShort: {
    en: 'Available for an internship from the start of 2027.',
    nl: 'Beschikbaar voor een stage vanaf begin 2027.',
  },
}
