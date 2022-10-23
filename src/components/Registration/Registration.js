import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { RegistrationRequest } from "../../APIRequest/APIRequest";
import { ErrorToast, IsEmail, IsEmpty, IsMobile } from "../../Helper/FormHelper";

const Registration = () => {
  let navigate = useNavigate()
  let emailRef,
    firstNameRef,
    lastNameRef,
    mobileRef,
    passwordRef = useRef();

  const onRegistration = () => {
    let email = emailRef.value;
    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let mobile = mobileRef.value;
    let password = passwordRef.value;

    if(IsEmail(email)){
        ErrorToast("Valid Email Address required!")
    }
    else if(IsEmpty(firstName)){
        ErrorToast("Valid firstName required!")
    }
    else if(IsEmpty(lastName)){
        ErrorToast("Valid lastName required!")
    }
    else if(!IsMobile(mobile)){
        ErrorToast("Valid Mobile required!")
    }
    else if(IsEmpty(mobile)){
        ErrorToast("Valid password required!")
    }
    else{
        RegistrationRequest(email, firstName, lastName, mobile,password, "").then((result) =>{
            if(result === true){
              navigate('/Login')
            }
        })
    }

  };
  return (
    <>
      <div className="container">
        <div className="row  justify-content-center">
          <div className="col-md-10 col-lg-10 center-screen">
            <div className="card animated fadeIn w-100 p-3">
              <div className="card-body">
                <h4>Sign Up</h4>
                <hr />
                <div className="container-fluid m-0 p-0">
                  <div className="row m-0 p-0">
                    <div className="col-md-4 p-2">
                      <label>Email Address</label>
                      <input
                        ref={(input) => (emailRef = input)}
                        placeholder="User Email"
                        className="form-control animated fadeInUp"
                        type="email"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>First Name</label>
                      <input
                        ref={(input) => (firstNameRef = input)}
                        placeholder="First Name"
                        className="form-control animated fadeInUp"
                        type="text"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>Last Name</label>
                      <input
                        ref={(input) => (lastNameRef = input)}
                        placeholder="Last Name"
                        className="form-control animated fadeInUp"
                        type="text"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>Mobile Number</label>
                      <input
                        ref={(input) => (mobileRef = input)}
                        placeholder="Mobile"
                        className="form-control animated fadeInUp"
                        type="mobile"
                      />
                    </div>
                    <div className="col-md-4 p-2">
                      <label>Password</label>
                      <input
                        ref={(input) => (passwordRef = input)}
                        placeholder="User Password"
                        className="form-control animated fadeInUp"
                        type="password"
                      />
                      <br />
                      {/* <button className="btn w-100 float-end btn-primary animated fadeInUp">Sign In</button> */}
                    </div>
                  </div>
                  <div lassName="row mt-2 p-0">
                    <div className="col-md-4 p-2">
                      <button
                        onClick={onRegistration}
                        className="btn mt-3 w-100 float-end btn-primary animated fadeInUp"
                      >
                        Complete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default Registration;
