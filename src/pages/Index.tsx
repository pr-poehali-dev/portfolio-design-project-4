import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedBackground from '@/components/AnimatedBackground';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const techStack = {
    languages: ['C++', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Assembly'],
    frameworks: {
      python: ['Django', 'FastAPI', 'PyQt', 'Aiogram', 'NumPy', 'Pandas'],
      js: ['React', 'Angular', 'Vue.js', 'Node.js'],
      other: ['WebSockets', 'REST API', 'JWT', 'AES', 'RSA'],
    },
    tools: ['Git', 'Docker', 'Linux', 'Google Cloud Platform'],
    databases: ['MySQL', 'PostgreSQL'],
    design: ['Figma', 'CorelDraw', 'Photoshop', '3DS Max', 'Blender', 'Archicad', 'Autocad'],
  };

  const projects = [
    {
      title: language === 'ru' ? 'Телеграм-бот магазин' : 'Telegram Bot Store',
      description: language === 'ru' 
        ? 'Автоматизированный магазин с бесшовной автопокупкой через YooMoney API, SQL базой данных, многоуровневой реферальной системой и административной панелью'
        : 'Automated store with seamless auto-purchase via YooMoney API, SQL database, multi-level referral system and admin panel',
      tags: ['Python', 'Aiogram', 'SQL', 'YooMoney API'],
      image: '/img/2fefb855-23e1-411a-b966-d827fe5c44d5.jpg',
    },
    {
      title: language === 'ru' ? 'Игровой лаунчер' : 'Game Launcher',
      description: language === 'ru'
        ? 'Полнофункциональный лаунчер с клиентским интерфейсом и серверной частью, обеспечивающий безопасный доступ к игровому контенту. Интеграция с Telegram ботом'
        : 'Full-featured launcher with client interface and server-side, providing secure access to game content. Telegram bot integration',
      tags: ['C++', 'Python', 'Qt', 'Telegram API'],
      image: '/img/2fefb855-23e1-411a-b966-d827fe5c44d5.jpg',
    },
    {
      title: language === 'ru' ? 'UI/UX меню для игры' : 'Game UI/UX Menu',
      description: language === 'ru'
        ? 'Инновационное меню, интегрированное в DWM для повышения производительности. Использованы AntiScreen для защиты и ImGui для кастомизации'
        : 'Innovative menu integrated into DWM for better performance. AntiScreen for protection and ImGui for customization',
      tags: ['C++', 'ImGui', 'DWM', 'AntiScreen'],
      image: '/img/2fefb855-23e1-411a-b966-d827fe5c44d5.jpg',
    },
    {
      title: 'Prim-stone.ru',
      description: language === 'ru'
        ? 'Сайт-визитка для онлайн-демонстрации каталога памятников и скульптур'
        : 'Landing page for online demonstration of monuments and sculptures catalog',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: '/img/2fefb855-23e1-411a-b966-d827fe5c44d5.jpg',
    },
    {
      title: 'вм.art',
      description: language === 'ru'
        ? 'Онлайн-портфолио мебельной компании с автоматической генерацией 3D-моделей мебели с применением ИИ'
        : 'Online portfolio of furniture company with automatic 3D furniture model generation using AI',
      tags: ['Django', 'Python', 'AI', '3D', 'HTML', 'CSS'],
      image: '/img/2fefb855-23e1-411a-b966-d827fe5c44d5.jpg',
    },
    {
      title: language === 'ru' ? 'API для работы с памятью' : 'Memory API',
      description: language === 'ru'
        ? 'API для чтения/записи в память процесса и взаимодействия между пользователями. Безопасность через JWT и AES'
        : 'API for reading/writing to process memory and user interaction. Security via JWT and AES',
      tags: ['Python', 'FastAPI', 'JWT', 'AES', 'Security'],
      image: '/img/2fefb855-23e1-411a-b966-d827fe5c44d5.jpg',
    },
  ];

  const experience = [
    {
      period: language === 'ru' ? '2024 – н.в.' : '2024 – present',
      position: language === 'ru' ? 'Оператор узла связи' : 'Communication Node Operator',
      company: language === 'ru' ? 'Вооруженные силы РФ' : 'Armed Forces of the Russian Federation',
      description: language === 'ru'
        ? 'Шифрование и дешифрование конфиденциальной информации. Обслуживание и настройка оборудования связи. Обеспечение стабильной и безопасной передачи данных'
        : 'Encryption and decryption of confidential information. Maintenance and configuration of communication equipment. Ensuring stable and secure data transmission',
    },
    {
      period: '2022 – 2024',
      position: language === 'ru' ? 'Программист' : 'Programmer',
      company: language === 'ru' ? 'ИП Михаил Гижицкий' : 'IP Mikhail Gizhitsky',
      description: language === 'ru'
        ? 'Разработка и поддержка веб-сайтов (front-end и back-end). Оптимизация сайтов для поисковых систем (SEO). Техническая поддержка пользователей'
        : 'Web development and maintenance (front-end and back-end). SEO optimization. Technical user support',
    },
  ];

  const education = [
    {
      period: '2024 – н.в.',
      institution: language === 'ru' ? 'Дальневосточный федеральный университет' : 'Far Eastern Federal University',
      degree: language === 'ru' ? 'Прикладная информатика' : 'Applied Informatics',
      description: language === 'ru' ? 'Разработка и управление цифровыми продуктами (1 курс)' : 'Development and management of digital products (1st year)',
    },
    {
      period: '2020 – 2024',
      institution: language === 'ru' ? 'Владивостокский государственный университет' : 'Vladivostok State University',
      degree: language === 'ru' ? 'Дизайн' : 'Design',
      description: language === 'ru' ? 'Дизайн по отраслям' : 'Design by industry',
    },
  ];

  const navItems = [
    { key: 'home', id: 'главная' },
    { key: 'about', id: 'обо-мне' },
    { key: 'portfolio', id: 'проекты' },
    { key: 'skills', id: 'навыки' },
    { key: 'experience', id: 'опыт' },
    { key: 'education', id: 'образование' },
    { key: 'contacts', id: 'контакты' },
  ];

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardRef: HTMLDivElement) => {
    const rect = cardRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    cardRef.style.setProperty('--rx', `${rotateX}deg`);
    cardRef.style.setProperty('--ry', `${rotateY}deg`);
  };

  const handleCardMouseLeave = (cardRef: HTMLDivElement) => {
    cardRef.style.setProperty('--rx', '0deg');
    cardRef.style.setProperty('--ry', '0deg');
  };

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
              MD
            </h1>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="rounded-full"
                >
                  {theme === 'light' ? (
                    <Icon name="Moon" size={20} />
                  ) : (
                    <Icon name="Sun" size={20} />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="rounded-full font-semibold"
                >
                  {language === 'ru' ? 'EN' : 'RU'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section
        id="главная"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 animate-gradient" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                  {t.home.name}
                </span>
              </h1>
              <p className="text-3xl md:text-4xl font-bold mb-4">
                {t.home.title}
              </p>
              <p className="text-xl text-muted-foreground mb-8">
                {t.home.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary" size={20} />
                  <span>{t.home.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" className="text-secondary" size={20} />
                  <span>{t.home.age}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Briefcase" className="text-accent" size={20} />
                  <span>{t.home.experience}</span>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('проекты')}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-lg shadow-primary/50 transition-all"
                >
                  {t.home.viewWorks}
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('контакты')}
                >
                  {t.home.contact}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="обо-мне" className="py-24 bg-card relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.about.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in">
              {t.about.description}
            </p>
          </div>
        </div>
      </section>

      <section id="проекты" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.portfolio.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="group overflow-hidden card-3d animate-scale-in border-2 border-primary/20"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="навыки" className="py-24 bg-card relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.skills.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 border-2 border-primary/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Code" className="text-primary" size={24} />
                {t.skills.languages}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.languages.map((lang) => (
                  <Badge key={lang} variant="secondary">{lang}</Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-2 border-secondary/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Package" className="text-secondary" size={24} />
                {t.skills.frameworks}
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Python:</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.frameworks.python.map((fw) => (
                      <Badge key={fw} variant="outline">{fw}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">JavaScript/TypeScript:</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.frameworks.js.map((fw) => (
                      <Badge key={fw} variant="outline">{fw}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">{language === 'ru' ? 'Технологии' : 'Technologies'}:</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.frameworks.other.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-2 border-accent/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Wrench" className="text-accent" size={24} />
                {t.skills.tools}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.tools.map((tool) => (
                  <Badge key={tool} variant="secondary">{tool}</Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-2 border-primary/20">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Database" className="text-primary" size={24} />
                {t.skills.databases}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.databases.map((db) => (
                  <Badge key={db} variant="secondary">{db}</Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-2 border-secondary/20 md:col-span-2">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Palette" className="text-secondary" size={24} />
                {t.skills.uiux}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.design.map((tool) => (
                  <Badge key={tool} variant="outline">{tool}</Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="опыт" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.experience.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
              <div className="space-y-12">
                {experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="relative pl-20 animate-fade-in-left"
                    style={{ animationDelay: `${idx * 0.15}s` }}
                  >
                    <div className="absolute left-5 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary border-4 border-background" />
                    <Card className="hover:shadow-lg transition-shadow border-2 border-primary/20">
                      <CardContent className="p-6">
                        <div className="flex flex-wrap justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                            <p className="text-secondary font-semibold">{exp.company}</p>
                          </div>
                          <Badge variant="secondary">{exp.period}</Badge>
                        </div>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="образование" className="py-24 bg-card relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.education.title}
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <Card
                key={idx}
                className="p-6 border-2 border-primary/20 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Badge variant="secondary" className="mb-3">{edu.period}</Badge>
                <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                <p className="text-lg font-semibold text-primary mb-2">{edu.degree}</p>
                <p className="text-muted-foreground text-sm">{edu.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-24 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              {t.contacts.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              {t.contacts.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white">
                <Icon name="Phone" className="mr-2" size={20} />
                +7 924-945-07-55
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://t.me/KripKripo1ek" target="_blank" rel="noopener noreferrer">
                  <Icon name="Send" className="mr-2" size={20} />
                  @KripKripo1ek
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:mihail-dutchak@mail.ru">
                  <Icon name="Mail" className="mr-2" size={20} />
                  mihail-dutchak@mail.ru
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
