import React, { useRef, useState } from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    let [btnclassName,setbtnclassName]= useState(false)
    let [inputSearch,setinputSearch] = useState()
    let [showSearch,setsearch] = useState(true)
    let [showSideBar,setSideBar] = useState(true)
    let [burger,setburger] = useState(true)
    let inputRef = useRef()

    let  btntoggle =() =>{
        setbtnclassName(!btnclassName)
    }
    let inptclr = ()=>{
        console.log(inputSearch)
        inputRef.current.value = ''
    }
    let searchShow = ()=>{
        setsearch(!showSearch)
    }
    let SideBarRemove =()=>{
        setSideBar(true)
        setburger(true)
    }
    let SideBarShow = () =>{
        setSideBar(false)
        setburger(false)
    }
  return (
    <div>
        <div className="navigation">
        <div className="head">
            <h2>EzCodez Blog</h2>
        </div>
        <div className={burger?'sideBarMenue':'hide'}>
            <i className="fa-solid fa-bars show" id="burger" onClick={SideBarShow}></i>
        </div>
        <div className={showSideBar?'nav-left':'showSide'} id="SideBar">
            <i className="btnremover" onClick={SideBarRemove}></i>
            <nav>
                <ul>
                    <li> <Link to={''}> Home</Link></li>
                    <li><Link to={'codes'}>Source Codes</Link></li>
                    <li><Link to={'contact'}>Contact</Link></li>
                    <li><i className="fa-solid fa-magnifying-glass" onClick={searchShow}></i></li>
                </ul>
            </nav>
            <div className="right-btn">
                <div className="btn-main">
                    <button className="btn" onClick={btntoggle}></button>
                    <button className={btnclassName?'togglebtn-2':'togglebtn'} id="btntoggle" onClick={btntoggle}></button>
                    <button className="btn" onClick={btntoggle}></button>
                </div>
            </div>
        </div>
    </div>
    <div className={showSearch?'hide':'search-sec'}>
        <i className="exbtnremover" onClick={searchShow}></i>
        <div className="search-box">
            <input type="text"  onChange={(e)=>setinputSearch(e.target.value)} ref={inputRef}/>
            <i className="fa-solid fa-xmark markinbx" onClick={inptclr}></i>
        </div>
    </div>
    </div>
  )
}

export default NavBar