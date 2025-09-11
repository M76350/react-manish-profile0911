import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TypewriterText from '@/components/TypewriterText';
import Projects from './Projects';
import Contact from './Contact';
import Experience from './Experience';
import About from './About';
import heroImage from '@/assets/hero-image.jpg';

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
    <div className="min-h-screen overflow-x-hidden  ">
      {/* Background Video */}
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/10" />

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-4 max-w-7xl mx-auto w-full">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Hi, I'm{' '}
                <span className="text-gradient">
                    <TypewriterText 
                  words={['Manish']}  />  Kumar
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-xl md:text-3xl lg:text-4xl text-muted-foreground mb-8">
                <TypewriterText
                  words={['Full-Stack Developer', 'React Specialist', 'UI/UX Designer', 'Problem Solver']}
                  className="text-gradient font-semibold"
                />
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl lg:max-w-none leading-relaxed"
            >
              Passionate about creating exceptional digital experiences with modern technologies.
              Specializing in React, Node.js, and cutting-edge web development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
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

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2  mt-[100px]"
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Manish Kumar - Full Stack Developer"
                className="hero-image w-64 h-64 md:w-0 md:h-0 lg:w-[500px] lg:h-[500px] rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse"></div>
            </div>
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