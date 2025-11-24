import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Briefcase, 
  User, 
  Terminal,
  Cpu,
  Globe,
  Send,
  Menu,
  X,
  ChevronDown,
  Languages
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('en'); // Default language set to English

  // Translation Dictionary
  const content = {
    en: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact"
      },
      hero: {
        greeting: "👋 Welcome to my portfolio",
        im: "Hi, I'm",
        name: "Zhang Ming",
        role: "Full Stack Developer",
        desc: "Focused on building exceptional digital experiences. I love transforming complex ideas into elegant code, prioritizing details, performance, and user experience.",
        btnProject: "View Work",
        btnContact: "Contact Me",
        expLabel: "Experience",
        expValue: "5 Years+"
      },
      about: {
        title: "About Me",
        p1: "I am a passionate Full Stack Developer with a Bachelor's degree in Computer Science. I love exploring cutting-edge technologies and applying them to real-world projects.",
        p2: "Over the past five years, I've worked on projects ranging from small startups to large enterprise applications. I believe code should not only run but be maintainable and scalable. In my free time, I contribute to open source or write tech blogs.",
        statsProject: "Projects",
        statsClient: "Happy Clients"
      },
      skills: {
        title: "Tech Stack",
        subtitle: "Tools and technologies I work with",
        categories: {
          frontend: "Frontend Dev",
          backend: "Backend Dev",
          design: "UI/UX Design",
          devops: "DevOps"
        }
      },
      projects: {
        title: "Featured Projects",
        subtitle: "Some of my recent best works",
        viewMore: "View More",
        source: "Code",
        preview: "Live Demo",
        list: [
          {
            title: "E-Commerce Dashboard",
            desc: "A fully functional e-commerce admin dashboard including data visualization, order management, and inventory tracking.",
          },
          {
            title: "AI Chat Application",
            desc: "Integrated OpenAI API chat application supporting voice input and context memory.",
          },
          {
            title: "Finance Tracker",
            desc: "Personal finance tracking app to help users manage expenses, set budgets, and generate monthly reports.",
          }
        ]
      },
      contact: {
        title: "Ready to start your next project?",
        subtitle: "Feel free to reach out for collaborations or just a friendly hello.",
        name: "Name",
        namePlaceholder: "Your Name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        message: "Message",
        msgPlaceholder: "Tell me about your needs...",
        send: "Send Message"
      },
      footer: {
        rights: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      }
    },
    zh: {
      nav: {
        home: "首页",
        about: "关于",
        skills: "技能",
        projects: "项目",
        contact: "联系"
      },
      hero: {
        greeting: "👋 欢迎来到我的个人主页",
        im: "你好，我是",
        name: "张明",
        role: "全栈开发工程师",
        desc: "专注于构建卓越的数字体验。我喜欢将复杂的想法转化为优雅的代码，注重细节、性能和用户体验。",
        btnProject: "查看作品",
        btnContact: "联系我",
        expLabel: "经验",
        expValue: "5 年+"
      },
      about: {
        title: "关于我",
        p1: "我是一名充满热情的全栈开发者，拥有计算机科学学士学位。我热衷于探索前沿技术，并将其应用于实际项目中。",
        p2: "在过去的五年里，我参与了从小型初创公司到大型企业级应用的各种项目。我坚信代码不仅要能运行，更要易于维护和扩展。闲暇时间，我喜欢在开源社区贡献代码，或者撰写技术博客分享我的学习心得。",
        statsProject: "完成项目",
        statsClient: "满意客户"
      },
      skills: {
        title: "技术栈",
        subtitle: "我所擅长的工具与技术",
        categories: {
          frontend: "前端开发",
          backend: "后端开发",
          design: "UI/UX 设计",
          devops: "DevOps"
        }
      },
      projects: {
        title: "精选项目",
        subtitle: "近期的一些得意之作",
        viewMore: "查看更多",
        source: "源码",
        preview: "预览",
        list: [
          {
            title: "E-Commerce Dashboard",
            desc: "一个功能完备的电商后台管理系统，包含数据可视化、订单管理和库存追踪功能。",
          },
          {
            title: "AI Chat Application",
            desc: "集成了 OpenAI API 的智能对话应用，支持语音输入和上下文记忆。",
          },
          {
            title: "Finance Tracker",
            desc: "个人财务追踪应用，帮助用户管理支出、设定预算并生成月度报告。",
          }
        ]
      },
      contact: {
        title: "准备好开始下一个项目了吗？",
        subtitle: "无论是项目合作还是技术交流，我随时欢迎你的来信。",
        name: "姓名",
        namePlaceholder: "您的称呼",
        email: "邮箱",
        emailPlaceholder: "your@email.com",
        message: "留言内容",
        msgPlaceholder: "请简述您的需求...",
        send: "发送消息"
      },
      footer: {
        rights: "All rights reserved.",
        privacy: "隐私政策",
        terms: "服务条款"
      }
    }
  };

  const t = content[lang]; // Helper to access current language content

  // 项目数据结构（混合了翻译内容和静态标签/颜色）
  const projectsData = [
    {
      ...t.projects.list[0],
      tags: ["React", "Chart.js", "Node.js"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      ...t.projects.list[1],
      tags: ["OpenAI", "Next.js", "Tailwind"],
      color: "from-purple-500 to-pink-500"
    },
    {
      ...t.projects.list[2],
      tags: ["Vue", "Firebase", "PWA"],
      color: "from-emerald-500 to-teal-400"
    }
  ];

  // 处理滚动效果
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'zh' : 'en');
    setIsMenuOpen(false);
  };

  const NavLink = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => scrollTo(id)}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
        activeSection === id 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
          : 'text-gray-400 hover:text-white hover:bg-white/10'
      }`}
    >
      <Icon size={16} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* 动态背景装饰 */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      {/* 导航栏 */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollTo('home')}>
            Dev.Portfolio
          </div>

          {/* 桌面端菜单 */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink id="home" label={t.nav.home} icon={User} />
            <NavLink id="about" label={t.nav.about} icon={User} />
            <NavLink id="skills" label={t.nav.skills} icon={Cpu} />
            <NavLink id="projects" label={t.nav.projects} icon={Code} />
            <NavLink id="contact" label={t.nav.contact} icon={Mail} />
            
            {/* 桌面端语言切换 */}
            <div className="pl-4 ml-2 border-l border-white/10">
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-1 px-3 py-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all"
              >
                <Languages size={18} />
                <span className="text-sm font-medium">{lang === 'en' ? 'EN' : '中'}</span>
              </button>
            </div>
          </div>

          {/* 移动端菜单按钮组 */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <span className="text-sm font-bold">{lang === 'en' ? 'EN' : '中'}</span>
            </button>
            <button className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* 移动端菜单下拉 */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 border-b border-white/10 p-4 flex flex-col space-y-2 shadow-2xl">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 capitalize text-gray-300"
              >
                {t.nav[item]}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero 区域 */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              {t.hero.greeting}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {t.hero.im} <span className="text-white">{t.hero.name}</span><br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{t.hero.role}</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto md:mx-0">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button onClick={() => scrollTo('projects')} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2">
                {t.hero.btnProject} <Code size={18} />
              </button>
              <button onClick={() => scrollTo('contact')} className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 hover:border-slate-600 rounded-full font-medium transition-all hover:scale-105 flex items-center justify-center gap-2">
                {t.hero.btnContact} <Mail size={18} />
              </button>
            </div>
            
            <div className="flex gap-6 justify-center md:justify-start pt-8 text-slate-400">
              <a href="#" className="hover:text-blue-400 transition-colors"><Github size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Globe size={24} /></a>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="w-64 h-64 md:w-96 md:h-96 relative mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4" 
                alt="Profile" 
                className="relative z-10 w-full h-full rounded-full border-4 border-slate-800 shadow-2xl object-cover hover:rotate-3 transition-transform duration-500"
              />
              
              {/* 浮动卡片装饰 */}
              <div className="absolute -bottom-4 -left-4 bg-slate-800/90 backdrop-blur-sm p-4 rounded-xl border border-white/10 shadow-xl animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                    <Code size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">{t.hero.expLabel}</div>
                    <div className="font-bold text-white">{t.hero.expValue}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* 关于我 */}
      <section id="about" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 order-2 md:order-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500 rounded-2xl rotate-6 group-hover:rotate-3 transition-transform opacity-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Working" 
                  className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover h-[400px]"
                />
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
                <User className="text-blue-500" /> {t.about.title}
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                {t.about.p1}
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                {t.about.p2}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-slate-800 rounded-xl border border-white/5">
                  <h3 className="text-blue-400 font-bold text-xl mb-1">50+</h3>
                  <p className="text-slate-400 text-sm">{t.about.statsProject}</p>
                </div>
                <div className="p-4 bg-slate-800 rounded-xl border border-white/5">
                  <h3 className="text-blue-400 font-bold text-xl mb-1">20+</h3>
                  <p className="text-slate-400 text-sm">{t.about.statsClient}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 技能栈 */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.skills.title}</h2>
            <p className="text-slate-400">{t.skills.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t.skills.categories.frontend, icon: Globe, skills: ["React", "Vue.js", "Tailwind CSS", "TypeScript"] },
              { title: t.skills.categories.backend, icon: Terminal, skills: ["Node.js", "Python", "Go", "PostgreSQL"] },
              { title: t.skills.categories.design, icon: User, skills: ["Figma", "Adobe XD", "Prototyping", "Wireframing"] },
              { title: t.skills.categories.devops, icon: Cpu, skills: ["Docker", "AWS", "CI/CD", "Linux"] },
            ].map((category, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-2 group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-900 rounded-full text-sm text-slate-300 border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 项目展示 */}
      <section id="projects" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.projects.title}</h2>
              <p className="text-slate-400">{t.projects.subtitle}</p>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              {t.projects.viewMore} <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div key={index} className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all">
                {/* 模拟项目图片区域 */}
                <div className={`h-48 w-full bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}>
                  <Briefcase size={48} className="text-white/50 group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2 min-h-[40px]">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <button className="text-sm font-medium text-white hover:text-blue-400 transition-colors flex items-center gap-2">
                      <Github size={16} /> {t.projects.source}
                    </button>
                    <button className="text-sm font-medium text-white hover:text-blue-400 transition-colors flex items-center gap-2">
                      <ExternalLink size={16} /> {t.projects.preview}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center gap-2 text-blue-400 font-medium">
              {t.projects.viewMore} <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
            {/* 装饰圆圈 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">{t.contact.title}</h2>
              <p className="text-slate-400">{t.contact.subtitle}</p>
            </div>

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-slate-400 ml-1">{t.contact.name}</label>
                  <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder={t.contact.namePlaceholder} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-400 ml-1">{t.contact.email}</label>
                  <input type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder={t.contact.emailPlaceholder} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-400 ml-1">{t.contact.message}</label>
                <textarea rows="4" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder={t.contact.msgPlaceholder}></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl shadow-lg transform transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                <Send size={20} /> {t.contact.send}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-8 border-t border-white/5 bg-slate-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2024 {t.hero.name}. {t.footer.rights}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;