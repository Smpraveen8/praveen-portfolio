export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend & APIs',
      skills: [
        'Java',
        'Spring Boot',
        'Spring MVC',
        'Spring Security',
        'REST APIs',
        'Microservices',
        'Python (FastAPI)',
        'WebSocket',
        'JWT',
        'RBAC',
      ],
    },
    {
      title: 'Frontend',
      skills: [
        'React.js',
        'TypeScript',
        'JavaScript',
        'Redux Toolkit',
        'Axios',
        'HTML/CSS',
        'Tailwind CSS',
      ],
    },
    {
      title: 'AI & NLP',
      skills: [
        'SentenceTransformers',
        'KeyBERT',
        'Scikit-learn',
        'PyMuPDF',
        'Semantic Similarity',
        'Pydantic',
        'Email-Validator',
      ],
    },
    {
      title: 'Databases',
      skills: [
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Schema Design',
        'Indexing',
        'Query Optimization',
        'ACID Transactions',
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        'AWS EC2',
        'AWS RDS',
        'AWS S3',
        'Docker',
        'Linux',
        'CI/CD',
        'Environment Config',
      ],
    },
    {
      title: 'Architecture & Design',
      skills: [
        'Microservices Architecture',
        'Distributed Systems',
        'Event-Driven Systems',
        'Outbox Pattern',
        'SOLID Principles',
        'REST API Design',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-4 border-b-2 border-blue-600 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-md text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">
            Development Practices
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Agile/Scrum',
              'Code Reviews',
              'API Testing (Postman)',
              'Unit Testing',
              'Integration Testing',
              'Git Version Control',
              'CI/CD Pipelines',
              'Documentation',
            ].map((practice, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium"
              >
                {practice}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
