import { Download, Calendar, ArrowRight, MapPin } from 'lucide-react';

export default function Timeline() {
  const timelineData = [
    {
      id: 1,
      title: 'Bachelor of Engineering',
      role: 'Electronics & Communication',
      org: 'KPR Institute of Engineering and Technology',
      location: 'Coimbatore',
      date: 'May 2020 – May 2024',
      logo: '/KPRIET.webp',
      link: null
    },
    {
      id: 2,
      title: 'Full Stack Certification',
      role: 'Java Full Stack Development',
      org: 'Tap Academy',
      location: 'Bengaluru',
      date: 'May 2024 – Nov 2024',
      logo: '/tap-academy.avif',
      link: { text: 'View Certificate', url: '/Tap Academy Certificate.pdf' }
    },
    {
      id: 3,
      title: 'Associate Software Intern',
      role: 'Backend & Frontend',
      org: 'MomentumMerge Consultancy Services Pvt. Ltd',
      location: 'Bengaluru',
      date: 'Feb 2025 – July 2025',
      logo: '/Company Logo.png',
      link: null
    },
    {
      id: 4,
      title: 'Associate Software Engineer',
      role: 'Full Stack Engineer',
      org: 'MomentumMerge Consultancy Services Pvt. Ltd',
      location: 'Bengaluru',
      date: 'July 2025 – Present',
      logo: '/Company Logo.png',
      link: null
    }
  ];

  return (
    <section id="timeline" className="pt-32 pb-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-2xl font-bold text-slate-900">Professional Journey</h2>
          <div className="h-px flex-1 bg-slate-300"></div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative pb-4">
          {/* Connecting Line (Behind) */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-slate-200 rounded-full hidden md:block"></div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-4 overflow-x-auto pb-6 snap-x">
            {timelineData.map((item, index) => (
              <div key={item.id} className="relative flex-shrink-0 w-full md:w-1/4 snap-start group px-2">
                
                {/* 1. Icon / Node */}
                <div className="flex items-center mb-6 relative justify-center md:justify-start">
                  {/* Mobile Vertical Line */}
                  <div className="absolute left-1/2 top-10 bottom-[-40px] w-0.5 bg-slate-200 md:hidden last:hidden transform -translate-x-1/2"></div>
                  
                  <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full border-4 border-slate-100 shadow-sm flex items-center justify-center group-hover:border-blue-200 transition-colors">
                    <img 
                      src={item.logo} 
                      alt={item.org} 
                      className="w-full h-full object-contain p-1.5 rounded-full"
                    />
                  </div>
                  
                  {/* Arrow for flow (Desktop only) */}
                  {index !== timelineData.length - 1 && (
                    <div className="hidden md:flex absolute left-16 right-0 top-8 h-0.5 bg-blue-100 z-0 items-center">
                      <div className="absolute right-1/2 text-blue-300">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Content Card */}
                {/* Removed 'h-full' to let height be natural. Added 'min-h-[220px]' for consistency without huge gaps. */}
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all text-center md:text-left flex flex-col min-h-[200px]">
                  
                  <div className="flex justify-center md:justify-start mb-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] md:text-xs font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded-md border border-blue-100">
                      <Calendar size={12} /> {item.date}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-slate-900 text-sm md:text-base mb-1 line-clamp-2">{item.title}</h3>
                  <p className="text-xs font-semibold text-slate-500 mb-1">{item.role}</p>
                  <p className="text-xs text-slate-400 mb-3 leading-snug line-clamp-2">{item.org}</p>
                  
                  {/* Pushes content to bottom naturally */}
                  <div className="mt-auto">
                    <div className="flex justify-center md:justify-start items-center gap-1 text-xs text-slate-500 font-medium mb-3">
                      <MapPin size={12} className="text-slate-400" />
                      {item.location}
                    </div>
                    
                    {item.link && (
                      <div className="flex justify-center md:justify-start pt-3 border-t border-slate-100">
                        <a 
                          href={item.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <Download size={12} /> {item.link.text}
                        </a>
                      </div>
                    )}
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}