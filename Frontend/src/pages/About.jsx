import React from 'react';
import './About.css';

function About() {
  return (
    <div style={{ padding: '20px', fontFamily: 'serif' }}>
      <h1><center>My Projects</center></h1>
      <h2>1. Software Engineering Project</h2><br />
      <div className='container'>
        <h3>Inventory Management System</h3><br />
        <p>This is my 3 year university individual project. To this I use React, Node, Express and Mysql as the technologies.</p>
        <p>Special features of the project</p><br />
        <ul style={{ marginLeft: '40px' }}>
          <li>FIFO sales method</li>
          <li>Forecasing</li>
          <li>Dashbord</li>
          <li>Report Generation</li>
          <li>Notification</li>
        </ul><br />
      </div>
      <div className='container'>
      <h3>AI travel agent application</h3><br />
      <p>In here I get the Google map API, Gemini API for building the web application. And use KNN algorithm to predict the optimal path.</p>
      <p>Special features of the project</p><br />
      <ul style={{ marginLeft: '40px' }}>
        <li>Google map API</li>
        <li>Provide optimal path</li>
      </ul><br />
    </div>
    <div className='container'>
      <h3>Biscuit order placing mobile application</h3><br />
      <p>In here I XML, Java and firebase as the technologies. This is belongs to native app development.</p>
      <p>Special features of the project</p><br />
      <ul style={{ marginLeft: '40px' }}>
        <li>Manage the orders</li>
      </ul>
    </div>
    </div>
  );
}

export default About;