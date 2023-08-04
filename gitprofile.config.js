// gitprofile.config.js

const config = {
  github: {
    username: 'schachz', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['schachz'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'zachschachter',
    instagram: 'zschachary',
    website: '',
    email: 'zachschachter5@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'SQL',
    'R',
    'Python',
    'SAS',
    'Power BI',
    'Tableau',
    'Excel',
    'ArcGIS',
    'AWS',
    'Azure',
    'Notion',
  ],
  experiences: [
    {
      company: 'TATA Consumer Products',
      position: '',
      from: '2022',
      to: 'Present',
      companyLink: 'https://tataconsumer.com',
    },
    {
      company: 'Aurora Lights Business Solutions',
      position: '',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: '',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'University of Florida',
      degree: 'Masters in Statistics',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'University of Florida',
      degree: 'Bachelors in Economics, Minors in Statistics and Geography',
      from: '2018',
      to: '2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Evaluation of a zoom-based clinician training on the c-lear hpv vaccine recommendation strategy',
      description:
        'Behavioral Research on HPV',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://academyhealth.confex.com/academyhealth/2022di/meetingapp.cgi/Paper/55239',
    },
    {
      title: 'Training clinicians to recommend the HPV vaccine using a C-LEAR communication strategy',
      description:
        'Research on strategies for clinicians to recommend HPV Vaccine',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://doi.org/10.1016/j.pec.2022.10.269',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
  themes: [
      'business',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a
    >Github</a> and ❤️`,
};

export default config;
