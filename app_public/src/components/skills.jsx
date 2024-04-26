export const Skills = () => {
    return (
      <div id='skills' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>Skills</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p> */}
          </div>
          <div className='row'>
            <div className='col-md-3'>
                {' '}
                <i className='fa fa-html5'></i>
                <div className='service-desc'>
                    <h3>DESIGNING</h3>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Bootstrap</p>
                </div>
            </div>
            <div className='col-md-3'>
                {' '}
                <i className='fa fa-server'></i>
                <div className='service-desc'>
                    <h3>PROGRAMMING</h3>
                    <p>C</p>
                    <p>C++</p>
                    <p>PYTHON</p>
                    <p>JAVA</p>
                    <p>C#</p>
                </div>
            </div>
            <div className='col-md-3'>
                {' '}
                <i className='fa fa-jsfiddle'></i>
                <div className='service-desc'>
                    <h3>JAVASCRIPTS</h3>
                    <p>JavaScript</p>
                    <p>jQuery</p>
                    <p>React</p>
                    <p>JSON</p>
                </div>
            </div>
            <div className='col-md-3'>
                {' '}
                <i className='fa fa-database'></i>
                <div className='service-desc'>
                    <h3>SERVER-SIDE</h3>
                    <p>SQL</p>
                    <p>MySQL</p>
                    <p>Node.js</p>
                    <p>PHP</p>
                    <p>GIT</p>
                </div>
            </div>
           
           
          </div>
        </div>
      </div>
    )
  }
  