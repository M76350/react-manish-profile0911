import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Real State platfrom",
      description: "Built a full-stack Real Estate Lead Management app with MERN (MongoDB, Express.js, React, Node.js), featuring secure authentication, real-time chat, and an admin dashboard for efficient property and lead control..",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHIY_ZFG0CCi4fio5DyV65_P2D7RhO7vfiTg&s",
      technologies: ["React", "Next js", "Tailwind css", "Shadcn", "Node.js", "MongoDB",],
      liveUrl: "https://homelead.in/",
      githubUrl: "https://github.com/M76350"
    },
    {
      id: 2,
      title: "Pizza Bookung & Slot",
      description: "Created a visually engaging Mehandipur Balaji Temple webpage using HTML, CSS, Bootstrap, and WOW.js animations. Features responsive design, immersive storytelling, and dynamic effects that celebrate the temple’s spiritual ambiance.",
      image: "	https://m76350.github.io/pizza-heart-web/images/f2.png",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      liveUrl: "https://m76350.github.io/pizza-heart-web/",
      githubUrl: "https://github.com/M76350/pizza-heart-web"

    },
    {
      id: 3,
      title: "Delhuan dairy & Animal care",
      description: "Developed a responsive Delhuan Dairy website using HTML, CSS, and Bootstrap, enhanced with WOW.js animations. The site offers smooth navigation, vibrant dairy visuals, and engaging animation effects that enhance user interaction",
      image: "https://delhuan-dairy.netlify.app/assets/hero-dairy-3-DXCLnQ35.jpg",
      technologies: ["Flutter", "dart", "material", "getx", "riverpord"],
      liveUrl: "https://delhuan-dairy.netlify.app/",
      githubUrl: "https://github.com/M76350/delhuan-dairy"
    },
    {
      id: 4,
      title: "Delhuan dairy App",
      description: "Built the Delhuan Dairy app with Flutter (Dart), featuring a responsive UI, seamless dairy product browsing, intuitive ordering, and engaging animations—offering users a smooth and modern mobile experience.",
      image: "https://i.ytimg.com/vi/KVqtmUjuTxM/maxresdefault.jpg",
      technologies: ["React", "Firebase", "Material-UI", "Firebase", "Cloud Functions"],
      liveUrl: "#",
      githubUrl: "https://github.com/M76350/delhuan-dairyapp"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website with smooth animations, dark mode toggle, and contact form integration.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "EmailJS"],
      liveUrl: "https://manish-code-dinara.vercel.app/",
      githubUrl: "https://github.com/M76350/manish-code-dinara"
    },
    {
      id: 6,
      title: " World Atlas & country",
      description: "  Developed a React app that fetches and displays global flags via API integration. Users can browse country flags, view detailed information including capitals, and interact with a responsive, intuitive interface",
      image: "https://world-atlas-taupe.vercel.app/image/worldimage.png",
      technologies: [
        "React JS",
        "Core CSS",
        "Custom CSS",
        "API Integration",
        "Hooks Implementation"
      ],
      liveUrl: "https://world-atlas-taupe.vercel.app/",
      githubUrl: "https://github.com/M76350/worldAtlas"
    },
    {
      id: 7,
      title: " Solar Energy panel",
      description: "  Created a responsive Delhuan Dairy website with Bootstrap and WOW/AOS animations. Visually engaging, interactive, and mobile-friendly—showcasing dairy products with smooth scroll-triggered effects to enhance user experience.",
      image: "https://m76350.github.io/solar-energy/img/resources/Mask%20Group%201@2x.png",
      technologies: [
        "Html",
        "Core CSS",
        "Bootstrap",
        "Aos animation",
        " wow Animation"
      ],
      liveUrl: "https://m76350.github.io/solar-energy/",
      githubUrl: "https://github.com/M76350/solar-energy"
    },
    {
      id: 8,
      title: " Netlify web modal",
      description: "   Created a responsive Delhuan Dairy website with Bootstrap and WOW/AOS animations. Visually engaging, interactive, and mobile-friendly—showcasing dairy products with smooth scroll-triggered effects to enhance user experience.",
      image: "https://m76350.github.io/web-net-fl-web/src/netflic-hero-bg.png",
      technologies: [
        "Html",
        "Core CSS",
        "Bootstrap",
        "Aos animation",
        " wow Animation"
      ],
      liveUrl: "https://m76350.github.io/web-net-fl-web/",
      githubUrl: "https://github.com/M76350/web-net-fl-web"
    },
    {
      id: 8,
      title: " Doctor appoinmentvisit",
      description: "  I created a Doctor Appointment Visit Website using HTML, CSS, and JavaScript, designed to help patients easily schedule medical consultations online. The website features a user-friendly interface, responsive design, and interactive booking forms that ensure a smooth appointment process across devices.",
      image: "https://m76350.github.io/doctorwebsite/image/doc-header-img.png",
      technologies: [
        "Html",
        "Core CSS",
        "Bootstrap",
        "Aos animation"

      ],
      liveUrl: "https://m76350.github.io/doctorwebsite/",
      githubUrl: "https://github.com/M76350/doctorwebsite"
    }
    , {
      id: 9,
      title: " Doctor appoinmentvisit",
      description: "  I created a Doctor Appointment Visit Website using Svelte, CSS, and JavaScript, designed to help patients easily schedule medical consultations online. The website features a user-friendly interface, responsive design, and interactive booking forms that ensure a smooth appointment process across devices.",
      image: "https://assets.awwwards.com/awards/images/2025/02/Monolith-Thumb.jpg",
      technologies: [
        "jsx",
        "Core CSS",
        "Svelte",
        "Fade animation"

      ],
      liveUrl: "https://awwardweb.vercel.app/",
      githubUrl: "https://github.com/M76350/Awwardweb"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects. Each project represents
            a unique challenge and demonstrates different aspects of my development skills.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group card-gradient rounded-2xl overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                  <Button variant="hero" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="hero-outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button variant="hero" size="sm" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;