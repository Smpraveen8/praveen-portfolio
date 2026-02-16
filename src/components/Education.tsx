import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-10 flex items-center gap-4">
           <h2 className="text-3xl font-bold text-slate-900">Education & Certifications</h2>
           <div className="h-px flex-1 bg-slate-200 mt-1"></div>
        </div>

        <div className="space-y-8">
          
          {/* Main Education Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* 1. Bachelor's Degree */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 transition-colors flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white text-blue-600 rounded-xl shadow-sm border border-slate-100">
                  <GraduationCap size={24} />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-slate-600 text-xs font-bold rounded-lg border border-slate-100 shadow-sm">
                  <Calendar size={12} /> 2020 – 2024
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-1">Bachelor of Engineering</h3>
              <p className="text-blue-600 font-medium text-sm mb-4">Electronics & Communication</p>
              
              <div className="mt-auto pt-4 border-t border-slate-200/60">
                <p className="text-slate-700 font-medium text-sm">KPR Institute of Engineering and Technology</p>
                <p className="text-slate-500 text-xs mt-1">Coimbatore • CGPA: 7.59</p>
              </div>
            </div>

            {/* 2. Certification */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-cyan-300 transition-colors flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white text-cyan-600 rounded-xl shadow-sm border border-slate-100">
                  <Award size={24} />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-slate-600 text-xs font-bold rounded-lg border border-slate-100 shadow-sm">
                  <Calendar size={12} /> May 2024 – Dec 2024
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-1">Full Stack Web Developer</h3>
              <p className="text-cyan-600 font-medium text-sm mb-4">Certification Course</p>
              
              <div className="mt-auto pt-4 border-t border-slate-200/60">
                <p className="text-slate-700 font-medium text-sm">Tap Academy</p>
                <p className="text-slate-500 text-xs mt-1">Java Full Stack Development</p>
              </div>
            </div>

          </div>

          {/* 3. Schooling (Compact Row) */}
          <div className="grid md:grid-cols-2 gap-6">
             {/* Class XII */}
             <div className="flex items-center justify-between p-5 rounded-xl border border-slate-100 bg-white hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-4">
                   <div className="p-2 bg-slate-50 text-slate-400 rounded-lg">
                     <BookOpen size={18} />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 text-sm">Class XII (HSC)</h4>
                     <p className="text-xs text-slate-500 mt-0.5">Veveaham Hr Sec School • 2020</p>
                   </div>
                </div>
                <span className="text-sm font-bold text-slate-900 bg-slate-50 px-3 py-1 rounded-md border border-slate-100">76.3%</span>
             </div>

             {/* Class X */}
             <div className="flex items-center justify-between p-5 rounded-xl border border-slate-100 bg-white hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-4">
                   <div className="p-2 bg-slate-50 text-slate-400 rounded-lg">
                     <BookOpen size={18} />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 text-sm">Class X (SSLC)</h4>
                     <p className="text-xs text-slate-500 mt-0.5">Veveaham Hr Sec School • 2018</p>
                   </div>
                </div>
                <span className="text-sm font-bold text-slate-900 bg-slate-50 px-3 py-1 rounded-md border border-slate-100">81.4%</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}