/* eslint-disable object-curly-spacing */

import {
  CalendarIcon,
  ChatIcon,
  CodeIcon,
  DownloadIcon,
  MailIcon,
  // MapIcon,
  PhoneIcon,
  ServerIcon,
  UserIcon
  // UsersIcon
} from '@heroicons/react/outline';

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
  title: 'Hiteshkumar | GenAI .NET Developer Resume',
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
  Skills: 'skills',
  Experience: 'experience',
  Projects: 'projects',
  Education: 'education',
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
      href: 'https://drive.google.com/file/d/15ugo5crjfWYz-DDoCGtS7o3eCAhPxLd9/view',
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
    name: 'GenAI & AI Engineering',
    skills: [
      { name: 'OpenAI API', level: 9 },
      { name: 'Azure OpenAI', level: 8 },
      { name: 'Retrieval-Augmented Generation (RAG)', level: 7 },
      { name: 'Vector Databases', level: 7 },
      { name: 'Semantic Kernel', level: 7 },
      { name: 'Prompt Engineering', level: 9 },
      { name: 'Hugging Face', level: 7 },
      { name: 'Amazon Bedrock', level: 6 },
      { name: 'Ollama', level: 6 },
      { name: 'AutoGen', level: 6 }
    ]
  },
  {
    name: 'Backend Development',
    skills: [
      { name: '.NET Core', level: 10 },
      { name: 'ASP.NET', level: 9 },
      { name: 'C#', level: 10 },
      { name: 'VB.NET', level: 7 },
      { name: 'Web API', level: 9 },
      { name: 'REST APIs', level: 9 },
      { name: 'GraphQL', level: 6 },
      { name: 'Entity Framework', level: 9 },
      { name: 'LINQ', level: 9 },
      { name: 'Microservices Architecture', level: 8 },
      { name: 'Domain-Driven Design (DDD)', level: 7 },
      { name: 'OAuth 2.0', level: 7 },
      { name: 'Kafka', level: 7 },
      { name: 'Confluent Cloud', level: 6 }
    ]
  },
  {
    name: 'Frontend Development',
    skills: [
      { name: 'Angular', level: 8 },
      { name: 'Vue.js', level: 7 },
      { name: 'JavaScript', level: 9 },
      { name: 'JQuery', level: 7 },
      { name: 'HTML5', level: 9 },
      { name: 'CSS3', level: 8 },
      { name: 'Bootstrap', level: 8 }
    ]
  },
  {
    name: 'Databases',
    skills: [
      { name: 'Microsoft SQL Server', level: 9 },
      { name: 'MongoDB', level: 7 },
      { name: 'PostgreSQL', level: 7 },
      { name: 'Azure Cosmos DB', level: 7 },
      { name: 'Google Firestore', level: 6 }
    ]
  },
  {
    name: 'Cloud Technologies',
    skills: [
      { name: 'Microsoft Azure (App Services, Azure Functions, Active Directory, Storage Accounts, Service Bus, Key Vault, Redis Cache, Data Factory, ARM Templates, Cognitive Services)', level: 9 },
      { name: 'Amazon Web Services (AWS)', level: 7 },
      { name: 'Google Cloud Platform (GCP)', level: 6 }
    ]
  },
  {
    name: 'DevOps, CI/CD, and Source Control',
    skills: [
      { name: 'Git', level: 9 },
      { name: 'GitHub', level: 8 },
      { name: 'GitHub Actions', level: 8 },
      { name: 'Azure DevOps Pipelines', level: 7 },
      { name: 'Bitbucket', level: 6 },
      { name: 'TFS', level: 6 },
      { name: 'CI/CD Pipelines', level: 8 },
      { name: 'Docker', level: 8 },
      { name: 'Kubernetes', level: 7 }
    ]
  },
  {
    name: 'Testing and Frameworks',
    skills: [
      { name: 'xUnit', level: 7 },
      { name: 'Unit Testing', level: 8 },
      { name: 'Integration Testing', level: 7 },
      { name: 'NopCommerce', level: 7 }
    ]
  },
  {
    name: 'Project Management and Agile Tools',
    skills: [
      { name: 'Agile/Scrum Methodologies', level: 8 },
      { name: 'Azure DevOps', level: 7 },
      { name: 'Jira', level: 7 }
    ]
  }
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
    date: 'June 2023 - Present',
    location: 'Pearl Technologies - Remote',
    title: 'Senior .NET Developer',
    content: (
      <p>
        Roles and Responsibilities:<br/>
        • Designed event-driven microservices and managed Kafka topics with Azure integration for Customs services, enhancing data communication, scalability, and system reliability.<br/>
        • Developed LLM-powered .NET APIs integrated with OpenAI and Azure Cognitive Services for document analysis and automation workflows.<br/>
        • Developed offline document classifiers using locally hosted LLMs on Ollama, combined with OpenAI embeddings for accurate document tagging and automated workflow routing.<br/>
        • Led end-to-end migration of a legacy system to .NET Core 9, enhancing scalability, performance, and maintainability.<br/>
        • Participated in database schema design and data migration using SQL Server and MongoDB to support new modules and optimize data storage.<br/>
        • Identified and resolved performance bottlenecks using dotTrace and dotMemory profiler, improving application efficiency and reducing function and database calls by 15-30%.
      </p>
    ),
  },
  {
    date: 'June 2022 - June 2023',
    location: 'InnRoad - Remote',
    title: 'Senior Software Engineer',
    content: (
      <p>
        Roles and Responsibilities:<br/>
        • Integrated third-party APIs for payment processing and property service management.<br/>
        • Implemented AWS services such as S3 and Lambda for secure file storage, serverless processing, and asynchronous workflows.<br/>
        • Collaborated with QA to define automated test scenarios, improving regression coverage for critical modules.
      </p>
    ),
  },
  {
    date: 'July 2019 - June 2022',
    location: 'GoodCare IT Management Services Pvt. Ltd. - Vadodara',
    title: 'Senior .NET Developer',
    content: (
      <p>
        Roles and Responsibilities:<br/>
        • Developed and maintained backend systems using .NET Core and SQL Server, integrated MongoDB (NoSQL) for document-based data storage, and implemented Azure services for cloud hosting, data storage, and background processing.<br/>
        • Enhanced legacy modules by rewriting them with modern technologies and adding new features.<br/>
        • Conducted rigorous testing and evaluation of new programs to ensure high performance and usability.<br/>
        • Collaborated with Product Owners, Scrum Masters, and technical leadership to define software solutions.
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
        • Collaborated closely with front-end and mobile app developers to enhance application performance and maintain seamless cross-platform integration, reducing integration issues by 30%.<br/>
        • Provided production support for content migration and live site publication, achieving 100% accuracy and minimizing downtime during releases.<br/>
        • Improved overall application functionality and performance, increasing response times and user satisfaction.<br/>
        • Mentored junior developers to maintain coding standards and best practices, improving team efficiency and code quality.
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
        • Designed, developed, and managed web applications using the .NET framework, MVC architecture, and nopCommerce platform.<br/>
        • Performed nopCommerce customization and plugin development to enhance e-commerce functionality and user experience.<br/>
        • Led a development team, providing technical guidance, task allocation, and code review to ensure high-quality deliverables.<br/>
        • Collaborated with the marketing team to design web promotion templates and implement automated server backups based on campaign requirements.<br/>
        • Ensured code quality, maintainability, and scalability through adherence to best practices, SOLID principles, and Agile methodologies.
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
        • Developed and maintained web applications using ASP.NET Framework, ASPX, and classic ASP pages to support core business operations.<br/>
        • Upgraded, configured, and debugged existing systems, improving performance and reducing production issues by 20%.<br/>
        • Involved in all phases of the Software Development Life Cycle (SDLC), including requirements gathering, design, development, testing, deployment, and maintenance.<br/>
        • Collaborated with senior software engineers to design scalable, maintainable, and high-performing applications.<br/>
        • Provided production support and resolved critical issues, ensuring 99% application uptime and seamless user experience.<br/>
        • Partnered with project managers, business analysts, and stakeholders to translate business needs into effective technical solutions.<br/>
        • Improved system stability and reduced incident response time through proactive monitoring and debugging.
      </p>
    ),
  },
];

