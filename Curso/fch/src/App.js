import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import TodoList from "./Components/TodoList";

//import 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js'
//import './vendor/sidebar.js'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Form from './module/form';
//import List from './module/list';
import Edit from './module/edit';



function App() {

  return (
    <Router>
      <div className="App">
        
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#" style={{color:'orange',fontWeight:'bold'}}>JmSoftCR</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/"> Employee List </Link>
              </li>
            </ul>
            <Link class="btn btn-info "  to="/form">Add Employee</Link>
          </div>
        </nav> 
        {/*   <div class="d-flex" id="wrapper">

// Sidebar
<div class="bg-light border-right" id="sidebar-wrapper">
  <div class="sidebar-heading">Start Bootstrap </div>
  <div class="list-group list-group-flush">
    <a href="#" class="list-group-item list-group-item-action bg-light">Dashboard</a>
    <a href="#" class="list-group-item list-group-item-action bg-light">Shortcuts</a>
    <a href="#" class="list-group-item list-group-item-action bg-light">Overview</a>
    <a href="#" class="list-group-item list-group-item-action bg-light">Events</a>
    <a href="#" class="list-group-item list-group-item-action bg-light">Profile</a>
    <a href="#" class="list-group-item list-group-item-action bg-light">Status</a>
  </div>
</div>
 //#sidebar-wrapper 

 //Page Content 
<div id="page-content-wrapper">

  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container-fluid">
    <h1 class="mt-4">Simple Sidebar</h1>
    <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
    <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top navbar is optional, and just for demonstration. Just create an element with the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
  </div>
</div>
 //#page-content-wrapper 

</div> */}

        <div class="container py-4">
          <div class="row">

         
            <Route path="/" exact component={TodoList} />
            <Route path="/form" component={Form} />
            <Route path="/edit/:idarticulo" component={Edit} />
            
          </div>
        </div>

      </div>
      </Router>
  );
}
  

export default App;
