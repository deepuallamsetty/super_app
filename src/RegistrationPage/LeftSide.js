import './LeftSide.css';
import React, { useState } from 'react';
function LeftSide(){    
    const[name,setName]=useState('')
    const[username,setuserName]=useState('')
    const[email,setEmail]=useState('')
    const[number,setNumber]=useState('')
    const[checked,setChecked]=useState(false)
    const[error,setError]=useState({})

    const signupSubmit=(e)=>{
        let formIsValid = true;
        const newErrors = {};
        e.preventDefault()
        const userData = {
            name,
            username,
            email,
            number,
          };
      
        localStorage.setItem('userData', JSON.stringify(userData));
      
        if (!name) {
            formIsValid = false;
            newErrors['name'] = 'Field is required';
          }
         
          if (!username) {
            formIsValid = false;
            newErrors['username'] = 'Field is required';
          }
          if (!email) {
            formIsValid = false;
            newErrors['email'] = 'Field is required';
          } else if (!/\S+@\S+\.\S+/.test(email)) {
            formIsValid = false;
            newErrors['email'] = 'Email is invalid';
          }
          if (!number){
            formIsValid=false;
            newErrors['number']="field is required";
          }
          if (!checked) {
            
            newErrors['checked'] = 'Field is required';
            formIsValid = false;
          }
          
          setError(newErrors);
        return formIsValid;
        }

        

    return(
        
        <div style={{display:"flex",flex:"1"}}>
            <div className="leftside">
                <h1 className="Discover">Discover New things on<br/> Superapp</h1>
            </div>
            
            <div className="rightside">
                <h1 className="superapp">Super App</h1>
                <p className="create">Create your new account</p>
                <label>
                <form id="signupform"onSubmit={signupSubmit}>
                <div style={{display:"grid"}}>
                    <input type="name" placeholder="Name" value={name}
          onChange={(e) => setName(e.target.value)}></input>
                    <span className='seterror'>{error['name']}</span>
                    <input type="name" placeholder="UserName" value={username}
          onChange={(e) => setuserName(e.target.value)}></input>
                    <span className='seterror'>{error['username']}</span>
                    <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)}></input>
                    <span className='seterror'>{error['email']}</span>
                    <input type="phonenumber" placeholder="Mobile" value={number}
          onChange={(e) => setNumber(e.target.value)}></input>
                    <span className='seterror'>{error['number']}</span>
                </div>
                <label className="checkboxcontent" >
                <input type="checkbox" value={checked}
          onChange={(e) => setChecked(e.target.value)}></input>
                   Share my registration data with Superapp
                </label>
                <p className='seterror'>{error['checked']}</p>
                <div style={{display:"grid"}}>
                <button type="submit" >SIGN UP</button>
                
                <p className="terms">By clicking on Sign up. you are agree to Superapp<span style={{color:"green"}}> Terms and <br/>conditions of Use</span> </p>
                <p className="terms">Tolearn more about how Superapp collects, uses, shares and<br/>protects your personal data please head Superapp <span style={{color:"green"}}>Privacy<br/> Policy</span></p>
                </div>
                </form>
                </label>
               
                
                
                
            </div> 
            
        </div>
    )
}
export default LeftSide;