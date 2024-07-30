import React from 'react'
// import Signupp from './Signupp.module.css'
// import '../Login/Login.css'


import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

// import '../Stylesheet/Signup.css'

function Signup() {
  return (
    <>
       <div className="l-form" >
       <Header/>
        <div className="form">
            <form action="/Next" method="POST" className="form-content">
                <h1 className="form-title">Registration</h1>
                <h4 className="form-subtitle">Create New RTMS Account</h4>
                <div className="form-div form-div-one">
                    <div className="form-icon">
                        <i className='bx bx-user-circle'></i>
                    </div>
                    <div className="form-div-input">
                        <label for="form-input" className="form-label">Name</label>
                        {/* <input type="text" className="form-input"> */}
                        <input type="text" className='form-input'/>
                    </div>
                </div>
                <div className="form-div form-div-one">
                    <div className="form-icon">
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="form-div-input">
                        <label for="form-input" className="form-label">Email</label>
                        {/* <input type="email" className="form-input"> */}
                        <input type="email" className='form-input'/>
                    </div>
                </div>
                <div className="form-div form-div-one">
                    <div className="form-icon">
                        <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="form-div-input">
                        <label for="form-input" className="form-label">Mobile</label>
                        {/* <input type="tel" className="form-input"> */}
                        <input type="tel" className='form-input'/>
                    </div>
                </div>

                <div className="form-div form-div-one">
                    <div className="form-icon">
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="form-div-input">
                        <label for="form-input" className="form-label">ONGC Employee ID</label>
                        {/* <input type="number" className="form-input"> */}
                        <input type="number" className="form-input"></input>
                    </div>
                </div>
                <div className="form-div form-div-one">
                    <div className="form-icon">
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="form-div-input">
                        <label for="form-input" className="form-label">Asset Name</label>
                        <select className="form-input">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                </div>
                <div className="form-div form-div-one">
                    <div className="form-icon">
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="form-div-input">
                        <label for="form-input" className="form-label">Department</label>
                        <select className="form-input">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                </div>
                <div className="form-div form-div-one">
                    <div className="form-icon">
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="form-div-input">
                        <label for="form-input" className="form-label">Role in RTMS</label>
                        <select className="form-input">
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                </div>
                <div className="form-div form-div-one">
                    <div className="form-icon">
                        <i className="fas fa-camera"></i>
                    </div>
                    <div className="form-div-input">
                        <label for="profile-pic"  className="form-label">upload</label>
                        {/* <input type="file" id="profile-pic" className="form-input" name="profile-pic" accept="image/*"> */}
                        <input type="file" id="profile-pic" className="form-input" name="profile-pic" accept="image/*"></input>
                        {/* <!-- <input type="submit" value="Upload"> --> */}
                    </div>
                </div>
                
                {/* <input type="submit" className="form-button" value="Next"> */}
                <input type="submit" className="form-button" value="Next"></input>
                  <div className="form-dont"><h4>Already Have Account?</h4></div>
                  <a href="/" className="signup">Login</a>
                  <div className="form-dont"><h4>Already Have Registration?</h4></div>
                  <a href="#" className="signup">Check Status</a>
            </form>
        </div>
        <Footer  />
    </div>

    </>
  )
}

export default Signup
