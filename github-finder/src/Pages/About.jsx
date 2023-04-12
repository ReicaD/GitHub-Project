import React from "react";

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">About DevTracker</h1>
      <p className="mb-4 text-xl font-dark">
      Welcome to our website built using React - a powerful JavaScript library for building user interfaces. Our website is inspired by GitHub, the world's largest community of developers, where people can collaborate, contribute, and share their code with others.

Our website provides a similar platform for developers to showcase their projects, share their knowledge, and connect with like-minded people from all around the world. With our intuitive and user-friendly interface, you can easily create and manage your repositories, track issues, and collaborate with other developers.

We understand the importance of open-source software and the impact it can have on the world. That's why we strive to provide a space where developers can come together to share their knowledge, build meaningful projects, and make a difference in the world.
Thank you for choosing our website, and we hope you enjoy using it as much as we enjoyed building it.
 
     <br></br>
        <a href="https://www.udemy.com/course/modern-react-front-to-back/">
          {" "}
          React Front To Back
        </a>{" "}
     
       
        <strong>
          <a href="https://traversymedia.com">Bamanya.D </a>
        </strong>
        .
      </p>
      <p className="text-lg text-dark-400">
        Version <span className="text-white">:3.2.1</span>
      </p>
      <p className="text-lg text--400">
        Layout By:
        <a className="text-white" href="https://twitter.com/hassibmoddasser">
          Diane B
        </a>
      </p>
    </div>
  );
}

export default About;
