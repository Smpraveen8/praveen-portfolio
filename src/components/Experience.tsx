import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Associate Software Engineer',
      company: 'MomentumMerge Consultancy Services Pvt. Ltd.',
      location: 'Bengaluru, India',
      period: 'July 2025 – Present',
      current: true,
      description: 'Leading backend architecture and full-stack development for enterprise ATS platforms.',
      achievements: [
        'Working on MomentumJobs, a large-scale enterprise job portal and ATS platform serving recruiters, candidates, and administrators.',
        'Contributing to backend architecture, distributed systems design, security infrastructure, database modeling, notification workflows, and cloud deployment pipelines.',
        'Collaborating across frontend, ML, DevOps, and product teams to deliver high-availability, secure, and scalable production systems.',
        'Designed and implemented stateless JWT + Refresh Token authentication with secure role-based access control (RBAC).',
        'Built a distributed In-App and Email Notification platform using the Outbox Event Pattern, scheduled workers, and retry mechanisms.',
        'Designed complete relational database schema for ATS, job postings, applications, recruiters, users, and audit trails.',
        'Implemented environment-based configuration management across Dev, Test, Staging, and Production using Spring profiles.',
        'Developed reusable DTO layers, MapStruct mappers, centralized exception handling, and structured logging.',
        'Integrated AWS RDS and Amazon S3 for scalable database and document storage with pre-signed URLs.'
      ],
    },
    {
      title: 'Associate Software Intern',
      company: 'MomentumMerge Consultancy Services Pvt. Ltd.',
      location: 'Bengaluru, India',
      period: 'Feb 2025 – July 2025',
      current: false,
      description: 'Trained in Spring Boot, AWS, and Microservices while contributing to production platforms.',
      achievements: [
        'Trained in Spring Boot, AWS, Redux Toolkit, Microservices, and REST API design while contributing to the MomentumJobs production platform.',
        'Worked on backend services, frontend state management, ATS workflows, distributed file storage systems, and cloud deployments.',
        'Gained hands-on experience with enterprise coding standards, layered architecture, system design principles, and production-grade deployments.',
        'Built full-stack features for MomentumJobs using Spring Boot, React (TypeScript), Redux Toolkit, and MySQL.',
        'Designed and delivered the complete ATS module by integrating a Python FastAPI microservice for resume parsing.',
        'Implemented NLP-driven resume scoring pipeline using SentenceTransformers, KeyBERT, and Scikit-learn.',
        'Built multi-environment file storage abstraction: Local filesystem for Dev/Test and Amazon S3 for Production.',
        'Developed an Admin Ticket Management System to track operational issues and user escalations.',
        'Implemented global state management using Redux Toolkit to reduce component coupling.'
      ],
    },
  ];

  return (
    // Reduced padding (py-16) to minimize top/bottom space
    <section id="experience" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Compact Header */}
        <div className="mb-10 flex items-center gap-4">
           <h2 className="text-3xl font-bold text-slate-900">Professional Experience</h2>
           <div className="h-px flex-1 bg-slate-200 mt-2"></div>
        </div>

        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group bg-slate-50/50 rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all duration-300"
            >
              
              {/* Header Row: Title & Date */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm font-medium text-slate-600">
                    <span className="flex items-center gap-1.5 text-blue-600">
                      <Briefcase size={16} />
                      {exp.company}
                    </span>
                    <span className="hidden md:inline text-slate-300">|</span>
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <MapPin size={16} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border shrink-0 w-fit
                  ${exp.current 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm' 
                    : 'bg-white text-slate-600 border-slate-200'}`}>
                  <Calendar size={12} /> {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 italic mb-6 border-l-2 border-blue-200 pl-3">
                {exp.description}
              </p>

              {/* Achievements Grid */}
              <div className="grid md:grid-cols-1 gap-3">
                {exp.achievements.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-blue-400 group-hover:bg-blue-600 transition-colors"></div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}