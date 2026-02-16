

import { CheckCircle2, User, Globe, Code2, Zap } from 'lucide-react';

export default function About() {
  const strengths = [
    "Strong ownership mindset with ability to design and deliver end-to-end production systems",
    "Excellent debugging, optimization, performance tuning, and production issue resolution skills",
    "Experience working in Agile/Scrum environments with cross-functional engineering teams",
    "Fast learner with strong system thinking, architectural reasoning, and backend-first mindset"
  ];

  return (
    // Reduced padding from py-24 to py-12
    <section id="about" className="py-12 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 skew-x-12 translate-x-20 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header - Reduced bottom margin from mb-16 to mb-10 */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full opacity-80"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Left Column: Narrative (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800 flex items-center gap-2">
              <User className="text-blue-600" size={24} />
              Professional Summary
            </h3>
            
            <div className="prose prose-lg text-slate-600 leading-relaxed space-y-4">
              <p>
                I am an Associate Software Engineer with <strong>1+ years of hands-on experience</strong> designing and delivering 
                scalable, distributed backend systems and enterprise-grade full-stack applications. My core stack includes 
                <span className="text-slate-900 font-medium bg-blue-50 px-1 rounded mx-1">Java Spring Boot</span>, 
                <span className="text-slate-900 font-medium bg-blue-50 px-1 rounded mx-1">Microservices</span>, 
                <span className="text-slate-900 font-medium bg-blue-50 px-1 rounded mx-1">AWS</span>, and 
                <span className="text-slate-900 font-medium bg-blue-50 px-1 rounded mx-1">React (TypeScript)</span>.
              </p>
              <p>
                My expertise lies in building specialized <strong>ATS platforms</strong>, designing high-throughput REST APIs, 
                and implementing secure JWT-based architectures. I have a deep interest in <strong>System Design</strong> and 
                cloud-native deployments, ensuring applications are not just functional but also resilient and scalable.
              </p>
              <p>
                With a strong foundation in <strong>Data Structures and Algorithms</strong>, I possess a backend-first mindset 
                driven by performance optimization. I thrive in solving complex engineering challenges and shipping 
                fault-tolerant systems that drive business value.
              </p>
            </div>

            {/* Quick Info Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                <div>
                  <p className="text-sm text-slate-500 mb-1">Experience</p>
                  <p className="font-bold text-slate-900">1+ Years</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Focus</p>
                  <p className="font-bold text-slate-900">Backend & Cloud</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Location</p>
                  <p className="font-bold text-slate-900 flex items-center gap-1">
                    Bengaluru <Globe size={14} className="text-blue-500"/>
                  </p>
                </div>
            </div>
          </div>

          {/* Right Column: Strengths Card (1/3 width) */}
          <div className="lg:col-span-1">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm sticky top-12">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Zap className="text-amber-500 fill-amber-500" size={20} />
                Core Strengths
              </h3>
              
              <div className="space-y-4">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex gap-3 items-start group">
                    <div className="mt-1 min-w-[20px]">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed group-hover:text-slate-900 transition-colors">
                      {strength}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200">
                  <div className="bg-blue-100 p-2 rounded-md text-blue-600">
                    <Code2 size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Primary Stack</p>
                    <p className="text-sm font-bold text-slate-900">Java • Spring Boot • React • AWS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}