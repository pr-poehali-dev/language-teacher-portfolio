import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Семён Усик</h1>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Обо мне</a>
            <a href="#achievements" className="text-foreground hover:text-primary transition-colors">Достижения</a>
            <a href="#certificates" className="text-foreground hover:text-primary transition-colors">Сертификаты</a>
            <a href="#education" className="text-foreground hover:text-primary transition-colors">Обучение</a>
          </div>
          <Button className="hidden md:block">Связаться</Button>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full mb-4">
              <span className="text-secondary font-semibold">Преподаватель иностранных языков</span>
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Семён Усик
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Профессиональный преподаватель английского и немецкого языков с 10-летним опытом. 
              Помогаю студентам достигать высоких результатов и влюбляться в изучение языков.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                <Icon name="Mail" size={20} />
                Написать мне
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Download" size={20} />
                Скачать CV
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/1027cc01-6e34-44da-a267-19a9e7571873/files/5834cc7c-b110-45f1-9c84-711647e0b985.jpg"
                alt="Семён Усик"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm">лет опыта</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Обо мне</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BookOpen" size={32} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Методика обучения</h4>
                <p className="text-muted-foreground">
                  Использую коммуникативный подход с акцентом на практическое применение языка в реальных ситуациях
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-secondary" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Индивидуальный подход</h4>
                <p className="text-muted-foreground">
                  Разрабатываю персонализированные программы обучения, учитывая цели и особенности каждого студента
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Результаты</h4>
                <p className="text-muted-foreground">
                  Более 200 студентов успешно сдали международные экзамены IELTS, TOEFL, Goethe-Zertifikat
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Достижения</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Trophy" size={24} className="text-secondary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Лучший преподаватель года</h4>
                <p className="text-muted-foreground">Награда от Ассоциации преподавателей иностранных языков, 2023</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Star" size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">98% успешных сдач экзаменов</h4>
                <p className="text-muted-foreground">Студенты показывают высокие результаты на международных экзаменах</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="BookMarked" size={24} className="text-secondary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Автор учебных материалов</h4>
                <p className="text-muted-foreground">Разработано более 50 авторских программ и методических пособий</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Globe" size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Международное признание</h4>
                <p className="text-muted-foreground">Участие в образовательных конференциях в Германии и Великобритании</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Сертификаты</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary to-primary/70 p-6 flex flex-col justify-between text-primary-foreground">
                <Icon name="Award" size={40} />
                <div>
                  <p className="text-2xl font-bold mb-2">CELTA</p>
                  <p className="text-sm opacity-90">Cambridge Certificate</p>
                </div>
              </div>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground">
                  Сертификат преподавателя английского языка взрослым, Cambridge University, 2015
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary to-secondary/70 p-6 flex flex-col justify-between text-secondary-foreground">
                <Icon name="GraduationCap" size={40} />
                <div>
                  <p className="text-2xl font-bold mb-2">Goethe C2</p>
                  <p className="text-sm opacity-90">Goethe-Institut</p>
                </div>
              </div>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground">
                  Высший уровень владения немецким языком, Goethe-Institut, 2017
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary to-primary/70 p-6 flex flex-col justify-between text-primary-foreground">
                <Icon name="Medal" size={40} />
                <div>
                  <p className="text-2xl font-bold mb-2">TESOL</p>
                  <p className="text-sm opacity-90">International Certificate</p>
                </div>
              </div>
              <CardContent className="pt-4">
                <p className="text-sm text-muted-foreground">
                  Международный сертификат преподавателя английского языка, 2019
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-3xl font-bold text-center mb-12">Обучение</h3>
          <div className="space-y-8">
            <Card className="border-l-4 border-l-primary shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="School" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-1">Магистратура по лингвистике</h4>
                    <p className="text-muted-foreground mb-2">МГУ им. М.В. Ломоносова • 2012-2014</p>
                    <p className="text-sm text-muted-foreground">
                      Специализация: Теория и методика преподавания иностранных языков. 
                      Диплом с отличием.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="BookOpen" size={24} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-1">Бакалавриат по филологии</h4>
                    <p className="text-muted-foreground mb-2">МГИМО • 2008-2012</p>
                    <p className="text-sm text-muted-foreground">
                      Двойная специальность: английский и немецкий языки. 
                      Год обучения в Германии по программе обмена.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Briefcase" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-1">Курсы повышения квалификации</h4>
                    <p className="text-muted-foreground mb-2">Регулярное обучение • 2015-2024</p>
                    <p className="text-sm text-muted-foreground">
                      Ежегодное участие в международных программах повышения квалификации, 
                      семинарах и конференциях по методике преподавания.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h3 className="text-3xl font-bold mb-6">Начните свое языковое путешествие</h3>
          <p className="text-lg mb-8 opacity-90">
            Готовы достичь своих целей в изучении языка? Свяжитесь со мной для бесплатной консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              <Icon name="Mail" size={20} />
              info@annivanova.ru
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2">
              <Icon name="Phone" size={20} />
              +7 (999) 123-45-67
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Семён Усик. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;