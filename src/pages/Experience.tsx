import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description: [
        "Led development of scalable web applications serving 100k+ users",
        "Architected microservices infrastructure reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines improving development workflow"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      company: "Digital Innovations Inc",
      location: "New York, NY",
      duration: "2020 - 2022",
      description: [
        "Developed and maintained 15+ client websites and web applications",
        "Collaborated with design team to implement pixel-perfect UIs",
        "Optimized application performance resulting in 40% faster load times",
        "Integrated third-party APIs and payment processing systems"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Stripe", "Figma"]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "StartupHub",
      location: "Austin, TX",
      duration: "2019 - 2020",
      description: [
        "Built responsive web interfaces for early-stage startups",
        "Implemented modern JavaScript frameworks and libraries",
        "Worked closely with UX designers to enhance user experience",
        "Participated in agile development cycles and sprint planning"
      ],
      technologies: ["React", "Vue.js", "SASS", "Webpack", "Jest"]
    },
    {
      id: 4,
      title: "Junior Web Developer",
      company: "WebCraft Agency",
      location: "Remote",
      duration: "2018 - 2019",
      description: [
        "Developed custom WordPress themes and plugins",
        "Created responsive websites using HTML, CSS, and JavaScript",
        "Assisted in SEO optimization and performance improvements",
        "Provided technical support and maintenance for client websites"
      ],
      technologies: ["WordPress", "PHP", "jQuery", "Bootstrap", "MySQL"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey in web development, from junior developer to senior roles, 
            building innovative solutions for diverse clients and companies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex items-start space-x-8"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center relative z-10">
                  <Calendar className="h-8 w-8 text-white" />
                </div>

                {/* Experience content */}
                <div className="flex-1 card-gradient p-8 rounded-2xl">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <span className="font-semibold text-primary">{exp.company}</span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 lg:mt-0">
                      <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card-gradient p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-muted-foreground mb-6">
              Interested in my experience? I'm always open to discussing new opportunities.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium"
            >
              Get in touch
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;