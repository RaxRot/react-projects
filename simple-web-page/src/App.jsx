
import './App.css'

function App() {

    const name="Vlad";
    const profession="Full Stack Developer";
    const projects=[
        {
            title:"Project One",
            description:"A web application built by react",
            link:"#"
        },
        {
            title:"Project Two",
            description:"A web application built by SB",
            link:"#"
        }
    ]

  return (
    <>
      <div className="app">
          {/*Header Section*/}
          <header className="header">
              <h1>{name}</h1>
              <p>{profession}</p>
              <nav>
                  <a href='#about'>About</a>
                  <a href='#projects'>Projects</a>
                  <a href='#contact'>Contact</a>
              </nav>
          </header>
          {/*Project Section*/}
          <section id='projects' className="project-session">
              <h2>Projects</h2>
              <div className="project-list">
                  {projects.map((project,index)=>{
                      return  <div key={index} className='project-item'>
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                      </div>
                  })}
              </div>
          </section>
          {/*Contact Section*/}
          <section id='contact' className="contact-session">
              <h2>Contact Me</h2>
              <p>Fell free to Email me <a href='mailto:dasistperfektos@gmail.com'>RaxRot</a></p>
          </section>
      </div>
    </>
  )
}

export default App
