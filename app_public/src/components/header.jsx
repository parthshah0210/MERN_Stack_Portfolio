export const Header = () => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h2>
                  Hi, I am </h2>
                  <h1>Parth Shah
                  <span></span></h1>
                
                <p>I do Automation</p>
                <a
                  href='#contact'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Contact me
                </a>{' '}&nbsp;&nbsp;
                <a
                  href='#skills'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  View Skills
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