/**
 * Projects section
 */
export const projects: TimelineItem[] = [
  {
    date: 'Jun 2023 - Present',
    location: 'Shipment Management System',
    title: 'Customs Dashboard',
    content: (
      <p>
        The Customs Dashboard is a comprehensive solution designed to streamline the management of cross-country shipments, enabling efficient tracking, compliance, and real-time visibility throughout the shipping process.<br/>
        • Refactor and modernize legacy modules using advanced technologies to enhance functionality and scalability.<br/>
        • Integrated Ollama for running local LLMs and enabling offline processing for confidential workflows.<br/>
        • Collaborate with technical leadership to conceptualize and implement software solutions for new product features.<br/>
        • Provided technical mentorship to junior developers through code reviews, best practices, and troubleshooting.<br/>
        • Enhanced database query execution speed through indexing and normalization.
      </p>
    ),
  },
  {
    date: 'Jun 2022 - Jun 2023',
    location: 'SaaS-based Property Management System',
    title: 'InnRoad',
    content: (
      <p>
        A SaaS-based property management solution designed for efficient hotel management.<br/>
        • Contributed to the UnitOwners module, empowering property owners to efficiently track reservations, manage accounting, and oversee room management activities.<br/>
        • Developed a semantic search engine using vector embeddings to allow hotel staff to search bookings, guest records, and policies in natural language.<br/>
        • Added AI-based sentiment analysis for guest feedback and reviews to help identify service improvement areas.<br/>
        • Enhanced system performance by improving API response time by 30% by implementing caching mechanisms, refactoring code for efficiency, and optimizing database queries.<br/>
        • Reduced QA cycle time by 20% by automating 100+ test cases and developing detailed unit and integration tests to validate software functionality.
      </p>
    ),
  },
  {
    date: 'Jul 2020 - Jun 2022',
    location: 'Online Healthcare & Pharmacy Platform',
    title: 'Treated.com',
    content: (
      <p>
        Treated.com is a GPhC-regulated online pharmacy with CQC-licensed clinicians, providing digital health consultations and prescription services across the UK, Europe, USA, and Canada.<br/>
        • Contributed to building and enhancing a secure online consultation and prescription management system, ensuring compliance with GPhC and CQC regulations.<br/>
        • Developed and optimized RESTful APIs for patient profiles, consultations, prescriptions, and order workflows.<br/>
        • Implemented role-based authentication and data encryption to protect patient information and ensure GDPR compliance.<br/>
        • Improved backend performance and scalability, enabling faster consultation processing and order handling.<br/>
        • Collaborated with cross-functional teams to enhance user experience, integrating real-time health recommendations and order tracking.
      </p>
    ),
  },
  {
    date: 'Apr 2016 - Dec 2018',
    location: 'Wholesale E-Commerce Platform (USA)',
    title: 'Africa Imports',
    content: (
      <p>
        Contributed to the modernization of Africa Imports, the USA’s largest African wholesale supplier<br/>
        • Migrated the legacy database into the nopCommerce structure, improving data consistency and performance.<br/>
        • Integrated custom plugins and APIs within nopCommerce to extend core functionalities and streamline business workflows.<br/>
        • Implemented caching and query optimization, improving page load speed and system scalability.<br/>
        • Enhanced frontend–backend integration for smoother product, order, and inventory workflows.<br/>
        • Improved database queries and indexing to support high-volume transactions.
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
      text: 'www.linkedin.com/in/iamhitya/',
      href: 'https://www.linkedin.com/in/iamhitya/',
    },
    {
      type: ContactType.Github,
      text: 'www.github.com/iamhitya/',
      href: 'https://github.com/iamhitya/',
    },
    {
      type: ContactType.Twitter,
      text: 'www.x.com/iamhitya/',
      href: 'https://www.x.com/iamhitya/',
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
  {label: 'X', Icon: TwitterIcon, href: 'https://www.x.com/iamhitya/'},
  {label: 'Hackerrank', Icon: CodeIcon, href: 'https://www.hackerrank.com/iamhitya/'},
  {label: 'Credly', Icon: ServerIcon, href: 'https://www.credly.com/users/iamhitya/'},
  {label: 'WhatsApp', Icon: ChatIcon, href: 'https://wa.me/919898273327'},
  {label: 'Email', Icon: MailIcon, href: 'mailto:hiteshvaghasiya1990@gmail.com'},
];