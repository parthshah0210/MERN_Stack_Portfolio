export const Projects = () => {
    return (
        <div id="portfolio" className='text-center'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Projects</h2>
                </div>
                <div className='row'>
                    <div className='portfolio-items'>
                        <div className='col-sm-6 col-md-4 col-lg-4'>
                            <img style = {{borderRadius:'50px'}} className="img-responsive" src="img/esociety.jpg" alt='Society.jpg' />
                            <h3>Service Management</h3>
                            <p>This application has been developed to be used for overall management and reporting of a typical
Pest Control Company. Any such Company may buy the application and then the company will be registered to
access to the application. The application is supposed to maintain details of the Pest Control Company, Access
Control of users of the pest control companies, types of services, frequency of each type of services, chemicals
to be used for the services, client details of the pest control company, schedules, and specific plan for individual
clients.</p>
                        </div>
                    </div>
                    <div className='portfolio-items'>
                        <div className='col-sm-6 col-md-4 col-lg-4'>
                            <img style = {{borderRadius:'50px'}} className="img-responsive" src="img/warehouse.jpg" alt='warehouse.jpg' />
                            <h3>Public Health Awareness</h3>
                            <p>Vaccine Awareness Portal is a vaccination Awareness site to fight vaccine hesitancy. Through the
video and FAQs sections of the site, the website has tried to answer some of the questions and confusions that
people have about getting vaccinated against Covid-19. The site is maintained by Scarborough Cares Community
Network Inc. The images, characters and animations are imaginary and have been solely created for the purpose
of raising public awareness to fight vaccine hesitancy related to Covid-19.</p>
                        </div>
                    </div>
                    <div className='portfolio-items'>
                        <div className='col-sm-6 col-md-4 col-lg-4'>
                            <img style = {{borderRadius:'50px'}} className="img-responsive" src="img/Mobile_store.jpg" alt='Mobile_store.jpg' />
                            <h3>Lavish Mobile Store</h3>
                            <p>Online Mobile Store project Using MEAN Stack Programming. It has all the crud operations in order to run an online mobile store. </p>
                        </div>
                    </div>
                </div>
            </div>
        




            {/* <div className="products-afterwrap">
                <div className="product">
                    <div className="grid">
                        <img src="img/warehouse.jpg" alt="Warehouse" />
                        <div className="txt-wrap">
                            <h3>Warehouse Management</h3>
                             <p>Hello How are you</p>
                        </div>
                    </div>
                </div>
                <div className="product grey-bg">
                <div className="grid">
                    <div className="txt-wrap">
                        <h3>Attendance Recorder</h3>
                        <p>We provide a solution to record In and out time of employees, keep track of their leaves,
                        </p>
                    </div>
                    <img src="images/attendance.jpg" alt="Attendance" />
                </div>
            </div>
            </div>
             */}
        </div> 
    )
}
