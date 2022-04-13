package com.bezkoder.springjwt.security.services;

import java.util.List;

import com.bezkoder.springjwt.models.*;

public interface CourseService
{
	public List<Course> getCourses();
	
	public Course getCourse(long courseId);
	
	public Course addCourse(Course course);
	
	public Course updateCourse(Course course);
	
	public void deleteCourse(long parseLong);
}
