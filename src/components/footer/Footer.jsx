import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
The MERN Blog App is a dynamic web platform powered by MongoDB, Express.js, React, and Node.js. Seamlessly integrating frontend and backend technologies, it enables users to create, edit, and share blog posts. With responsive design and user-friendly features, the app offers an engaging writing and reading experience. Leveraging the MERN stack's scalability and efficiency
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +91 7505709050</span>
          <span>LinkedIn: Mayank Singh</span>
          <span>GitHub: Mayank Singh</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Asia</span>
          <span>Country: India</span>
          <span>Current India: Nagpur</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer