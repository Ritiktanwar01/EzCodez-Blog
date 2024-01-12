import React from 'react'

const Contact = () => {
    let sendFormData = (e) =>{
        e.preventDefault()
        let form = new FormData(e.target)
        let data = Object.fromEntries(form)
        console.log(data)
    }
    return (
        <div className='contactPage'>
            <h2>Contact</h2>
            <div className="form">
                <form onSubmit={(e)=>sendFormData(e)}>
                    <input type="text" placeholder='Name' name='name' id='name'/>
                    <input type="email" placeholder='Email' name='email' id='email'/>
                    <input type="tel" placeholder='Mobile' name='mobile' id='mobile'/>
                    <textarea name="messege" id="messege" cols="27" rows="10"></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Contact