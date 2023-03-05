const express = require("express");
const app = express();
const port = 3000;






const resume = require("./resume.json");

app.get("/api", (req, res) => {
  res.send("Welcome to my resume API!");
});

app.get("/api/resume", (req, res) => {
  res.json(resume);
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

      default:
        res.status(404).send('Category not found');
    }
  });

app.listen(port, () => {
  console.log(`Resume API listening at http://localhost:${port}`);
});

// i want the url to look like api.hostname.com

