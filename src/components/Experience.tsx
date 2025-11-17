import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Backend Engineer",
      location: "San Francisco, CA",
      period: "Jan 2022 - Present",
      duration: "2+ years",
      description: "Leading the backend architecture team, designing and implementing scalable microservices solutions.",
      achievements: [
        "Architected and deployed a distributed microservices platform handling 10M+ requests/day",
        "Reduced API response time by 65% through database optimization and caching strategies",
        "Mentored a team of 5 junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes"
      ],
      technologies: ["Node.js", "Kubernetes", "PostgreSQL", "Redis", "AWS", "Kafka"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      company: "CloudScale Solutions",
      position: "Backend Developer",
      location: "New York, NY",
      period: "Mar 2020 - Dec 2021",
      duration: "1 year 10 months",
      description: "Developed high-performance APIs and managed database infrastructure for enterprise clients.",
      achievements: [
        "Built RESTful APIs serving 50K+ concurrent users with 99.9% uptime",
        "Optimized database queries resulting in 40% faster data retrieval",
        "Implemented OAuth2 authentication system used across 8 different services",
        "Migrated monolithic application to microservices architecture"
      ],
      technologies: ["Python", "Django", "MongoDB", "Docker", "Jenkins", "RabbitMQ"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      company: "DataFlow Systems",
      position: "Junior Backend Developer",
      location: "Boston, MA",
      period: "Jun 2019 - Feb 2020",
      duration: "9 months",
      description: "Worked on data processing pipelines and API development for analytics platform.",
      achievements: [
        "Developed real-time data processing pipeline handling 1M+ events daily",
        "Created automated testing suite improving code coverage to 85%",
        "Collaborated with frontend team to implement GraphQL API",
        "Contributed to open-source projects improving team's development tools"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "Elasticsearch", "AWS Lambda"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      company: "StartupHub Ventures",
      position: "Backend Developer Intern",
      location: "Remote",
      period: "Jan 2019 - May 2019",
      duration: "5 months",
      description: "Assisted in building MVP for a social networking platform, focusing on backend services.",
      achievements: [
        "Built user authentication and authorization system using JWT",
        "Developed REST API endpoints for user management and content delivery",
        "Implemented email notification system using message queues",
        "Participated in agile development and daily standups"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "Redis", "AWS S3"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.gradient} animate-pulse`}></div>
                  <div className={`absolute w-8 h-8 rounded-full bg-gradient-to-r ${exp.gradient} opacity-20 animate-ping`}></div>
                </div>

                {/* Content Card */}
                <div className="md:w-1/2 ml-8 md:ml-0">
                  <div className="group relative bg-slate-800/50 rounded-2xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 backdrop-blur-sm hover:scale-105">
                    {/* Gradient Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-2 mt-2">
                            <Briefcase size={16} className="text-cyan-400" />
                            <p className="text-lg font-semibold text-cyan-400">{exp.company}</p>
                          </div>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} className="text-blue-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-green-400">•</span>
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} className="text-purple-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                          <span className="text-green-400">Key Achievements:</span>
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-400 group/item hover:text-slate-300 transition-colors">
                              <ChevronRight size={16} className="text-cyan-400 flex-shrink-0 mt-0.5 group-hover/item:translate-x-1 transition-transform" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs bg-slate-700/50 text-slate-300 rounded-full border border-slate-600 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20 text-center hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">5+</div>
            <div className="text-slate-400 text-sm mt-1">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20 text-center hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">4</div>
            <div className="text-slate-400 text-sm mt-1">Companies</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20 text-center hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">10+</div>
            <div className="text-slate-400 text-sm mt-1">Major Projects</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/20 text-center hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">15+</div>
            <div className="text-slate-400 text-sm mt-1">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;