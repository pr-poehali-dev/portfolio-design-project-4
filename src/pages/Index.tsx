import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

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
      title: 'Digital Brand Experience',
      description: 'Комплексный редизайн цифрового бренда для технологической компании',
      tags: ['UI/UX', 'Branding', 'Web'],
      image: '/img/2fefb855-23e1-411a-b966-d827fe5c44d5.jpg',
    },
    {
      title: 'E-commerce Platform',
      description: 'Создание современной платформы электронной коммерции с фокусом на UX',
      tags: ['Frontend', 'Design System', 'React'],
      image: '/img/2fefb855-23e1-411a-b966-d827fe5c44d5.jpg',
    },
    {
      title: 'Mobile App Design',
      description: 'Разработка интуитивного мобильного приложения для финтех стартапа',
      tags: ['Mobile', 'UI/UX', 'Prototyping'],
      image: '/img/2fefb855-23e1-411a-b966-d827fe5c44d5.jpg',
    },
  ];

  const experience = [
    {
      year: '2023 - Настоящее время',
      position: 'Senior Creative Director',
      company: 'Digital Studio',
      description: 'Руководство креативной командой, разработка стратегий брендинга',
    },
    {
      year: '2020 - 2023',
      position: 'Lead UI/UX Designer',
      company: 'Tech Solutions',
      description: 'Проектирование пользовательских интерфейсов для корпоративных продуктов',
    },
    {
      year: '2018 - 2020',
      position: 'Product Designer',
      company: 'Startup Inc.',
      description: 'Разработка дизайн-систем и прототипирование новых функций',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              МР
            </h1>
            <div className="hidden md:flex gap-8">
              {['Главная', 'Обо мне', 'Портфолио', 'Навыки', 'Опыт', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/\s/g, '-'))}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section
        id="главная"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-block mb-4">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  Creative Portfolio
                </Badge>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Дутчак <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Михаил Романович
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Creative Director & UI/UX Designer
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('портфолио')}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  Смотреть работы
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('контакты')}
                >
                  Связаться
                </Button>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="relative">
                <img
                  src="/img/2fefb855-23e1-411a-b966-d827fe5c44d5.jpg"
                  alt="Creative Hero"
                  className="rounded-3xl shadow-2xl animate-float"
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
              Обо мне
            </h2>
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              <div>
                <p className="text-lg text-muted-foreground mb-6">
                  Креативный директор с 7+ летним опытом в создании цифровых продуктов. 
                  Специализируюсь на разработке уникальных пользовательских интерфейсов 
                  и построении сильных брендов.
                </p>
                <p className="text-lg text-muted-foreground">
                  Моя миссия — создавать дизайн, который не только красив, но и решает 
                  реальные бизнес-задачи, улучшая опыт пользователей.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">50+ проектов</p>
                    <p className="text-sm text-muted-foreground">Успешно реализовано</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Icon name="Users" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">30+ клиентов</p>
                    <p className="text-sm text-muted-foreground">По всему миру</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name="Sparkles" className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">15+ наград</p>
                    <p className="text-sm text-muted-foreground">В дизайн-индустрии</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in">Портфолио</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card
                key={idx}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in">Навыки</h2>
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
                  <Progress value={skill.level} className="h-3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="опыт" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in">Опыт работы</h2>
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
                    <div className="absolute left-5 top-0 w-6 h-6 rounded-full bg-secondary border-4 border-background" />
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-wrap justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                            <p className="text-secondary font-semibold">{exp.company}</p>
                          </div>
                          <Badge variant="secondary">{exp.year}</Badge>
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

      <section id="контакты" className="py-24 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Давайте создадим что-то вместе
            </h2>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Открыт для новых проектов и интересного сотрудничества
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                <Icon name="Mail" className="mr-2" size={20} />
                Email
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
            © 2024 Дутчак Михаил Романович. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
