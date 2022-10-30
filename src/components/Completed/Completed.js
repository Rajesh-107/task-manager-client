import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import {
  AiOutlineCalendar,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TaskListByStatus } from "../../APIRequest/APIRequest";
import { DeletedTodo } from "../../Helper/DeleteAlret";
import { UpdateTodo } from "../../Helper/UpdateAlret";

const Completed = () => {

  useEffect(() =>{
    TaskListByStatus("Completed")
  },[])

  const CompletedList = useSelector((state) => state.task.Completed)

  const DeleteItem = (id) =>{
    DeletedTodo(id)
  }

  const StatusChangeItem = (id, status) =>{
    UpdateTodo(id, status).then((res) => {
     if(res === true){
       TaskListByStatus("Completed");
     }
    })
   }
  return (
    <>
      <Container fluid={true} className="content-body">
        <div className="row p-0 m-0">
          <div className="col-12 col-md-6 col-lg-8 px-3">
            <h5>Task Completed</h5>
          </div>
          <div className="col-12 float-end col-md-6 col-lg-4 px-2">
            <div className="row">
              <div className="col-8">
                <input className="form-control w-100" />
              </div>
              <div className="col-4">
                <button className="btn btn-primary w-100">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-0 m-0">
        {CompletedList.map((item, i) => 
            <div key={i.toString()} className="col-12 col-lg-4 col-sm-6 col-md-4  p-2">
              <div className="card h-100">
                <div className="card-body">
                  <h6 className="animated fadeInUp">{item.title}</h6>
                  <p className="animated fadeInUp">{item.description}</p>
                  <p className="m-0 animated fadeInUp p-0">
                    <AiOutlineCalendar /> {item.createdDate}
                    <Link 
                    onClick={StatusChangeItem.bind(this, item._id, item.status)}
                    className="icon-nav text-primary mx-1">
                      <AiOutlineEdit />
                    </Link>
                    <Link
                    onClick={DeleteItem.bind(this, item._id)}
                    className="icon-nav text-danger mx-1">
                      <AiOutlineDelete />
                    </Link>
                    <Link className="badge float-end bg-info">{item.status}</Link>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Completed;
