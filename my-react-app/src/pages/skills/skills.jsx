
import React, { useState, useEffect } from 'react';
import './skills.css';

const Skills = () => {
  const skillsPercentage = [
    { skill: 'HTML', progress: 80 },
    { skill: 'CSS', progress: 70 },
    { skill: 'Javascript', progress: 90 },
    { skill: 'Frameworks(ReactJS)', progress: 85 },
    { skill: 'Responsive Design', progress: 75 },
  ];

  const [skills, setSkills] = useState(skillsPercentage);

  useEffect(() => {
    const updatedSkills = skillsPercentage.map(skill => ({
      ...skill,
      percentage: (skill.progress / 100) * 100,
    }));
    setSkills(updatedSkills);
  }, []);

  return (
    <div id="skills">
      <div className="skills-page relative">
        <div className="flex justify-left">
          <div className="qualities ">
            <div>S</div>
            <div>K</div>
            <div>I</div>
            <div>L</div>
            <div>L</div>
            <div>S</div>
          </div>
          <div className="p-4">
            <h4 className="note text-pink-400">
              Well, as a FrontEnd Dev
              <hr />
              <p className="notes">I have skills and you are definitely eager to know.</p>
            </h4>
            <div className="progress p-12 grid gap-10">
              {skills.map((skill, index) => (
                <div key={index}>
                  <p>{skill.skill}</p>
                  <div className='box11'>
                    <div className="box1 border-0 bg-pink-400" style={{ width: `${skill.percentage}%` }}>
                      {skill.percentage}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
