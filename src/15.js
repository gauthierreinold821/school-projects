// Import modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/school-projects', { useNewUrlParser: true });

// Set up route for POST requests to /projects
app.post('/projects', (req, res) => {
  // Create a new project
  const project = new Project({
    name: req.body.name,
    description: req.body.description,
    dueDate: req.body.dueDate
  });

  // Save the project to the database
  project.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Server error');
    } else {
      res.json({ message: 'Project created successfully' });
    }
  });
});

// Set up route for GET requests to /projects
app.get('/projects', (req, res) => {
  // Query the database for all projects
  Project.find((err, projects) => {
    if (err) {
      console.log(err);
      res.status(500).send('Server error');
    } else {
      res.json(projects);
    }
  });
});

// Set up route for GET requests to /projects/:id
app.get('/projects/:id', (req, res) => {
  // Query the database for a specific project by ID
  Project.findById(req.params.id, (err, project) => {
    if (err) {
      console.log(err);
      res.status(500).send('Server error');
    } else {
      res.json(project);
    }
  });
});

// Set up route for PUT requests to /projects/:id
app.put('/projects/:id', (req, res) => {
  // Update a specific project by ID
  Project.findByIdAndUpdate(req.params.id, req.body, (err, project) => {
    if (err) {
      console.log(err);
      res.status(500).send('Server error');
    } else {
      res.json({ message: 'Project updated successfully' });
    }
  });
});

// Set up route for DELETE requests to /projects/:id
app.delete('/projects/:id', (req, res) => {
  // Delete a specific project by ID
  Project.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Server error');
    } else {
      res.json({ message: 'Project deleted successfully' });
    }
  });
});
