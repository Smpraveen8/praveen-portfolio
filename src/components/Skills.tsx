import { Code2, Layout, Database, Brain, Network, Terminal, Cpu, Server } from 'lucide-react';

export default function Skills() {
  const skillSets = [
    {
      label: "Backend & Core",
      icon: Code2,
      color: "blue",
      skills: ["Java", "Spring Boot", "Spring MVC", "Spring Security", "REST APIs", "Microservices", "Python", "JWT", "RBAC"]
    },
    {
      label: "Frontend",
      icon: Layout,
      color: "indigo",
      skills: ["React.js", "TypeScript", "JavaScript", "Redux Toolkit", "Axios", "HTML5", "CSS3", "Tailwind"]
    },
    {
      label: "Database & Cloud",
      icon: Database,
      color: "cyan",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "AWS EC2", "AWS RDS", "AWS S3", "Docker", "Linux"]
    },
    {
      label: "AI & NLP Stack",
      icon: Brain,
      color: "purple",
      skills: ["SentenceTransformers", "KeyBERT", "Scikit-learn", "PyMuPDF", "Semantic Similarity", "NLP"]
    },
    {
      label: "System Design",
      icon: Server,
      color: "emerald",
      skills: ["Microservices", "Event-Driven", "Outbox Pattern", "Distributed Systems", "Load Balancing", "Caching"]
    },
    {
      label: "DevOps & Tools",
      icon: Terminal,
      color: "slate",
      skills: ["Git", "GitHub", "Jira", "Postman", "Maven", "CI/CD Pipelines", "Agile/Scrum"]
    },
    {
      label: "Data Structures",
      icon: Cpu,
      color: "orange",
      skills: ["Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Graphs", "HashMaps", "Heaps"]
    },
    {
      label: "Algorithms",
      icon: Network,
      color: "rose",
      skills: ["Sliding Window", "Two Pointers", "Binary Search", "Sorting", "Greedy", "DP", "Complexity"]
    }
  ];

  return (
    // Reduced padding from py-24 to py-12
    <section id="skills" className="py-12 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">
            Technical <span className="text-blue-600">Expertise</span>
          </h2>
          <div className="w-12 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillSets.map((set, index) => (
            <div 
              key={index} 
              className="group bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header: Icon + Label */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 bg-slate-50 group-hover:bg-blue-50 text-slate-600 group-hover:text-blue-600 rounded-xl transition-colors duration-300`}>
                  <set.icon size={22} strokeWidth={2.5} />
                </div>
                <h3 className="font-bold text-slate-800 tracking-tight leading-tight">{set.label}</h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1.5">
                {set.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 py-1 bg-white text-slate-600 text-[11px] font-semibold rounded-md border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/30 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}