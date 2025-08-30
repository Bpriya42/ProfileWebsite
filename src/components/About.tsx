import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div 
            variants={cardVariants}
            className="max-w-4xl bg-background/50 backdrop-blur-sm p-8 rounded-lg border border-primary/20 shadow-xl"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-lg leading-relaxed text-text/80">
              Hi, I'm Priya 👋 — a Master's student in Computer Science at UMass Amherst, specializing in Machine Learning and Artificial Intelligence. I love building things that bridge cutting-edge technology with real-world impact, whether it's designing full-stack platforms, scaling cloud systems, or crafting AI pipelines that make life a little easier.
            </p>
            <br />
            <p className="text-lg leading-relaxed text-text/80">
              My journey into tech started with an engineering degree in Brisbane and has since taken me through building secure fintech systems at Deloitte and developing AI-driven platforms at Nevara. Along the way, I've dived into projects like automating clinical SOAP notes and creating VR visualizations for mental health — experiences that taught me how powerful technology can be when designed with empathy for its users.
            </p>
            <br />
            <p className="text-lg leading-relaxed text-text/80">
              Outside of code, I'm endlessly curious and love learning from people as much as I do from textbooks. You'll often find me experimenting with new frameworks, brainstorming product ideas over coffee, or exploring how AI can make healthcare and daily life more human-centered. I'm always excited to collaborate, learn, and create — so if you're as passionate about tech, design, or problem-solving as I am, let's connect and build something impactful together!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
