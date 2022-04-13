import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";
import axios from "axios";
import { toast } from 'react-toastify';
import base_url from "./../api/bootapi";
import authHeader from "../services/auth-header";
import courseService from "../services/course.service";
// import deleteCourse from "../services/course.service"
const Course=({course,update}) => {
  const deleteCourse=(id)=>{
    axios.delete(`${base_url}/courses/${id}`,{ headers: authHeader() }).then((response)=>{
      toast.success("Course deleted");
      update(id);

  },(error)=>{
      console.log(error);
      console.log("error");
      toast.error("Course not deleted !! Server problem");

  }
  );
  };

  
   /* const updateCourse=(id)=>{
      axios.update(`${base_url}/courses`,{ headers: authHeader() }).then((response)=>{
        toast.success("Course updated");
        update(id);
  
    },(error)=>{
        console.log(error);
        console.log("error");
        toast.error("Course not updated !! Server problem");
  
    }
    );
    };*/
  


  
    return(
        <Card className="text-center"
        >
          <CardBody>
            
            <CardSubtitle
              className="font-weight-bold">{course.title}
            </CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
            <Button color="danger" onClick={()=>{
              deleteCourse(course.id);
            }}>
              Delete
            </Button>
            <Button color="warning">
            Update
            </Button>
            </Container>
            
          </CardBody>
        </Card>
      
    )

}
export default Course;