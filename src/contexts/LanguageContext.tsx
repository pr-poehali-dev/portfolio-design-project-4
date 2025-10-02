import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface Translations {
  nav: {
    home: string;
    about: string;
    portfolio: string;
    skills: string;
    experience: string;
    contacts: string;
  };
  home: {
    badge: string;
    name: string;
    title: string;
    viewWorks: string;
    contact: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    projects: string;
    projectsDesc: string;
    clients: string;
    clientsDesc: string;
    awards: string;
    awardsDesc: string;
  };
  portfolio: {
    title: string;
    project1Title: string;
    project1Desc: string;
    project2Title: string;
    project2Desc: string;
    project3Title: string;
    project3Desc: string;
  };
  skills: {
    title: string;
  };
  experience: {
    title: string;
    current: string;
    job1Position: string;
    job1Company: string;
    job1Desc: string;
    job2Position: string;
    job2Company: string;
    job2Desc: string;
    job3Position: string;
    job3Company: string;
    job3Desc: string;
  };
  contacts: {
    title: string;
    subtitle: string;
    email: string;
  };
  footer: {
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      portfolio: 'Портфолио',
      skills: 'Навыки',
      experience: 'Опыт',
      contacts: 'Контакты',
    },
    home: {
      badge: 'Creative Portfolio',
      name: 'Дутчак Михаил Романович',
      title: 'Creative Director & UI/UX Designer',
      viewWorks: 'Смотреть работы',
      contact: 'Связаться',
    },
    about: {
      title: 'Обо мне',
      description1: 'Креативный директор с 7+ летним опытом в создании цифровых продуктов. Специализируюсь на разработке уникальных пользовательских интерфейсов и построении сильных брендов.',
      description2: 'Моя миссия — создавать дизайн, который не только красив, но и решает реальные бизнес-задачи, улучшая опыт пользователей.',
      projects: '50+ проектов',
      projectsDesc: 'Успешно реализовано',
      clients: '30+ клиентов',
      clientsDesc: 'По всему миру',
      awards: '15+ наград',
      awardsDesc: 'В дизайн-индустрии',
    },
    portfolio: {
      title: 'Портфолио',
      project1Title: 'Digital Brand Experience',
      project1Desc: 'Комплексный редизайн цифрового бренда для технологической компании',
      project2Title: 'E-commerce Platform',
      project2Desc: 'Создание современной платформы электронной коммерции с фокусом на UX',
      project3Title: 'Mobile App Design',
      project3Desc: 'Разработка интуитивного мобильного приложения для финтех стартапа',
    },
    skills: {
      title: 'Навыки',
    },
    experience: {
      title: 'Опыт работы',
      current: 'Настоящее время',
      job1Position: 'Senior Creative Director',
      job1Company: 'Digital Studio',
      job1Desc: 'Руководство креативной командой, разработка стратегий брендинга',
      job2Position: 'Lead UI/UX Designer',
      job2Company: 'Tech Solutions',
      job2Desc: 'Проектирование пользовательских интерфейсов для корпоративных продуктов',
      job3Position: 'Product Designer',
      job3Company: 'Startup Inc.',
      job3Desc: 'Разработка дизайн-систем и прототипирование новых функций',
    },
    contacts: {
      title: 'Давайте создадим что-то вместе',
      subtitle: 'Открыт для новых проектов и интересного сотрудничества',
      email: 'Email',
    },
    footer: {
      rights: '© 2024 Дутчак Михаил Романович. Все права защищены.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      skills: 'Skills',
      experience: 'Experience',
      contacts: 'Contacts',
    },
    home: {
      badge: 'Creative Portfolio',
      name: 'Mikhail Dutchak',
      title: 'Creative Director & UI/UX Designer',
      viewWorks: 'View Works',
      contact: 'Contact Me',
    },
    about: {
      title: 'About Me',
      description1: 'Creative director with 7+ years of experience in creating digital products. I specialize in developing unique user interfaces and building strong brands.',
      description2: 'My mission is to create design that is not only beautiful, but also solves real business problems, improving user experience.',
      projects: '50+ projects',
      projectsDesc: 'Successfully completed',
      clients: '30+ clients',
      clientsDesc: 'Worldwide',
      awards: '15+ awards',
      awardsDesc: 'In design industry',
    },
    portfolio: {
      title: 'Portfolio',
      project1Title: 'Digital Brand Experience',
      project1Desc: 'Comprehensive digital brand redesign for a technology company',
      project2Title: 'E-commerce Platform',
      project2Desc: 'Creating a modern e-commerce platform with a focus on UX',
      project3Title: 'Mobile App Design',
      project3Desc: 'Developing an intuitive mobile app for a fintech startup',
    },
    skills: {
      title: 'Skills',
    },
    experience: {
      title: 'Work Experience',
      current: 'Present',
      job1Position: 'Senior Creative Director',
      job1Company: 'Digital Studio',
      job1Desc: 'Leading creative team, developing branding strategies',
      job2Position: 'Lead UI/UX Designer',
      job2Company: 'Tech Solutions',
      job2Desc: 'Designing user interfaces for corporate products',
      job3Position: 'Product Designer',
      job3Company: 'Startup Inc.',
      job3Desc: 'Developing design systems and prototyping new features',
    },
    contacts: {
      title: "Let's Create Something Together",
      subtitle: 'Open for new projects and interesting collaborations',
      email: 'Email',
    },
    footer: {
      rights: '© 2024 Mikhail Dutchak. All rights reserved.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'ru';
  });

  const toggleLanguage = () => {
    const newLang = language === 'ru' ? 'en' : 'ru';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
