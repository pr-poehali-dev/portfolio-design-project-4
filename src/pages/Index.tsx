import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedBackground from '@/components/AnimatedBackground';
import ProjectMockup from '@/components/ProjectMockup';
import ScrollReveal from '@/components/ScrollReveal';
import PageLoader from '@/components/PageLoader';
import AnimatedProgressBar from '@/components/AnimatedProgressBar';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
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
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - navHeight;
      
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 1000;
      let start: number | null = null;

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
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

  const projects: Array<{
    title: string;
    description: string;
    tags: string[];
    image: string;
    mockupType?: 'desktop' | 'browser' | 'mobile';
  }> = [
    {
      title: language === 'ru' ? 'Телеграм-бот магазин' : 'Telegram Bot Store',
      description: language === 'ru' 
        ? 'Автоматизированный магазин с бесшовной автопокупкой через YooMoney API, SQL базой данных, многоуровневой реферальной системой и административной панелью'
        : 'Automated store with seamless auto-purchase via YooMoney API, SQL database, multi-level referral system and admin panel',
      tags: ['Python', 'Aiogram', 'SQL', 'YooMoney API'],
      image: '/img/3753d4b5-b3ed-4b83-87da-934bc43a37db.jpg',
      mockupType: 'browser' as const,
    },
    {
      title: language === 'ru' ? 'Игровой лаунчер' : 'Game Launcher',
      description: language === 'ru'
        ? 'Полнофункциональный лаунчер с клиентским интерфейсом и серверной частью, обеспечивающий безопасный доступ к игровому контенту. Интеграция с Telegram ботом'
        : 'Full-featured launcher with client interface and server-side, providing secure access to game content. Telegram bot integration',
      tags: ['C++', 'Python', 'Qt', 'Telegram API'],
      image: 'https://cdn.poehali.dev/files/e8baff31-aa0d-4067-a384-b328fb2f7f01.png',
      mockupType: 'desktop' as const,
    },
    {
      title: language === 'ru' ? 'UI/UX меню для игры' : 'Game UI/UX Menu',
      description: language === 'ru'
        ? 'Инновационное меню, интегрированное в DWM для повышения производительности. Использованы AntiScreen для защиты и ImGui для кастомизации'
        : 'Innovative menu integrated into DWM for better performance. AntiScreen for protection and ImGui for customization',
      tags: ['C++', 'ImGui', 'DWM', 'AntiScreen'],
      image: 'https://cdn.poehali.dev/files/23fb4563-3ca1-4ec6-8b08-226fabd8f60a.png',
      mockupType: 'desktop' as const,
    },
    {
      title: 'Prim-stone.ru',
      description: language === 'ru'
        ? 'Сайт-визитка для онлайн-демонстрации каталога памятников и скульптур'
        : 'Landing page for online demonstration of monuments and sculptures catalog',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://cdn.poehali.dev/files/76ed6c4a-6fd4-444a-a637-3edb1f5e05a9.png',
      mockupType: 'browser' as const,
    },
    {
      title: 'вм.art',
      description: language === 'ru'
        ? 'Онлайн-портфолио мебельной компании с автоматической генерацией 3D-моделей мебели с применением ИИ'
        : 'Online portfolio of furniture company with automatic 3D furniture model generation using AI',
      tags: ['Django', 'Python', 'AI', '3D', 'HTML', 'CSS'],
      image: 'https://cdn.poehali.dev/files/b0bf28a5-3a48-48af-b897-d2bf7195feaf.png',
      mockupType: 'browser' as const,
    },
    {
      title: language === 'ru' ? 'API для работы с памятью' : 'Memory API',
      description: language === 'ru'
        ? 'API для чтения/записи в память процесса и взаимодействия между пользователями. Безопасность через JWT и AES'
        : 'API for reading/writing to process memory and user interaction. Security via JWT and AES',
      tags: ['Python', 'FastAPI', 'JWT', 'AES', 'Security'],
      image: '/img/9016f003-7fff-440e-ae16-89392c2297a8.jpg',
      mockupType: 'browser' as const,
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

  const softSkills = [
    { name: language === 'ru' ? 'Командная работа' : 'Teamwork', icon: 'Users' },
    { name: language === 'ru' ? 'Ответственность' : 'Responsibility', icon: 'Shield' },
    { name: language === 'ru' ? 'Дисциплина' : 'Discipline', icon: 'Target' },
    { name: language === 'ru' ? 'Решение проблем' : 'Problem Solving', icon: 'Lightbulb' },
    { name: language === 'ru' ? 'Обучаемость' : 'Quick Learning', icon: 'BookOpen' },
    { name: language === 'ru' ? 'Тайм-менеджмент' : 'Time Management', icon: 'Clock' },
  ];

  const hardSkills = [
    { name: 'Full Stack Development', level: 90 },
    { name: 'Python/Django', level: 95 },
    { name: 'React/TypeScript', level: 88 },
    { name: 'C++', level: 85 },
    { name: 'UI/UX Design', level: 92 },
    { name: 'Database Design', level: 87 },
    { name: 'API Development', level: 90 },
    { name: 'Security (JWT/AES)', level: 83 },
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
    <>
      <PageLoader onLoadComplete={() => setIsPageLoaded(true)} />
      <div 
        className={`min-h-screen bg-background relative transition-opacity duration-700 ${
          isPageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
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
          <ScrollReveal animation="slide-up">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t.about.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.description}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="проекты" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.portfolio.title}
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ScrollReveal key={idx} animation="bounce" delay={idx * 100}>
                <Card
                  className="group overflow-hidden card-3d border-2 border-primary/20"
                  onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
                  onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
                >
                <div className="relative overflow-hidden h-64">
                  {project.mockupType ? (
                    <ProjectMockup 
                      image={project.image} 
                      title={project.title}
                      type={project.mockupType}
                    />
                  ) : (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  )}
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="навыки" className="py-24 bg-card relative z-10">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.skills.title}
            </h2>
          </ScrollReveal>
          <div className="space-y-6 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <ScrollReveal animation="slide-up" delay={100}>
                <Card className="p-8 border-2 border-primary/20 hover:border-primary/40 transition-all group">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform">
                      <Icon name="Code" className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-bold">{t.skills.languages}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {techStack.languages.map((lang) => (
                        <Badge key={lang} variant="secondary" className="text-sm py-1.5 px-3">{lang}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={200}>
                <Card className="p-8 border-2 border-accent/20 hover:border-accent/40 transition-all group">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 bg-accent/10 rounded-2xl group-hover:scale-110 transition-transform">
                      <Icon name="Database" className="text-accent" size={32} />
                    </div>
                    <h3 className="text-xl font-bold">{t.skills.databases}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {techStack.databases.map((db) => (
                        <Badge key={db} variant="outline" className="text-sm py-1.5 px-3">{db}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={300}>
                <Card className="p-8 border-2 border-secondary/20 hover:border-secondary/40 transition-all group">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 bg-secondary/10 rounded-2xl group-hover:scale-110 transition-transform">
                      <Icon name="Wrench" className="text-secondary" size={32} />
                    </div>
                    <h3 className="text-xl font-bold">{t.skills.tools}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {techStack.tools.map((tool) => (
                        <Badge key={tool} variant="secondary" className="text-sm py-1.5 px-3">{tool}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            </div>

            <ScrollReveal animation="slide-up" delay={400}>
              <Card className="p-8 border-2 border-primary/20 hover:border-primary/40 transition-all">
                <div className="flex items-center gap-3 mb-8 justify-center">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <Icon name="Package" className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">{t.skills.frameworks}</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/5 rounded-full">
                      <Icon name="Code2" className="text-primary" size={18} />
                      <p className="text-sm font-bold uppercase tracking-wide">Python</p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {techStack.frameworks.python.map((fw) => (
                        <Badge key={fw} variant="outline" className="text-sm py-1.5 px-3">{fw}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-secondary/5 rounded-full">
                      <Icon name="Zap" className="text-secondary" size={18} />
                      <p className="text-sm font-bold uppercase tracking-wide">JavaScript/TypeScript</p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {techStack.frameworks.js.map((fw) => (
                        <Badge key={fw} variant="outline" className="text-sm py-1.5 px-3">{fw}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-accent/5 rounded-full">
                      <Icon name="Sparkles" className="text-accent" size={18} />
                      <p className="text-sm font-bold uppercase tracking-wide">{language === 'ru' ? 'Технологии' : 'Technologies'}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {techStack.frameworks.other.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-sm py-1.5 px-3">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal animation="slide-up" delay={500}>
              <Card className="p-8 border-2 border-secondary/20 hover:border-secondary/40 transition-all group">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-secondary/10 rounded-2xl group-hover:scale-110 transition-transform">
                    <Icon name="Palette" className="text-secondary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold">{t.skills.uiux}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {techStack.design.map((tool) => (
                      <Badge key={tool} variant="outline" className="text-sm py-1.5 px-3">{tool}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section id="soft-hard-skills" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Soft Skills
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {softSkills.map((skill, idx) => (
                    <Card
                      key={idx}
                      className="p-4 border-2 border-primary/20 hover:border-primary/40 transition-all animate-scale-in"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Icon name={skill.icon as any} className="text-primary" size={20} />
                        </div>
                        <p className="font-semibold text-sm">{skill.name}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Hard Skills
                </h2>
                <div className="space-y-4">
                  {hardSkills.map((skill, idx) => (
                    <AnimatedProgressBar
                      key={idx}
                      name={skill.name}
                      level={skill.level}
                      delay={idx * 100}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="опыт" className="bg-card relative z-10 px-0 mx-0 my-0 py-6">
        <div className="container mx-auto px-[23px]">
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

      <section id="образование" className="bg-card relative z-10 py-0">
        <div className="container px-6 my-0 py-[41px] mx-0">
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
      </div>
    </>
  );
};

export default Index;