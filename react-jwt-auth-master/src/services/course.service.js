import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/';

class CourseService {
    addCourse(data){
        return axios.post(API_URL+ "courses",data,{ headers: authHeader() })
    }
///added for delete operation 
    

    // deleteCourse(){
    // return axios.delete(API_URL+ "courses/${id}",{ headers: authHeader() })
    // }
    
     



    getAllCourses(){
        return axios.get(API_URL+"courses",{headers: authHeader()});
    }
}
export default new CourseService();