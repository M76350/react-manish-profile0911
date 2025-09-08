import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Projects from './Projects';
import Contact from './Contact';
import Experience from './Experience';
import About from './About';

const Home = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Manish_Kumar_Resume.pdf';
    link.click();
  };

  const features = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expert in React, Node.js, and modern web technologies"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user experiences"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Building fast, scalable, and efficient applications"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/10" />
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="text-gradient">
                Manish Kumar
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-4xl text-muted-foreground mb-8">
              Full-Stack Web Developer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating exceptional digital experiences with modern technologies. 
            Specializing in React, Node.js, and cutting-edge web development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/projects">
              <Button variant="hero" size="lg" className="group">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Button 
              variant="hero-outline" 
              size="lg" 
              onClick={handleDownloadResume}
              className="group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What I Do</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I specialize in building modern, scalable web applications with attention to detail and performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-gradient p-8 rounded-2xl text-center group"
              >
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Projects />
      <Experience />
      <About />
      <Contact />
    </div>
  );
};

export default Home;