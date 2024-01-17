import React from 'react'

const CodeSingle = (props) => {
  return (
    <div className={props.mode?'col-sm':'col-sm-Dark'}>
      <div className="project-card">
        <div className="project-image">
          <img src={'http://127.0.0.1:8000/'+props.image} alt="" />
        </div>
        <div className="project-text">
          <div className="project-tittle">
            <h3>{props.tittle}</h3>
          </div>
          <div className="actions">
           <button className='actionBtn' title='Github Repo'><a href={props.githublink}><i className="fa-brands fa-github"></i></a></button>
           <button className='actionBtn' title='Run Code'><a href={'/'}><i className="fa-solid fa-code"></i></a></button>
          </div>
          <div className="actions">
           <button className='actionBtn' title='Zip File'><a href={props.ziplink}><i className="fa-solid fa-file-zipper"></i></a></button>
           <button className='actionBtn' title='Drive Link'><a href={props.drivelink}><i className="fa-brands fa-google-drive"></i></a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeSingle