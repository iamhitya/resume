import {
  CalendarIcon,
  ChatIcon,
  CodeIcon,
  DownloadIcon,
  MailIcon,
  MapIcon,
  PhoneIcon,
  ServerIcon,
  UserIcon,
  UsersIcon} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage3 from '../images/portfolio/azure-ai-fundamentals.png';
import porfolioImage2 from '../images/portfolio/azure-data-fundamentals.png';
import porfolioImage1 from '../images/portfolio/azure-fundamentals.png';
import porfolioImage5 from '../images/portfolio/csharp.png';
import porfolioImage8 from '../images/portfolio/ml.png';
import porfolioImage4 from '../images/portfolio/nopcommerce.png';
import porfolioImage7 from '../images/portfolio/python.png';
import porfolioImage6 from '../images/portfolio/sql.png';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/testimonial.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Hiteshkumar - Resume',
  description: "Welcome to my personal resume website! Here you can learn more about my skills, experience, and qualifications. Take a look and feel free to reach out if you have any questions or opportunities to collaborate. I look forward to connecting with you.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Certifications: 'certifications',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Hiteshkumar.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Crazy about developing stuff from <strong className="text-stone-100">0 to 1</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm <strong className="text-stone-100">detail-oriented</strong> and <strong className="text-stone-100">self-driven</strong> full-stack software engineer with a <strong className="text-stone-100">quality-driven</strong> mindset, committed to <strong className="text-stone-100">writing clean, maintainable code</strong> and <strong className="text-stone-100">conducting rigorous testing</strong> to ensure exceptional software performance. 🚀
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Throughout my student and professional life, I have been fascinated by Computers and Technology. I love to work where I have ample opportunity to explore new technologies and develop products end to end.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm always curious about learning new skills, tools, and concepts.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1TLpx5s0WSY9TInhn-tGquSKvJVf2YSlm/view',
      text: 'Download Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I have over 11 years of development and implementation experience on projects ranging from small departmental 
  applications to complex enterprise solutions in multi-national corporate environments.
  `,
  aboutItems: [
    {label: 'Full Name', text: 'Hiteshkumar Vaghasiya', Icon: UserIcon},
    // {label: 'Location', text: 'Vadodara, Gujarat, India', Icon: MapIcon},
    {label: 'Date of Birth', text: '05/April/1990', Icon: CalendarIcon},
    // {label: 'Marital Status', text: 'Married', Icon: UsersIcon},
    {label: 'Email', text: 'hiteshvaghasiya1990@gmail.com', Icon: MailIcon},
    {label: 'Contact No', text: '+91 - 9898273327', Icon: PhoneIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend',
    skills: [
      {
        name: 'Angular',
        level: 9,
      },
      {
        name: 'Vue.js',
        level: 6,
      },
      {
        name: 'JavaScript, JQuery',
        level: 10,
      },
      {
        name: 'HTML 5 & CSS 3',
        level: 10,
      },
    ],
  },
  {
    name: 'Backend',
    skills: [
      {
        name: '.NET Core',
        level: 10,
      },
      {
        name: 'Microservices',
        level: 9,
      },
      {
        name: 'Web API',
        level: 10,
      },
      {
        name: 'nopCommerce',
        level: 9,
      },
    ],
  },
  {
    name: 'Database',
    skills: [
      {
        name: 'Microsoft SQL Server',
        level: 10,
      },
      {
        name: 'MongoDB',
        level: 8,
      },
      {
        name: 'PostgreSQL',
        level: 9,
      },
    ],
  },
  {
    name: 'Cloud Services',
    skills: [
      {
        name: 'Microsoft Azure',
        level: 8,
      },
      {
        name: 'Azure Functions',
        level: 10,
      },
      {
        name: 'Amazon Cloud services (AWS)',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'AZ-900',
    description: '',
    url: 'https://www.credly.com/badges/72229618-e37e-4cbe-bbb1-e315137a34d0/',
    image: porfolioImage1,
  },
  {
    title: 'DP-900',
    description: '',
    url: 'https://www.credly.com/badges/064c2d8e-ff7e-4df4-8c8a-0c6db69ce84c/',
    image: porfolioImage2,
  },
  {
    title: 'AI-900',
    description: '',
    url: 'https://www.credly.com/badges/8d1083c5-ca18-48ad-8814-cf71f745ded6/',
    image: porfolioImage3,
  },
  {
    title: 'nop',
    description: '',
    url: 'https://www.nopcommerce.com/en/hiteshkumar-vaghasiya/',
    image: porfolioImage4,
  },
  {
    title: 'C#',
    description: '',
    url: 'https://www.hackerrank.com/certificates/1c5731d2cda7/',
    image: porfolioImage5,
  },
  {
    title: 'SQL',
    description: '',
    url: 'https://www.hackerrank.com/certificates/aeab799a8768/',
    image: porfolioImage6,
  },
  {
    title: 'Python',
    description: '',
    url: 'https://simpli-web.app.link/e/02FgKM0Qtyb',
    image: porfolioImage7,
  },
  {
    title: 'ML',
    description: '',
    url: 'https://simpli-web.app.link/e/MeCq7goBtyb',
    image: porfolioImage8,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'March 2010 - April 2013',
    location: 'GDCST - Sardar Patel University, Vallabh Vidyanagar',
    title: 'Master of Computer Applications (MCA)',
    content: <p></p>,
  },
  {
    date: 'April 2007 - March 2010',
    location: 'SSSDIIT - Saurashtra University, Junagadh',
    title: 'Bachelor of Computer Applications (BCA)',
    content: <p></p>,
  }
  // {
  //   date: 'April 2005 - March 2007',
  //   location: 'Gujarat Secondary and Higher Secondary Education Board',
  //   title: 'HSC',
  //   content: <p></p>,
  // },
  // {
  //   date: 'April 2004 - March 2005',
  //   location: 'Gujarat Secondary and Higher Secondary Education Board',
  //   title: 'SSC',
  //   content: <p></p>,
  // },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2022 - Present',
    location: 'InnRoad - Hyderabad',
    title: 'Senior Software Engineer',
    content: (
      <p>
        Roles and Responsibilities:<br/>
        • Maintaining and upgrading existing systems<br/>
        • Writing and implementing efficient code<br/>
        • Testing and evaluating new programs<br/>
        • Collaborating with front-end, and mobile app developers<br/>
        • Design solutions using common design patterns with a range of design tools and techniques<br/>
        • Writing Unit/Integration test cases for a large system with lots of external and internal dependencies
      </p>
    ),
  },
  {
    date: 'July 2019 - June 2022',
    location: 'GoodCare IT Management Services Pvt. Ltd. - Vadodara',
    title: 'Senior .Net Developer',
    content: (
      <p>
        Roles and Responsibilities:<br/>
        • Researching, designing, implementing, and managing software programs<br/>
        • Testing and evaluating new programs<br/>
        • Design solutions using common design patterns with a range of design tools and techniques<br/>
        • Identifying areas for modification in existing programs and subsequently developing these modifications<br/>
        • Writing and implementing efficient code<br/>
        • Maintaining and upgrading existing systems<br/>
        • Ensuring that junior staff delivers according to standards<br/>
        • Help review team commits via pull requests<br/>
        • Interact with project managers, business analysts, and stakeholders Prerequisites
      </p>
    ),
  },
  {
    date: 'February 2018 - July 2019',
    location: 'Softweb Solutions Inc. - Ahmedabad',
    title: 'Senior Technical Analyst',
    content: (
      <p>
        Roles and Responsibilities:<br/>
        • Involved in full Software Development Life Cycle right from requirements gathering, design, development, deployment, testing, and production support<br/>
        • Collaborating with front-end, and mobile app developers<br/>
        • Design web promotion server backup and template based on the marketing team's requirements<br/>
        • Provide production support for content migration releases. Assist with the migration and publication of content on the live site.<br/>
        • Improving functionality<br/>
        • Ensuring that junior staff delivers according to standards
      </p>
    ),
  },
  {
    date: 'January 2015 - February 2018',
    location: 'Empirical Edge Inc. - Ahmedabad',
    title: 'Senior Software Developer',
    content: (
      <p>
        Roles and Responsibilities:<br/>
        • Design, code, test and manage various applications<br/>
        • nopCommerce customization and plugin development<br/>
        • Team Leader<br/>
        • Involved in full Software Development Life Cycle right from requirements gathering, design, development, deployment, testing, and production support<br/>
        • Design web promotion server backup and template based on the marketing team's requirements<br/>
        • Work closely with other senior software engineers
      </p>
    ),
  },
  {
    date: 'July 2013 - December 2014',
    location: 'Italia Group - Ahmedabad',
    title: 'Software Developer',
    content: (
      <p>
        Roles and Responsibilities:<br/>
        • Upgrading, configuring, and debugging existing systems<br/>
        • Involved in full Software Development Life Cycle right from requirements gathering, design, development, deployment, testing, and production support<br/>
        • Work closely with other senior software engineers<br/>
        • Support the production users and investigate issues in production<br/>
        • Interact with project managers, business analysts, and stakeholders Prerequisites
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Zibran Akhtar',
      text: 'I had the pleasure of working with Hitesh and I must say his skills are truly exceptional. What impressed me the most was his ability to work on minimal input, yet still produce high-quality results. I highly recommend him for any future opportunities.',
      image: '',
    },
    {
      name: 'Hayam Seireg',
      text: 'Hiteshkumar is very curious and hardworking nature which has helped him to master different skills. He is very open-minded, flexible, and a fast learner which makes him a great asset to any team, I highly recommend him.',
      image: '',
    },
    {
      name: 'Rajibashree Biswas',
      text: 'Hiteshkumar is very good .Net developer and well experienced in IT software industry. I have worked with him and found to be very sincere and hardworking employee. I wish him a very bright future in this industry with his valuable contribution in every job he is assigned.',
      image: '',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'My inbox is always open. Whether you have a question or just want to say hello, I\'ll try my best to get back to you!',
  items: [
    {
      type: ContactType.Phone,
      text: '+91 - 9898273327',
      href: 'tel:919898273327',
    },
    {
      type: ContactType.Email,
      text: 'hiteshvaghasiya1990@gmail.com',
      href: 'mailto:hiteshvaghasiya1990@gmail.com',
    },
    {
      type: ContactType.LinkedIn,
      text: 'https://www.linkedin.com/in/iamhitya/',
      href: 'https://www.linkedin.com/in/iamhitya/',
    },
    {
      type: ContactType.Github,
      text: 'https://github.com/iamhitya/',
      href: 'https://github.com/iamhitya/',
    },
    {
      type: ContactType.Twitter,
      text: 'https://www.twitter.com/iamhitya/',
      href: 'https://www.twitter.com/iamhitya/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/iamhitya/'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/iamhitya/'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/2729677/hiteshkumar-vaghasiya'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://www.twitter.com/iamhitya/'},
  {label: 'Hackerrank', Icon: CodeIcon, href: 'https://www.hackerrank.com/iamhitya/'},
  {label: 'Credly', Icon: ServerIcon, href: 'https://www.credly.com/users/iamhitya/'},
  {label: 'WhatsApp', Icon: ChatIcon, href: 'https://wa.me/919898273327'},
  {label: 'Email', Icon: MailIcon, href: 'mailto:hiteshvaghasiya1990@gmail.com'},
];