import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.jpg";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'
// const navigate=useNavigate();

function open(){
   window.location.assign("http://localhost:3002/")
}
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }


  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {      
      return (
         <div id='welcome'>
            <div className='title'>
               Hello,
               <NavLink activeClassName='username' to={`/trips/user/${this.props.currentUser.id}`}>
                  {" "}
                  {this.props.currentUser.username}{" "}
               </NavLink>
            </div>
            {/* <div>
               <button className='btn' alt='Check Weather' onClick={open}>
                     <i></i>
                     <span>Check Weather</span>
                  </button>
            </div> */}
            <div>
               <button className='btn' alt='Itinerary' onClick={open}>
                     <i></i>
                     <span>Travel Itinerary</span>
                  </button>
            </div>
          
            <div className='new-trip'>
               <button className='btn' onClick={this.showModal} alt='Create new trip'>
                  <i></i>
                  <span>New Trip +</span>
               </button>
            </div>
            <div className='logout'>
               <button className='btn btn-logout' onClick={this.logoutUser}>
                  <i></i>
                  <span>Logout</span>
               </button>
            </div>
         </div>
      );
    } else {
      return (
        <div id="session-actions-container">
          <Link id="signup" className="btn" to={"/signup"}>
            Signup
          </Link>
          <Link id="login" className="btn" to={"/login"}>
            Login
          </Link>
        </div>
      );
    }
  }

  showModal() {
    this.props.showModal("trip-form");
  }

  render() {
    return (
       <nav className='navbar'>
          <div id='logo-container'>
             <Link id='logo' to={"/"}>
                <img className='logo-thumb' src={logo} alt='TravelBizz' />
                <span>TravelBizz</span>
             </Link>
          </div>
          <div>{this.getLinks()}</div>
       </nav>
    );
  }
}

export default NavBar;
