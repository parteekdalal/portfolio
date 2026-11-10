function About () {
  return (
    <section id="about-page" className="page">
  <svg viewBox="0 0 24 24" className="down-arrow" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>      <h2 className="title">More <span className="squeezed">(glorious information)</span> about me</h2>
      <div className="about-content">
        <p>
          I specialize in bridging the gap between raw data and accessible web interfaces. 
          Currently pursuing my BCA, I thrive in environments where I can build end-to-end 
          applications—from designing relational databases and APIs to writing clean, 
          component-driven React frontends. 
        </p>
        <p>
          When I'm not coding or analyzing datasets, you can usually find me tinkering 
          with my Arch Linux setup or writing custom shell scripts to optimize my workflow.
        </p>
      </div>
    </section>
  );
};

export default About;