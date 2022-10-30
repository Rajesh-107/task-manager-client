import axios from "axios";
import { ErrorToast, SuccessToast } from "../Helper/FormHelper";
import { getToken, setToken, setUserDetails } from "../Helper/SessionHelper";
import { HideLoader, ShowLoader } from "../redux/slice/Settingslice";
import { SetSummary } from "../redux/slice/SummarySlice";
import { SetCanceledTask, SetCompletedTask, SetNewTask, SetProgressTask } from "../redux/slice/taskSlice";
import Store from "../redux/store/Store";

const AxiosHeader = {headers: {"token": getToken()}}

const BaseURL = "https://task-manager-server-rosy.vercel.app/api/v1";

export function NewTaskRequest(title, description){
  Store.dispatch(ShowLoader())
  let URL = BaseURL+ "/createTask";
  let PostBody = {"title": title, "description":description, status: "New"}

  return axios.post(URL, PostBody,AxiosHeader).then(res => {
    
    // Store.dispatch(HideLoader())
    if(res.status === 200){
    
      SuccessToast("New Task Created")
      return true;
    }
    else{
      ErrorToast("Something went wrong")
      return false
    }

  }).catch((err) => {
    ErrorToast('Something not good')
    // Store.dispatch(HideLoader())
    return false;
  })
}

export function LoginRequest(email, password){
  // Store.dispatch(ShowLoader())
  let URL = BaseURL+ "/UserLogin";

  let PostBody = {"email": email, "password":password}
  // Store.dispatch(HideLoader())
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
    // Store.dispatch(HideLoader())
    return false;
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

export function TaskListByStatus(Status){
  let URL = BaseURL + "/listTaskByStatus/" + Status;

  axios.get(URL, AxiosHeader).then((res) => {
    if(res.status === 200){
      if(Status === "New"){
        Store.dispatch(SetNewTask(res.data['data']))
      }
      else if(Status === "Completed"){
        Store.dispatch(SetCompletedTask(res.data['data']))
      }
      else if(Status === "Canceled"){
        Store.dispatch(SetCanceledTask(res.data['data']))
      }
      else if(Status === "Progress"){
        Store.dispatch(SetProgressTask(res.data['data']))
      }
    }
    else{
      ErrorToast('Something went good')
    }
  }).catch((err) => {
    ErrorToast("Something went good")
    // Store.dispatch(HideLoader())
  });
}

export function SummaryRequest(){
  let URL = BaseURL +"/taskStatusCount"

  axios.get(URL,AxiosHeader).then((res) => {
    if(res.status === 200){
      Store.dispatch(SetSummary(res.data['data']))
    }
    else{
      ErrorToast("Something went wrong")
    }
  }).catch((err) => {
    ErrorToast("Something went wrong")
    
  })
}

export function DeleteRequest(id){
  let URL = BaseURL+ "/deleteTask/"+id;

  return axios.get(URL, AxiosHeader).then((res) => {
    if(res.status === 200){
      SuccessToast("Delete Successful")
      return true ;
    }
    else {
      ErrorToast("went wrong")
      return false;
    }
  }).catch((err) => {
    ErrorToast('went wrong')
   return false;
  })
}
export function UpdateStatusRequest(id, status){
  let URL = BaseURL+ "/updateTaskStatus/"+id + "/" + status;

  return axios.get(URL, AxiosHeader).then((res) => {
    if(res.status === 200){
      SuccessToast("Delete Successful")
      return true ;
    }
    else {
      ErrorToast("went wrong")
      return false;
    }
  }).catch((err) => {
    ErrorToast('went wrong')
   return false;
  })
}