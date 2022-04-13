package com.bezkoder.springjwt.repository;
//package com.springrest.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
//
//import com.springrest.springrest.entities.Course;
import com.bezkoder.springjwt.models.*;

public interface CourseDao extends JpaRepository<Course, Long>
{

}
