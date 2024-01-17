import React, { useEffect, useState } from 'react'
import BlogSingle from '../BlogSingle/BlogSingle'
import axios from 'axios'


const Blog = (props) => {
  let [blogs,setBlog]= useState([])
  let url = "http://127.0.0.1:8000/blogdata"
  useEffect( ()=>{
  axios.get(url).then((response)=>{
    setBlog(response.data.data)
  })
  },[])
  return (
    <div className="table-projects">
            <div className="row-lg">
            { blogs.map((blog, i)=>{
              return (
                <BlogSingle key={i} image={blog.image} tittle={blog.tittle} desc={blog.desc}/>
              )
            })
            }
            </div>
        </div>
  )
}

export default Blog