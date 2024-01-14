import React from 'react'

const CodeSingle = ({mode}) => {
  return (
    <div className={mode?'col-sm':'col-sm-Dark'}>
      <div className="project-card">
        <div className="project-image">
          <img src="https://th.bing.com/th?id=ORMS.61d5f13c7c67821ddfdce1d52efab0d0&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0" alt="" />
        </div>
        <div className="project-text">
          <div className="project-tittle">
            <h3>Ecomm</h3>
          </div>
          <div className="actions">
           <button className='actionBtn' title='Github Repo'><i class="fa-brands fa-github"></i></button>
           <button className='actionBtn' title='Run Code'><i class="fa-solid fa-code"></i></button>
          </div>
          <div className="actions">
           <button className='actionBtn' title='Zip File'><i class="fa-solid fa-file-zipper"></i></button>
           <button className='actionBtn' title='Drive Link'><i class="fa-brands fa-google-drive"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeSingle