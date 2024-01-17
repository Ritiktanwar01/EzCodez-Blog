import axios from 'axios'

const Contact = ({mode}) => {
    let sendFormData = (e) =>{
        e.preventDefault()
        let form = new FormData(e.target)
        let data = Object.fromEntries(form)
        axios.post('http://127.0.0.1:8000/contact',data)
        alert('Messege Sent')
    }
    return (
        <div className={mode?'contactPage':'contactPageDark'}>
            <h2>Contact us</h2>
            <div className="form">
                <form onSubmit={(e)=>sendFormData(e)}>
                    <input type="text" placeholder='Name' name='name' id='name' required/>
                    <input type="email" placeholder='Email' name='email' id='email' required/>
                    <input type="tel" placeholder='Mobile' name='mobile' id='mobile' required/>
                    <textarea name="messege" id="messege" cols="27" rows="10" required></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Contact