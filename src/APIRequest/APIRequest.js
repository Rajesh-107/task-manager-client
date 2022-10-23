import axios from "axios";
import { ErrorToast, SuccessToast } from "../Helper/FormHelper";
import { setToken, setUserDetails } from "../Helper/SessionHelper";


const BaseURL = "https://task-manager-server-rosy.vercel.app/api/v1";

export function LoginRequest(email, password){
  let URL = BaseURL+ "/UserLogin";

  let PostBody = {"email": email, "password":password}

  return axios.post(URL, PostBody).then(res => {
    if(res.status === 200){
      setToken(res.data['token']);
      setUserDetails(res.data['data'])
      SuccessToast("Login Success")
      return true;
    }
    else{
      ErrorToast("Invalid Email")
      return false
    }
  }).catch(err => {
    ErrorToast('Something not good')
  })
}

export function RegistrationRequest(
  email,
  firstName,
  lastName,
  mobile,
  password,
  photo
){
  // Store.dispatch(ShowLoader())
  let URL = BaseURL + "/registartion";
  let PostBody = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    mobile: mobile,
    password: password,
    photo: photo,
  };
 return axios.post(URL, PostBody).then((res) => {
  // Store.dispatch(HideLoader())
    if(res.status===200){
        if(res.data['status']==="fail"){
            if(res.data['data']['keyPattern']['email']===1){
                ErrorToast("Sorry This email already taken")
                return false;
            }
            else{
                ErrorToast("Something Went Wrong")
                return false;
            }
        }
        else {
            SuccessToast("Registration Success")
            return true;
        }
    }
    else{
        ErrorToast("Something Went Wrong")
        return  false;
    }

  }).catch((err) => {
    // Store.dispatch(HideLoader())
    ErrorToast("Something Went Wrong")
    return false;
  })
}
