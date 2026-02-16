import { Code2, Database, Cloud, Cpu } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Building scalable applications from React frontends to Spring Boot microservices',
    },
    {
      icon: Database,
      title: 'System Architecture',
      description: 'Designing distributed systems with event-driven patterns and optimized data models',
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Deploying production systems on AWS with containerization and CI/CD automation',
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Implementing NLP-powered services for intelligent resume analysis and matching',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Software Engineer with over a year of production experience contributing
              across the full Software Development Life Cycle. I specialize in
              architecting and delivering enterprise-grade systems that solve real
              business problems at scale.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              My expertise spans from designing microservices architectures and REST
              APIs to building responsive React applications with Redux state
              management. I focus on writing clean, maintainable code that follows
              SOLID principles and industry best practices.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I thrive in collaborative environments where I can work with
              cross-functional teams to deliver high-impact features. Whether it's
              optimizing database queries, implementing secure authentication systems,
              or integrating AI-powered capabilities, I approach every challenge with a
              system design mindset focused on performance, scalability, and security.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow border border-slate-200"
              >
                <item.icon className="w-10 h-10 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
