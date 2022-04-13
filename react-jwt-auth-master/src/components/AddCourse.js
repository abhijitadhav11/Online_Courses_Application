import React, { Fragment,useEffect,useState } from "react";
import {Button, Container, Form, FormGroup, Input } from "reactstrap";
import App from "../App";
import  axios  from "axios";
import CourseService from "../services/course.service";
import base_url from "./../api/bootapi";
import { toast } from "react-toastify";
const AddCourse = () => {
    useEffect(()=>{
        document.title="Add Course || Learncode";
    },[]);

    const [course,setCourse] = useState({});
    //form handler function
    const handleForm = (e) => {
        console.log(course);
postDatatoServer(course);
        e.preventDefault();
    };

    //creating function to post data on server
    const postDatatoServer=(data) => {
        CourseService.addCourse(data).then(
    (response)=>{
        console.log(response);
        console.log("success");
        toast.success("Course added successfully");

    },(error)=>{
        console.log(error);
        console.log("error");
        toast.error("Error! Something went wrong ");

    }

)
    };
    return (<Fragment>

    <h1 className="text-center"><strong>Fill the Course Details</strong></h1>
    <Form onSubmit={handleForm}>
        <FormGroup>
        <label for="userId">Course Id
    </label>
    <Input type="text" placeholder="Enter here" name="userid" id="userId"
    onChange={(e)=>{
        setCourse({...course,id: e.target.value});
     }} />
        </FormGroup>
        <FormGroup>
        <label for="title">Course Title
    </label><Input type="text" placeholder="Enter title here" name="userid" id="title"
     onChange={(e)=>{
        setCourse({...course,title: e.target.value});
     }}/>

        </FormGroup>
        <FormGroup>
        <label for="description">Course Description
    </label><Input type="textarea" placeholder="Enter description here" name="userid" id="description"
     style={{height:150}}
     onChange={(e)=>{
        setCourse({...course,description: e.target.value});
     }}/>
        </FormGroup>
        <Container  className="text-center">
            <Button type="submit" color="success">Add course</Button>
            <Button type="reset" color="warning ml-2" onClick={(e)=>{
                setCourse({});}}>Clear</Button>
        </Container>
    </Form>

    </Fragment>
    );
};
export default AddCourse;