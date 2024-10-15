import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const skillsPercentage = [
    { skill: 'HTML', progress: 100 },
    { skill: 'Tailwind CSS', progress: 90 },
    { skill: 'Javascript', progress: 90 },
    { skill: 'Frameworks(ReactJS)', progress: 85 },
    { skill: 'Responsive Design', progress: 90 },
  ];

  const [skills, setSkills] = useState(skillsPercentage);
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSectionOffsetTop = skillsRef.current.offsetTop;
      const scrollY= window.scrollY;

      if (scrollY>= skillsSectionOffsetTop) {
        const updatedSkills = skillsPercentage.map(skill => ({ 
          ...skill,
          percentage:(skill.progress/100) * 100
        }));
        setSkills(updatedSkills);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return() => {
      window.removeEventListener('scroll', handleScroll);
    }
   
  }, []);

  return (
    <div id="skills" ref={skillsRef}>
      <div>
            <h1 className='text-center lg:absolute overline text-[palegreen] font-semibold tracking-[.2rem] translate-y-4'>Skills</h1>
          <div className='translate-y-6'>
            <div className="progress p-12 grid gap-10">
              {skills.map((skill, index) => (
                <div key={index}>
                  <p>{skill.skill}</p>
                  <div className='p-2 bg-[rgb(192,178,178)]'>
                    <div className="border-0 bg-[palegreen]  ease-in-out relative text-center h-7 animate-movePercentage transition-[width] duration-300 ease" style={{width: `${skill.percentage}%` }}>
                      {skill.percentage}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
