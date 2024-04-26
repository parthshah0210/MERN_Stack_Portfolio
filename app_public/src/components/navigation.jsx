export const Navigation = () => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'>
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#header' className='page-scroll'>
                Home
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#skills' className='page-scroll'>
                Skiils
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Projects
              </a>
            </li>
            <li>
              <a href='#resume' className='page-scroll'>
                Resume
              </a>
            </li>
            <li>
              <a href='https://github.com/parthshah0210' className='page-scroll' target="blank">
                GitHub
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/parth-shah-81a543215/' className='page-scroll' target="blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
