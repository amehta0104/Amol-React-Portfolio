import React from 'react';
import './index.css';






function LandingPage() {
  return (
    <div className='wrapper'> 

      <header>
        <h1>Hi, I'm Your Name</h1>
        <img src="your-photo.jpg" alt="Your Name" />
      </header>
      <main>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          efficitur lorem id tellus ornare, ac laoreet erat porttitor. Morbi
          elementum consectetur mauris, eu fringilla nisi volutpat ac. Sed
          tincidunt erat ut lorem ornare, eget dictum justo rutrum.
        </p>
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
        <h2>Recent Projects</h2>
        <section>
          <h3>Uniken</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Curabitur venenatis, nulla id tincidunt ultrices, quam
            metus tincidunt lacus, eu posuere nisi lectus at nulla.
          </p>
          <a href="#">Demo</a>
          <h3>Sam's Blog</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Curabitur venenatis, nulla id tincid </p>
            <a href="#">Demo</a>
        </section>
        </main>
        <footer>
            <h2>Contact Me</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Curabitur venenatis, nulla id tincidunt ultrices, quam
                metus tincidunt lacus, eu posuere nisi lectus at nulla.
            </p>
            <a href="mailto:#">Email</a>
            <a href="tel:#">Phone</a>
            
        </footer>
    </div>
    );
}

export default LandingPage;







