const BlogSingle = (props) => {
  // console.log(props.image)
  return (
    <div className={props.mode ? 'col-sm' : 'col-sm-Dark'}>
      <div className="project-card">
        <div className="project-image">
          <img src={'http://127.0.0.1:8000/'+props.image} alt="" />
        </div>
        <div className="project-text">
          <div className="project-tittle">
            <h3>{props.tittle}</h3>
          </div>

          <div className="post-text">
            {props.desc}
          </div>

        </div>
      </div>
    </div>
  )
}

export default BlogSingle