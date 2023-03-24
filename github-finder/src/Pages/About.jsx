import React from "react";

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">About DevTracker</h1>
      <p className="mb-4 text-xl font-dark">
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href="https://www.udemy.com/course/modern-react-front-to-back/">
          {" "}
          React Front To Back
        </a>{" "}
        Udemy course by
        <strong>
          <a href="https://traversymedia.com"> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className="text-lg text-dark-400">
        Version <span className="text-white">:3.2.1</span>
      </p>
      <p className="text-lg text--400">
        Layout By:
        <a className="text-white" href="https://twitter.com/hassibmoddasser">
          Rugwanad
        </a>
      </p>
    </div>
  );
}

export default About;
