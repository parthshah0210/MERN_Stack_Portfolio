export const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpeg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h3>A Little About Me</h3>
              <p>Hi, I am Parth Shah, a 26 years old Student living in Piscataway, New Jersey. I am pursuing MS in IT managment course at Cumberland University, USA. I am also a Dev-Ops Engineer. In other words, pretty good at searching StackOverflow. I have done Web Design and Development from Conestoga College,Canada. When I am not studying, I do DJ. I live and breathe devops every day.</p>
              <h3>I build value by design.</h3>
              <div className="list-style">
                <div className="col-xs-12">
                  <ul>
                    <li>I strive to create elegant solutions that surprise and delight users while keeping complex technical dependencies in mind for implementation, scalability, and developer sanity.</li>
                    <li> I have worked with small, agile teams on skunkworks projects and more significant development teams with product lifecycles spanning my college years.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
