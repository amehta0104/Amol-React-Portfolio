const express = require("express");
const app = express();
const port = 3000;

const cors = require('cors');

app.use(cors());
app.use(express.json());

const path = require('path');




const resume = require("./resume.json");


app.get('/', (req, res) => {
  //res.use (path.join(__dirname, '../my-app/public/index.html'));

  res.redirect('/api');




});


  

app.get("/api", (req, res) => {
  // create an HTML string for the landing page
  const landingPageHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Resume API</title>
      <style>
      /* Custom styles */
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f9f9f9;
        color: #333;
        line-height: 1.6;
      }

      h1 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
        padding: 20px;
        background-color: #4CAF50;
        color: #fff;
      }

      p {
        font-size: 18px;
        padding: 20px;
        margin-top: 0;
      }

      ul {
        list-style-type: none;
        padding: 20px;
      }

      li {
        font-size: 16px;
        margin-bottom: 10px;
      }

      code {
        font-family: 'Courier New', monospace;
        background-color: #eee;
        padding: 2px 4px;
        border-radius: 4px;
      }

      @media (max-width: 600px) {
        h1 {
          font-size: 20px;
        }

        p {
          font-size: 16px;
        }

        li {
          font-size: 14px;
        }
      }
    </style>
    </head>
    <body>
      <h1>Welcome to My Resume API!</h1>
      <p>This API provides information about my resume in JSON format. You can access the following endpoints:</p>
      <ul>
        <li><code>/api/resume</code> - Get the entire resume</li>
        <li><code>/api/resume/contact</code> - Get contact information</li>
        <li><code>/api/resume/summary</code> - Get the summary</li>
        <li><code>/api/resume/experience</code> - Get the experience</li>
        <li><code>/api/resume/education</code> - Get the education</li>
        <li><code>/api/resume/skills</code> - Get the skills</li>
        <li><code>/api/resume/projects</code> - Get the projects</li>
      </ul>
      <p>For my GitHub repositories, use the endpoint:</p>
      <ul>
        <li><code>/api/github</code> - Get the GitHub repositories</li>
      </ul>
    </body>
    </html>
  `;

  // send the HTML string as a response
  res.send(landingPageHtml);
});

app.get("/api/resume", (req, res) => {
    
  // display resume data in json format 

  res.json(resume);



  // res.json(resume);
});

app.get('/api/resume/:category', (req, res) => {
    const category = req.params.category.toLowerCase();
    
    switch (category) {
      case 'contact':
        res.json(resume.contact_information);
        break;
      case 'summary':
        res.send(resume.summary);
        break;
      case 'experience':
        res.json(resume.experience);
        break;
        case 'education':
        res.json(resume.education);
        break;
        case 'skills':
        res.json(resume.skills);
        break;
        case 'projects':
        res.json(resume.projects);
        break;
        

      default:
        res.status(404).send('Category not found');
    }
  });

  const axios = require('axios');
  let githubDataCache = null;
  const cacheDuration = 60 * 60 * 1000; // 1 hour in milliseconds
  
  // Function to fetch GitHub data
  const fetchGitHubData = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/amehta0104/repos');
      githubDataCache = response.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  // Initial fetch
  fetchGitHubData();
  
  // Refresh the cache every hour
  setInterval(fetchGitHubData, cacheDuration);
  
  app.get('/api/github', (req, res) => {
    if (githubDataCache) {
      res.json(githubDataCache);
    } else {
      res.status(500).send('Error fetching GitHub data');
    }
  });
  
  // app.get('*', (req, res) => {
  //   //send tp index.html
  //   res.sendFile(path.join(__dirname, 'my-app/build/static/index.html'));
  // });

app.listen(port, () => {
  console.log(`Resume API listening at http://localhost:${port}`);
});

// i want the url to look like api.hostname.com

