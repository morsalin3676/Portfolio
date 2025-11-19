import React from 'react'
import { motion } from 'framer-motion'

// React Icons Only
import { 
  SiFlutter, 
  SiDart, 
  SiFirebase, 
  SiHiveBlockchain, 
  SiAndroid, 
  SiApple, 
  SiGithub, 
  SiGit
} from "react-icons/si";

import { FaDatabase, FaNetworkWired, FaProjectDiagram } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="p-12">
      
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1
          className="text-4xl font-extrabold inline-block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </h1>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left Side */}
        <div  className="text-center lg:text-left">
          <p className="text-xl mb-8">
            I specialize in building modern, fast, and scalable mobile applications using Flutter and Dart.
          </p>

          <ul className="text-lg space-y-4">
            <li><strong>Mobile Development:</strong> Flutter, Dart</li>
            <li><strong>State Management:</strong> Provider, Riverpod, GetX, Bloc</li>
            <li><strong>Local Databases:</strong> Sqflite, Hive, Shared Preferences</li>
            <li><strong>Backend & APIs:</strong> REST API, JSON, Dio, HTTP</li>
            <li><strong>Firebase:</strong> Auth, Firestore, Realtime DB, FCM</li>
            <li><strong>UI/UX:</strong> Material Design, Responsive Layout, Custom Widgets</li>
            <li><strong>Version Control:</strong> Git & GitHub</li>
            <li><strong>Tools:</strong> Android Studio, VS Code, Postman</li>
            <li><strong>Deployment:</strong> Play Store, Firebase Hosting and Vercel</li>
          </ul>
        </div>

        {/* Right Side Icons */}
        <div  className="text-center">
          <h3 className="text-3xl font-semibold mb-6">Technologies</h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8">

            {[
              { name: "Flutter", icon: SiFlutter },
              { name: "Dart", icon: SiDart },
              { name: "Firebase", icon: SiFirebase },
              { name: "Android", icon: SiAndroid },
              { name: "iOS", icon: SiApple },
              { name: "REST API", icon: FaNetworkWired },
              { name: "Git", icon: SiGit },
              { name: "GitHub", icon: SiGithub },
              { name: "Hive", icon: SiHiveBlockchain },
              { name: "Sqflite", icon: FaDatabase },
              { name: "Provider", icon: SiFlutter },
              { name: "Bloc", icon: FaProjectDiagram }, // FIXED
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-4 hover:text-violet-600">
                  {React.createElement(tech.icon)}
                </div>

                <p className="text-lg">{tech.name}</p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills;
