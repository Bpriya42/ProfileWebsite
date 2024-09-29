// import React from 'react';
// import './skills.css';
// import { FaPython, FaJsSquare, FaDatabase, FaReact, FaNode, FaGitAlt, FaDocker, FaJava, FaBootstrap, FaUikit } from 'react-icons/fa';
// import { SiCplusplus, SiHtml5, SiCss3, SiFlask, SiBootstrap, SiRedux, SiFigma, SiLinux, SiGooglecloud } from 'react-icons/si';

// const skills = [
//   { name: 'Python', icon: <FaPython size={40} />, color: '#3776AB' },
//   { name: 'JavaScript', icon: <FaJsSquare size={40} />, color: '#F7DF1E' },
//   { name: 'SQL', icon: <FaDatabase size={40} />, color: '#00618A' },
//   { name: 'C++', icon: <SiCplusplus size={40} />, color: '#00599C' },
//   { name: 'Java', icon: <FaJava size={40} />, color: '#1572B6' },
//   { name: 'HTML', icon: <SiHtml5 size={40} />, color: '#E34F26' },
//   { name: 'CSS', icon: <SiCss3 size={40} />, color: '#1572B6' },
//   { name: 'React.js', icon: <FaReact size={40} />, color: '#61DAFB' },
//   { name: 'Node.js', icon: <FaNode size={40} />, color: '#339933' },
//   { name: 'Flask', icon: <SiFlask size={40} />, color: '#000000' },
//   { name: 'MaterialUI', icon: <FaUikit size={40} />, color: '#1572B6' },
//   { name: 'Bootstrap', icon: <SiBootstrap size={40} />, color: '#7952B3' },
//   { name: 'Figma', icon: <SiFigma size={40} />, color: '#F24E1E' },
//   { name: 'Redux', icon: <SiRedux size={40} />, color: '#764ABC' },
//   { name: 'Git', icon: <FaGitAlt size={40} />, color: '#F05032' },
//   { name: 'Docker', icon: <FaDocker size={40} />, color: '#2496ED' },
//   { name: 'Google Cloud', icon: <SiGooglecloud size={40} />, color: '#4285F4' },
// ];

// const Skills = () => {
//   return (
//     <div className="skills-container">
//       <div className="skills-row">
//         {skills.slice(0, 10).map((skill, index) => (
//           <div key={index} className="skill-item">
//             <div className="skill-icon" style={{ color: skill.color }}>
//               {skill.icon}
//               <span className="skill-name">{skill.name}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="skills-row second-row">
//         {skills.slice(10).map((skill, index) => (
//           <div key={index} className="skill-item second-row-item">
//             <div className="skill-icon" style={{ color: skill.color }}>
//               {skill.icon}
//               <span className="skill-name">{skill.name}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React from 'react';
import './skills.css';
import { FaPython, FaJsSquare, FaDatabase, FaReact, FaNode, FaGitAlt, FaDocker, FaJava, FaUikit } from 'react-icons/fa';
import { SiCplusplus, SiHtml5, SiCss3, SiFlask, SiBootstrap, SiRedux, SiFigma, SiGooglecloud } from 'react-icons/si';
import { Typography } from '@mui/material';

const skills = [
  { name: 'Python', icon: <FaPython size={40} />, color: '#3776AB' },
  { name: 'JavaScript', icon: <FaJsSquare size={40} />, color: '#F7DF1E' },
  { name: 'SQL', icon: <FaDatabase size={40} />, color: '#00618A' },
  { name: 'C++', icon: <SiCplusplus size={40} />, color: '#00599C' },
  { name: 'Java', icon: <FaJava size={40} />, color: '#1572B6' },
  { name: 'HTML', icon: <SiHtml5 size={40} />, color: '#E34F26' },
  { name: 'CSS', icon: <SiCss3 size={40} />, color: '#1572B6' },
  { name: 'React.js', icon: <FaReact size={40} />, color: '#61DAFB' },
  { name: 'Node.js', icon: <FaNode size={40} />, color: '#339933' },
  { name: 'Flask', icon: <SiFlask size={40} />, color: '#000000' },
  { name: 'Material UI', icon: <FaUikit size={40} />, color: '#1572B6' },
  { name: 'Bootstrap', icon: <SiBootstrap size={40} />, color: '#7952B3' },
  { name: 'Figma', icon: <SiFigma size={40} />, color: '#F24E1E' },
  { name: 'Redux', icon: <SiRedux size={40} />, color: '#764ABC' },
  { name: 'Git', icon: <FaGitAlt size={40} />, color: '#F05032' },
  { name: 'Docker', icon: <FaDocker size={40} />, color: '#2496ED' },
  { name: 'Google Cloud', icon: <SiGooglecloud size={40} />, color: '#4285F4' },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <Typography variant="h4">Skills</Typography>
      <div className="skills-container">
        <div className="skills-row">
          {skills.slice(0, 10).map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
                <span className="skill-name">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="skills-row second-row">
          {skills.slice(10).map((skill, index) => (
            <div key={index} className="skill-item second-row-item">
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
                <span className="skill-name">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
