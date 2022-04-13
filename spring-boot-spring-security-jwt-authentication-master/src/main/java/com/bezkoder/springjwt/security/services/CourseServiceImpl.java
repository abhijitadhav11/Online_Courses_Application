package com.bezkoder.springjwt.security.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bezkoder.springjwt.repository.*;
//import com.springrest.springrest.entities.Course;
import com.bezkoder.springjwt.models.*;

@Service
public class CourseServiceImpl implements CourseService
{
	@Autowired
	private CourseDao courseDao;
	
	public CourseServiceImpl()
	{
		
	}
	
	@Override
	public List<Course> getCourses()
	{
		return courseDao.findAll();
	}

	@Override
	public Course getCourse(long courseId)
	{
		return courseDao.getById(courseId);
	}

	@Override
	public Course addCourse(Course course)
	{
		courseDao.save(course);
		
		return course;
	}

	@Override
	public Course updateCourse(Course course)
	{
		courseDao.save(course);
		
		return course;
	}

	
	@Override
	public void deleteCourse(long parseLong)
	{
		Course entity = courseDao.getById(parseLong);
		courseDao.delete(entity);
	}
	
}
