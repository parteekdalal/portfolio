function Skills () {
  const skillCategories = {
    "Data Science": [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Scikit Learn",
      "MySQL",
      "PostgresSQL",
      "Data Visualization",
      "Statistical Analysis",
      "Feature Engineering"

    ],
    "Full Stack Web": [
      "JavaScript",
      "React",
      "HTML/CSS",
      "Node.js",
      "FastAPI",
      "Pydantic",
      "REST APIs"
    ],
    "More Tools":[
      "Arch Linux",
      "Git",
      "GitHub",
      "Fish Shell",
      "Docker",
      "Hyprland",
      "VS Code",
      "NeoVim",
    ]
  };

  return (
    <section id="skills-page" className="page">
      <h2 className="title">Deeper in my mind...</h2>
      
      <div id="skills-grid">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="skill-card">
            <div className="category">
              <h3 >{category}</h3>
            </div>
            <div className="skill-list">
              <div className="skill-track">
                {[false, true].map((isDuplicate) => (
                  <div
                    key={isDuplicate ? "duplicate" : "original"}
                    className="skill-sequence"
                    aria-hidden={isDuplicate || undefined}
                  >
                    {skills.map((skill) => (
                      <span key={skill} className="skill-item">{skill}</span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;