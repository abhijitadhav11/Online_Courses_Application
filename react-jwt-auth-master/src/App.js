import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/CourseHome";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import About from "./components/About";
import Contact from "./components/Contact";
// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";

// added import statements 

 
import logo from './logo.svg';
import './App.css';
import { Button,Container,Row,Col } from "reactstrap";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast } from "react-toastify";
import CourseHome from "./components/CourseHome";
import Course from "./components/Course";
import Allcourses from "./components/Allcourses";
import AddCourse from "./components/AddCourse";
import Header from "./components/Header";
import Menus from "./components/Menus";
import {BrowserRouter as Router} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

//import { Switch,Route } from "react-router-dom";

//import Signin from "./components/Login/Login";
//import SignIn from "./components/Login/Login";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import Registration from './components/Registeration';
//import Login from "./components/Login";




class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Learncode
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                {/* <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link> */}
                <Link to={"/add-course"} className="nav-link">
                  Add Course
                </Link>
                
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                {/* <Link to={"/user"} className="nav-link">
                  User
                </Link>
            
                 
                <li className="nav-item">
                <Link to={"/view-courses"} className="nav-link">
                    View Courses 
                </Link>
                </li> */}
                <Link to={"/view-courses"} className="nav-link">
                    View Courses 
                </Link>
                 
                {/* <Link to={"#!"} className="nav-link">
                  Contact
                </Link> */}
                </li>
            )}

            {currentUser && (
              <li className="nav-item">
              <Link to={"/About"} className="nav-link">
                  About
                </Link>
                
              </li>
                )}

                {currentUser && (
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">
                Contact
                </Link>
              </li>
                )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            {/* <Route exact path={["/", "/home"]} component={Home} /> */}
            <Route exact path={["/"]} component={Home} />
            <Route exact path="/login" component={Login} />

            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            
            <Route path="/coursehome" component={CourseHome} exact/>
            <Route path="/add-course" component={AddCourse} exact/>
            <Route path="/view-courses" component={Allcourses} exact/>
            <Route path="/About" component={About} exact/>
            <Route path="/Contact" component={Contact} exact/>


          </Switch>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */ }
      </div>
    );
  }
}

export default App;
