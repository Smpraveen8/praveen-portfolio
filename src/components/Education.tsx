import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Education & Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-slate-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Bachelor of Engineering
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-2">
                  Electronics and Communication Engineering
                </p>
                <p className="text-slate-700 font-medium mb-2">
                  KPR Institute of Engineering and Technology, Coimbatore
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-slate-600 font-medium">2020 – 2024</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">
                    CGPA: 7.59
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-slate-200">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-cyan-100 p-3 rounded-lg">
                <Award className="w-8 h-8 text-cyan-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Certifications
                </h3>
                <div className="space-y-4 mt-4">
                  <div className="border-l-4 border-cyan-600 pl-4">
                    <p className="text-lg font-semibold text-slate-800">
                      Certified Full Stack Web Developer
                    </p>
                    <p className="text-cyan-600 font-medium">Tap Academy</p>
                    <p className="text-slate-600 text-sm mt-1">May 2024 – Dec 2024</p>
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
