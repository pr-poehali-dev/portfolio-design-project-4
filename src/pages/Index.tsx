import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
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

  const skills = [
    { name: 'UI/UX Design', level: 95 },
    { name: 'React & TypeScript', level: 90 },
    { name: 'Creative Direction', level: 88 },
    { name: 'Figma & Adobe Suite', level: 92 },
    { name: 'Brand Strategy', level: 85 },
  ];

  const projects = [
    {
      tags: ['UI/UX', 'Branding', 'Web'],
      image: '/img/2fefb855-23e1-411a-b966-d827fe5c44d5.jpg',
    },
    {
      tags: ['Frontend', 'Design System', 'React'],
      image: '/img/2fefb855-23e1-411a-b966-d827fe5c44d5.jpg',
    },
    {
      tags: ['Mobile', 'UI/UX', 'Prototyping'],
      image: '/img/2fefb855-23e1-411a-b966-d827fe5c44d5.jpg',
    },
  ];

  const navItems = [
    { key: 'home', id: 'главная' },
    { key: 'about', id: 'обо-мне' },
    { key: 'portfolio', id: 'портфолио' },
    { key: 'skills', id: 'навыки' },
    { key: 'experience', id: 'опыт' },
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
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              МР
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-block mb-4">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  {t.home.badge}
                </Badge>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                {language === 'ru' ? 'Дутчак' : 'Dutchak'} <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                  {t.home.name}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t.home.title}
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('портфолио')}
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
            <div className="animate-fade-in-right">
              <div className="relative">
                <img
                  src="/img/2fefb855-23e1-411a-b966-d827fe5c44d5.jpg"
                  alt="Creative Hero"
                  className="rounded-3xl shadow-2xl shadow-primary/20 animate-float"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full blur-3xl opacity-50" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="обо-мне" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
              {t.about.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  {t.about.description1}
                </p>
                <p className="text-lg text-muted-foreground">
                  {t.about.description2}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">{t.about.projects}</p>
                    <p className="text-sm text-muted-foreground">{t.about.projectsDesc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Icon name="Users" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">{t.about.clients}</p>
                    <p className="text-sm text-muted-foreground">{t.about.clientsDesc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name="Sparkles" className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">{t.about.awards}</p>
                    <p className="text-sm text-muted-foreground">{t.about.awardsDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in">{t.portfolio.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="group overflow-hidden card-3d animate-scale-in border-2 border-primary/20"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onMouseMove={(e) => handleCardMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleCardMouseLeave(e.currentTarget)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Project ${idx + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {idx === 0 ? t.portfolio.project1Title : idx === 1 ? t.portfolio.project2Title : t.portfolio.project3Title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {idx === 0 ? t.portfolio.project1Desc : idx === 1 ? t.portfolio.project2Desc : t.portfolio.project3Desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
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

      <section id="навыки" className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in">{t.skills.title}</h2>
            <div className="space-y-8">
              {skills.map((skill, idx) => (
                <div
                  key={skill.name}
                  className="animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-lg">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="опыт" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in">{t.experience.title}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
              <div className="space-y-12">
                <div className="relative pl-20 animate-fade-in-left">
                  <div className="absolute left-5 top-0 w-6 h-6 rounded-full bg-secondary border-4 border-background" />
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{t.experience.job1Position}</h3>
                          <p className="text-secondary font-semibold">{t.experience.job1Company}</p>
                        </div>
                        <Badge variant="secondary">2023 - {t.experience.current}</Badge>
                      </div>
                      <p className="text-muted-foreground">{t.experience.job1Desc}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative pl-20 animate-fade-in-left" style={{ animationDelay: '0.15s' }}>
                  <div className="absolute left-5 top-0 w-6 h-6 rounded-full bg-secondary border-4 border-background" />
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{t.experience.job2Position}</h3>
                          <p className="text-secondary font-semibold">{t.experience.job2Company}</p>
                        </div>
                        <Badge variant="secondary">2020 - 2023</Badge>
                      </div>
                      <p className="text-muted-foreground">{t.experience.job2Desc}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative pl-20 animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
                  <div className="absolute left-5 top-0 w-6 h-6 rounded-full bg-secondary border-4 border-background" />
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap justify-between items-start mb-3">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{t.experience.job3Position}</h3>
                          <p className="text-secondary font-semibold">{t.experience.job3Company}</p>
                        </div>
                        <Badge variant="secondary">2018 - 2020</Badge>
                      </div>
                      <p className="text-muted-foreground">{t.experience.job3Desc}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-24 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              {t.contacts.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              {t.contacts.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                <Icon name="Mail" className="mr-2" size={20} />
                {t.contacts.email}
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Linkedin" className="mr-2" size={20} />
                LinkedIn
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Github" className="mr-2" size={20} />
                GitHub
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Send" className="mr-2" size={20} />
                Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t">
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