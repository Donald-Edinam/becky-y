import { Github, Linkedin, Mail, ChevronDown, Sparkles, Award } from 'lucide-react';
import Image from './assets/image.png'
import { useState, useEffect, useRef } from 'react';

// Import certificate images (you'll need to add these to your project)
import AiCECertificate from './assets/aice-certificate.jpg'
import VACertificate from './assets/va-certificate.jpg'
import PitchVideo from './assets/pitch-video.mp4' 

function App() {
  const [videoSectionVisible, setVideoSectionVisible] = useState(false);
  const videoSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVideoSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }

    return () => {
      if (videoSectionRef.current) {
        observer.unobserve(videoSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      {/* Decorative Circles */}
      <div className="circle-decoration top-20 left-20 animate-float" style={{ animationDelay: '0s' }} />
      <div className="circle-decoration top-40 right-20 animate-float" style={{ animationDelay: '2s' }} />
      <div className="circle-decoration bottom-20 left-1/3 animate-float" style={{ animationDelay: '4s' }} />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <div className="text-center mb-16">
            {/* <div className="mb-4 text-amber-400 font-display">
              {new Date().getFullYear()}
            </div> */}
            <h1 className="text-6xl font-display font-bold text-white mb-4 animate-fade-in">
              Rebekah Adjoah Mensah
            </h1>
            {/* <h2 className="text-4xl font-display text-white mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              
            </h2> */}
            <p className="text-xl text-purple-200 mb-8" style={{ animationDelay: '0.4s' }}>
              Aspiring Software Engineer | ALX AiCE Graduate
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-purple-300" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-purple-100">
              <img
                src={Image}
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold text-purple-900 mb-6">Hello! <Sparkles className="inline-block w-6 h-6 text-amber-400" /></h2>
              <h1 className="text-2xl font-display font-bold text-purple-700 mb-4 animate-fade-in">
                I'm Rebekah Adjoah Mensah
              </h1>
              <p className="text-purple-800 leading-relaxed mb-6">
                I'm a recent graduate of Apam Senior High School with a strong foundation in General Science
                and a growing passion for technology. Through my completion of the ALX AiCE and Virtual
                Assistance programs, I've developed valuable skills in problem-solving and technical
                communication.
              </p>
              <p className="text-purple-800 leading-relaxed">
                Currently pursuing the ALX Pathway course, I'm working towards my goal of becoming a
                software developer. I'm passionate about combining my analytical mindset from science
                with my love for coding to create innovative solutions. As a woman in tech, I'm committed
                to inspiring others to pursue careers in this field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section ref={videoSectionRef} className="py-20 bg-purple-800 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-white mb-12 text-center">Featured Elevator Pitch</h2>
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl mx-auto max-w-3xl">
            {videoSectionVisible && (
              <iframe
                className="w-full h-full"
                src={PitchVideo}
                title="Rebekah Adjoah Mensah - Featured Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div className="text-center mt-6">
            <p className="text-purple-200">Watch my introduction and showcase video</p>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-purple-900 mb-12 text-center">Certificates & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "ALX AiCE",
                date: "March 2023",
                issuer: "ALX Africa",
                description: "AI Career Essentials certification covering fundamentals of artificial intelligence and its applications.",
                image: AiCECertificate
              },
              {
                title: "Virtual Assistance",
                date: "June 2023",
                issuer: "ALX Africa",
                description: "Professional certification in virtual assistance and remote collaboration tools.",
                image: VACertificate
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={cert.image || "/api/placeholder/400/200"} 
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-amber-400 mr-2" />
                    <h3 className="text-xl font-display font-semibold text-purple-900">{cert.title}</h3>
                  </div>
                  <p className="text-purple-700 text-sm mb-3">Issued by {cert.issuer} • {cert.date}</p>
                  <p className="text-purple-800">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="text-center mt-12">
            <a href="#" className="px-6 py-3 bg-purple-900 text-white rounded-full hover:bg-purple-800 transition-colors inline-flex items-center">
              <span>View All Credentials</span>
              <ChevronDown className="ml-2 w-4 h-4 transform rotate-270" />
            </a>
          </div> */}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-purple-900 mb-12 text-center">Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Software Development', 'Problem Solving', 'Technical Communication',
              'Virtual Assistance', 'Team Collaboration', 'Continuous Learning'].map((skill) => (
                <div key={skill} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <span className="text-purple-800">{skill}</span>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-purple-800" id="portfolio">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-white mb-12 text-center">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="#" className="block group">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all">
                <div className="p-6">
                  <h3 className="text-2xl font-display font-semibold mb-2 text-amber-400">
                    Phase 2 Project
                  </h3>
                  <p className="text-purple-200 mb-4">
                    Team collaboration project showcasing problem-solving and technical skills.
                  </p>
                  <div className="flex items-center text-amber-400 group-hover:text-amber-300 transition-colors">
                    <a href='https://youtu.be/DGBCVT2oVI0' className="mr-2">
                    View Project
                    </a>
                    <ChevronDown className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="block group">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all">
                <div className="p-6">
                  <h3 className="text-2xl font-display font-semibold mb-2 text-amber-400">
                    Elevator Pitch
                  </h3>
                  <p className="text-purple-200 mb-4">
                    Hi, I'm Rebekah Adjoah Mensah, a tech enthusiast with a strong foundation in virtual assistance and AI, certified by ALX AI Career Essentials. I'm currently pursuing a software engineering course to build scalable and innovative solutions. Alongside my technical expertise, I have hands-on experience in childcare and teaching, which has honed my patience, communication, and problem-solving skills.
                  </p>
                  <p className="text-purple-200 mb-4">
                    Known for my adaptability, creativity, and leadership, I thrive in dynamic environments and enjoy finding innovative ways to tackle challenges. This unique blend of technical knowledge, interpersonal abilities, and notable traits allows me to create impactful solutions while effectively collaborating with diverse teams.
                  </p>
                  <div className="text-purple-200 mb-4">
                    <p className="mb-2">Email:  </p>
                    <p>Contact: </p>
                  </div>
                  <div className="flex items-center text-amber-400 group-hover:text-amber-300 transition-colors">
                    <span className="mr-2">Contact Me</span>
                    <ChevronDown className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-purple-900 mb-8">Let's Talk!</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:rebekahadjoahmensah@gmail.com " className="px-6 py-3 bg-purple-900 text-white rounded-full hover:bg-purple-800 transition-colors">
              Send Email
            </a>
            <a href="#" className="px-6 py-3 bg-amber-400 text-purple-900 rounded-full hover:bg-amber-300 transition-colors">
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-purple-200">
          <p>© 2025 Rebekah Adjoah Mensah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;