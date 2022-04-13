package com.bezkoder.springjwt.controllers;
//package com.springrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

//import com.springrest.springrest.entities.Course;

import com.bezkoder.springjwt.models.*;
import com.bezkoder.springjwt.security.services.CourseService;

 
@RestController   
@CrossOrigin (origins="http://localhost:8081")

public class MyController
{
	@Autowired
	private CourseService courseServices;
	
	//Home Page
	@GetMapping("/home")
	public String home()
	{
		return "This is Home Page.";
	}
	
	//Get all Courses.
	@GetMapping("/courses")
	public List<Course> getCourses()
	{
		return this.courseServices.getCourses();
	}
	
	//Get Course by ID
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId)
	{
		return this.courseServices.getCourse(Long.parseLong(courseId));
	}
	
	//Add a Course
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course)
	{
		return this.courseServices.addCourse(course);
	}
	
	//Update a Course
	@PutMapping("/courses")
	public Course updateCourse(@RequestBody Course course)
	{
		return this.courseServices.updateCourse(course);
	}
	
	//Delete a Course
	@DeleteMapping("/courses/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId)
	{
		try
		{
			this.courseServices.deleteCourse(Long.parseLong(courseId));
			
			return new ResponseEntity<>(HttpStatus.OK);
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
}
