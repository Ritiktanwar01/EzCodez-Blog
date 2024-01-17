import React from 'react'
import CodeSingle from '../CodeSingle/CodeSingle'
import { useState,useEffect } from 'react'
import axios from 'axios'

const CodeSection = (props) => {
  let [codes,setcodes]= useState([])
  let url = "http://127.0.0.1:8000/project"
  useEffect( ()=>{
  axios.get(url).then((response)=>{
    setcodes(response.data.data)
  })
  },[url])
  return (
    <div className="table-projects">
            <div className="row-lg">
            { codes.map((codesec, i)=>{
              return (
                <CodeSingle key={i} mode={props.mode} image={codesec.image} tittle={codesec.tittle} githublink={codesec.githublink} ziplink={codesec.zipfilelink} drivelink={codesec.goggledrivelink}/>
              )
            })
            }
            </div>
        </div>
  )
}

export default CodeSection