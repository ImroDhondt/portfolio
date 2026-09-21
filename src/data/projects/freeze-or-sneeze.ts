import type { Project } from '@/types/content'

export const freezeOrSneeze: Project = {
  slug: 'freeze-or-sneeze',
  title: 'Freeze or Sneeze',
  tagline: {
    en: 'Native Android educational game about diagnosing patients and stopping outbreaks.',
    nl: 'Native Android-educatiegame over patiënten diagnosticeren en uitbraken stoppen.',
  },
  summary: {
    en: 'A Kotlin Android educational game where players diagnose illnesses, treat patients, and prevent disease outbreaks.',
    nl: 'Een Kotlin Android-educatiegame waarin spelers ziektes diagnosticeren, patiënten behandelen en uitbraken voorkomen.',
  },
  description: {
    en: 'Freeze or Sneeze is a native Android educational game where players act as a clinic doctor in Enamel Town. Players observe symptoms, diagnose illnesses, administer treatments, and manage disease spread before an outbreak overwhelms the clinic.',
    nl: 'Freeze or Sneeze is een native Android-educatiegame waarin spelers de rol opnemen van een kliniekdokter in Enamel Town. Spelers observeren symptomen, stellen diagnoses, dienen behandelingen toe en beheersen de verspreiding van ziektes voor een uitbraak de kliniek overspoelt.',
  },
  categories: ['android', 'game', 'architecture'],
  status: 'public-playtest',
  featured: true,
  order: 3,
  ownership: 'solo',
  role: {
    en: 'Solo developer. Game design, architecture, rendering engine, simulation, test suite and the showcase website.',
    nl: 'Solo-ontwikkelaar. Gameontwerp, architectuur, renderingengine, simulatie, testsuite en de showcasewebsite.',
  },
  technologies: [
    'Kotlin',
    'Android',
    'Jetpack Compose',
    'Compose Canvas',
    'Room',
    'DataStore',
    'Dagger Hilt',
    'Coroutines',
    'SQLite',
    'JUnit',
    'GitHub Pages',
  ],
  primaryTech: ['Kotlin', 'Jetpack Compose', 'Room', 'Dagger Hilt', 'Compose Canvas'],
  links: {
    site: 'https://FreezeOrSneeze.imrodhondt.be',
  },
  media: { clearance: 'none' },
  confidential: false,
  sections: [
    {
      id: 'overview',
      body: {
        en: 'A native Android educational game for children of roughly 8 to 12 years old. The player runs a clinic in the fictional Enamel Town: observe symptoms, diagnose the illness, choose a treatment, manage where patients move, and keep contagion from turning into an outbreak.',
        nl: 'Een native Android-educatiegame voor kinderen van ongeveer 8 tot 12 jaar. De speler runt een kliniek in het fictieve Enamel Town: symptomen observeren, de ziekte diagnosticeren, een behandeling kiezen, beheren waar patiënten zich verplaatsen en besmetting geen uitbraak laten worden.',
      },
    },
    {
      id: 'problem',
      body: {
        en: 'The game has to teach symptom-to-illness reasoning while staying a game. That means the simulation must be readable at a glance, run smoothly on a phone with many patients on screen, and stay fair enough that a wrong diagnosis feels like a mistake rather than bad luck.',
        nl: 'De game moet redeneren van symptoom naar ziekte aanleren en tegelijk een game blijven. Dat betekent dat de simulatie in één oogopslag leesbaar moet zijn, vlot moet draaien op een telefoon met veel patiënten in beeld, en eerlijk genoeg blijft zodat een foute diagnose aanvoelt als een fout en niet als pech.',
      },
    },
    {
      id: 'users',
      body: {
        en: 'Children of approximately 8 to 12 years old, plus playtesters whose feedback fed back into the game.',
        nl: 'Kinderen van ongeveer 8 tot 12 jaar, plus playtesters van wie de feedback terugvloeide in de game.',
      },
    },
    {
      id: 'role',
      body: {
        en: 'Solo project. I designed and built the game, the Compose Canvas rendering, the contagion simulation, the progression systems, the persistence layer, the test suite and the public showcase website.',
        nl: 'Soloproject. Ik ontwierp en bouwde de game, de Compose Canvas-rendering, de besmettingssimulatie, de progressiesystemen, de persistentielaag, de testsuite en de publieke showcasewebsite.',
      },
    },
    {
      id: 'built',
      bullets: {
        en: [
          '12 illnesses and 12 medical treatments',
          '8 city zones',
          'Real-time contagion simulation',
          'Symptom cards, disease and treatment mapping, exposure meters and treatment effects',
          'XP, coins, progression and disease mastery',
          'A Doctors Guide encyclopedia',
          'Clinic upgrades and Dr. Sprout mascot progression',
          'Collectible postcards',
          'Multiple visual themes, dark and light mode, reduced-motion mode',
          'Granular audio controls',
          'Local persistence',
          'A responsive public showcase website',
        ],
        nl: [
          '12 ziektes en 12 medische behandelingen',
          '8 stadszones',
          'Realtime besmettingssimulatie',
          'Symptoomkaarten, koppeling van ziekte en behandeling, blootstellingsmeters en behandelingseffecten',
          'XP, munten, progressie en ziektebeheersing',
          'Een Doctors Guide-encyclopedie',
          'Kliniekupgrades en progressie van mascotte Dr. Sprout',
          'Verzamelbare postkaarten',
          'Meerdere visuele thema’s, donkere en lichte modus, reduced-motion-modus',
          'Fijnmazige audio-instellingen',
          'Lokale persistentie',
          'Een responsieve publieke showcasewebsite',
        ],
      },
    },
    {
      id: 'architecture',
      body: {
        en: 'Clean Architecture with MVVM, in three layers.',
        nl: 'Clean Architecture met MVVM, in drie lagen.',
      },
      bullets: {
        en: [
          'Presentation: a single Android activity, Jetpack Compose, Compose Navigation, ViewModels and StateFlow, with custom Canvas rendering for the HUD, game arena, patient renderer, cure tray, diagnosis chart and round summary.',
          'Domain: pure Kotlin with no Android SDK imports. Game loop use case, progression engine, patient treatment logic, disease catalog, city-zone catalogue, cure catalogue, entities and repository interfaces.',
          'Data: Room on SQLite, DataStore preferences, repository implementations, profile persistence, defensive JSON converters, and audio and theme settings.',
        ],
        nl: [
          'Presentatie: één Android-activity, Jetpack Compose, Compose Navigation, ViewModels en StateFlow, met eigen Canvas-rendering voor de HUD, het speelveld, de patiëntenrenderer, de behandelingslade, de diagnosekaart en het rondeoverzicht.',
          'Domein: pure Kotlin zonder Android SDK-imports. Game loop-use case, progressie-engine, behandelingslogica, ziektecatalogus, stadszonecatalogus, behandelingscatalogus, entiteiten en repository-interfaces.',
          'Data: Room op SQLite, DataStore-voorkeuren, repository-implementaties, profielpersistentie, defensieve JSON-converters en audio- en thema-instellingen.',
        ],
      },
    },
    {
      id: 'technologies',
      code: [
        'Kotlin            Jetpack Compose',
        'Compose Navigation ViewModel + StateFlow',
        'Compose Canvas    Clean Architecture + MVVM',
        'Room (SQLite)     Jetpack DataStore',
        'Dagger Hilt       Coroutines',
        'JUnit (JVM)       GitHub Pages',
      ].join('\n'),
    },
    {
      id: 'decisions',
      bullets: {
        en: [
          'Keep the domain layer free of Android SDK imports so the simulation can be tested on the JVM without an emulator.',
          'Use a neighbour grid for contagion checks. Spatial partitioning turns quadratic all-pairs checking into local-neighbour queries, which keeps performance workable as the patient count grows.',
          'Draw characters procedurally with Compose Canvas and vector primitives rather than relying only on static sprites: body geometry, limbs, facial expressions, hair, clothing, symptom indicators and disease-specific visual cues.',
          'Treat accessibility options as game features: reduced motion, theme choice and granular audio controls, backed by tests.',
          'Raise character movement speed after playtest feedback said the game felt sluggish, and lock the new behaviour in with movement-speed tests.',
        ],
        nl: [
          'De domeinlaag vrijhouden van Android SDK-imports zodat de simulatie op de JVM getest kan worden zonder emulator.',
          'Een buurraster gebruiken voor besmettingscontroles. Ruimtelijke partitionering zet kwadratische alle-paren-controle om in buurtquery’s, wat de prestaties werkbaar houdt naarmate het aantal patiënten groeit.',
          'Personages procedureel tekenen met Compose Canvas en vectorprimitieven in plaats van enkel op statische sprites te steunen: lichaamsgeometrie, ledematen, gezichtsuitdrukkingen, haar, kleding, symptoomindicatoren en ziektespecifieke visuele aanwijzingen.',
          'Toegankelijkheidsopties behandelen als gamefuncties: reduced motion, themakeuze en fijnmazige audio-instellingen, gedekt door tests.',
          'De bewegingssnelheid van personages verhogen nadat playtestfeedback aangaf dat de game traag aanvoelde, en het nieuwe gedrag vastzetten met bewegingssnelheidstests.',
        ],
      },
    },
    {
      id: 'testing',
      body: {
        en: '457 unit tests across 27 JVM test classes, with a 100% pass rate in the analysed project.',
        nl: '457 unittests verspreid over 27 JVM-testklassen, met 100% geslaagde tests in het geanalyseerde project.',
      },
      bullets: {
        en: [
          'Game loop, tick timing and progression arithmetic',
          'XP and coin calculations, level thresholds',
          'Movement, patient physics and speed limits',
          'Vector geometry and rendering math',
          'State persistence',
          'Accessibility contrast and theme switching',
          'Disease differentiation and feature stability',
          'Regression and build/playtest tests',
        ],
        nl: [
          'Game loop, tick-timing en progressierekenwerk',
          'XP- en muntberekeningen, levelgrenzen',
          'Beweging, patiëntfysica en snelheidslimieten',
          'Vectorgeometrie en renderingwiskunde',
          'Toestandspersistentie',
          'Toegankelijkheidscontrast en themawissels',
          'Ziekteonderscheid en featurestabiliteit',
          'Regressie- en build-/playtesttests',
        ],
      },
    },
    {
      id: 'deployment',
      body: {
        en: 'A playtest APK is included in the repository and a separate static showcase website is deployed through GitHub Pages on a custom domain. This is a playtest build, not a Google Play production release.',
        nl: 'Een playtest-APK zit in de repository en een aparte statische showcasewebsite staat op GitHub Pages met een eigen domein. Dit is een playtestbuild, geen productierelease in Google Play.',
      },
    },
    {
      id: 'status',
      body: {
        en: 'Later development with a public playtest. Playtest-ready, not a final store release.',
        nl: 'Latere ontwikkeling met een publieke playtest. Klaar voor playtest, geen finale storerelease.',
      },
    },
    {
      id: 'learned',
      bullets: {
        en: [
          'Player feedback turns into concrete technical work: "it feels slow" became a movement-speed change and a test that keeps it that way.',
          'Keeping the simulation in pure Kotlin made a large test suite cheap to run and cheap to trust.',
          'Performance work is a design question first: the neighbour grid mattered more than micro-optimisation.',
          'Accessibility options are easier to keep working when they are covered by tests.',
        ],
        nl: [
          'Spelersfeedback wordt concreet technisch werk: "het voelt traag" werd een aanpassing van de bewegingssnelheid en een test die dat zo houdt.',
          'De simulatie in pure Kotlin houden maakte een grote testsuite goedkoop om te draaien en goedkoop om te vertrouwen.',
          'Prestatiewerk is eerst een ontwerpvraag: het buurraster woog zwaarder door dan micro-optimalisatie.',
          'Toegankelijkheidsopties blijven makkelijker werken wanneer tests ze afdekken.',
        ],
      },
    },
    {
      id: 'future',
      bullets: {
        en: [
          'Sign a release build and disable debug signing',
          'Enable R8 minification',
          'Verify accessibility with a physical screen reader',
          'Add Android instrumentation tests',
          'Add languages beyond English',
          'Move runtime audio from procedural synthesis to the curated assets',
        ],
        nl: [
          'Een releasebuild ondertekenen en debug-signing uitschakelen',
          'R8-minificatie inschakelen',
          'Toegankelijkheid verifiëren met een fysieke schermlezer',
          'Android-instrumentatietests toevoegen',
          'Talen toevoegen naast het Engels',
          'Runtime-audio van procedurele synthese naar de samengestelde assets brengen',
        ],
      },
    },
  ],
  evidence: {
    verified: {
      en: [
        'Kotlin, Jetpack Compose, Clean Architecture with MVVM',
        'Room on SQLite, Jetpack DataStore, Dagger Hilt',
        'Custom Compose Canvas vector-rendering engine',
        'Neighbour-grid spatial partitioning for contagion checks',
        '457 unit tests across 27 test suites, 100% pass rate in the analysed project',
        'Playtest APK included in the repository',
        'Static showcase website on GitHub Pages with a custom domain',
      ],
      nl: [
        'Kotlin, Jetpack Compose, Clean Architecture met MVVM',
        'Room op SQLite, Jetpack DataStore, Dagger Hilt',
        'Eigen Compose Canvas vector-renderingengine',
        'Ruimtelijke partitionering met buurraster voor besmettingscontroles',
        '457 unittests verspreid over 27 testsuites, 100% geslaagd in het geanalyseerde project',
        'Playtest-APK aanwezig in de repository',
        'Statische showcasewebsite op GitHub Pages met een eigen domein',
      ],
    },
    builtByMe: {
      en: ['Everything in this project, including the showcase website. It is a solo build.'],
      nl: ['Alles in dit project, inclusief de showcasewebsite. Het is een solobuild.'],
    },
    limitations: {
      en: [
        'The game is English-only.',
        'The APK is debug-signed and R8 minification is disabled.',
        'This is not a Google Play production release.',
        'Accessibility has not been verified with a physical screen reader.',
        'Audio assets are curated, but runtime audio still uses procedural synthesis.',
        'The web prototype is a reference project, not the production Android application.',
        'No Android instrumentation tests are present.',
        'No Docker or Terraform is used in this project.',
      ],
      nl: [
        'De game is enkel in het Engels.',
        'De APK is debug-ondertekend en R8-minificatie staat uit.',
        'Dit is geen productierelease in Google Play.',
        'Toegankelijkheid is niet geverifieerd met een fysieke schermlezer.',
        'Audio-assets zijn samengesteld, maar runtime-audio gebruikt nog procedurele synthese.',
        'Het webprototype is een referentieproject, niet de productie-Android-applicatie.',
        'Er zijn geen Android-instrumentatietests aanwezig.',
        'Er wordt geen Docker of Terraform gebruikt in dit project.',
      ],
    },
    planned: {
      en: [
        'Signed release build with R8 enabled',
        'Screen reader verification and instrumentation tests',
        'Additional languages',
        'Curated runtime audio',
      ],
      nl: [
        'Ondertekende releasebuild met R8 ingeschakeld',
        'Schermlezerverificatie en instrumentatietests',
        'Extra talen',
        'Samengestelde runtime-audio',
      ],
    },
  },
}
