import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface Translations {
  nav: {
    home: string;
    about: string;
    portfolio: string;
    skills: string;
    experience: string;
    education: string;
    contacts: string;
  };
  home: {
    name: string;
    title: string;
    subtitle: string;
    experience: string;
    location: string;
    age: string;
    viewWorks: string;
    contact: string;
  };
  about: {
    title: string;
    description: string;
  };
  portfolio: {
    title: string;
  };
  skills: {
    title: string;
    languages: string;
    frameworks: string;
    tools: string;
    databases: string;
    uiux: string;
  };
  experience: {
    title: string;
    current: string;
  };
  education: {
    title: string;
  };
  contacts: {
    title: string;
    subtitle: string;
    phone: string;
    telegram: string;
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
      portfolio: 'Проекты',
      skills: 'Навыки',
      experience: 'Опыт',
      education: 'Образование',
      contacts: 'Контакты',
    },
    home: {
      name: 'Михаил Дутчак',
      title: 'Full Stack Developer',
      subtitle: 'Создаю высокопроизводительные веб-приложения',
      experience: '3.5 года опыта',
      location: 'Владивосток, Россия',
      age: 'Родился в 2003',
      viewWorks: 'Мои проекты',
      contact: 'Связаться',
    },
    about: {
      title: 'Обо мне',
      description: 'Full Stack разработчик с опытом работы более трех лет, нацеленный на создание высокопроизводительных и масштабируемых веб-приложений. Обладаю опытом работы с различными базами данных, включая MySQL и PostgreSQL, и глубоким пониманием принципов UI/UX дизайна. Успешно реализовал проекты, включающие интеграцию со сторонними API, такими как YooMoney. Ориентирован на результат, стремлюсь к постоянному профессиональному росту и изучению новых технологий.',
    },
    portfolio: {
      title: 'Портфолио',
    },
    skills: {
      title: 'Технологический стек',
      languages: 'Языки программирования',
      frameworks: 'Фреймворки и библиотеки',
      tools: 'Инструменты',
      databases: 'Базы данных',
      uiux: 'UI/UX Дизайн',
    },
    experience: {
      title: 'Опыт работы',
      current: 'н.в.',
    },
    education: {
      title: 'Образование',
    },
    contacts: {
      title: 'Свяжитесь со мной',
      subtitle: 'Открыт для новых предложений и интересных проектов',
      phone: 'Телефон',
      telegram: 'Telegram',
    },
    footer: {
      rights: '© 2024 Дутчак Михаил Романович. Все права защищены.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      contacts: 'Contacts',
    },
    home: {
      name: 'Mikhail Dutchak',
      title: 'Full Stack Developer',
      subtitle: 'Building high-performance web applications',
      experience: '3.5 years of experience',
      location: 'Vladivostok, Russia',
      age: 'Born in 2003',
      viewWorks: 'My Projects',
      contact: 'Contact Me',
    },
    about: {
      title: 'About Me',
      description: 'Full Stack developer with over three years of experience, focused on creating high-performance and scalable web applications. I have experience working with various databases, including MySQL and PostgreSQL, and a deep understanding of UI/UX design principles. Successfully implemented projects including integration with third-party APIs such as YooMoney. Result-oriented, striving for continuous professional growth and learning new technologies.',
    },
    portfolio: {
      title: 'Portfolio',
    },
    skills: {
      title: 'Technology Stack',
      languages: 'Programming Languages',
      frameworks: 'Frameworks & Libraries',
      tools: 'Tools',
      databases: 'Databases',
      uiux: 'UI/UX Design',
    },
    experience: {
      title: 'Work Experience',
      current: 'present',
    },
    education: {
      title: 'Education',
    },
    contacts: {
      title: 'Get In Touch',
      subtitle: 'Open for new opportunities and interesting projects',
      phone: 'Phone',
      telegram: 'Telegram',
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