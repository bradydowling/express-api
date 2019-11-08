const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const db = {
  tasks: [
    { id: 0, description: 'Some task', completed: true },
    { id: 1, description: 'Some task', completed: false },
    { id: 2, description: 'Some task', completed: true },
    { id: 3, description: 'Some task', completed: false },
    { id: 4, description: 'Some task', completed: false },
  ]
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('<b>Hello world</b>');
});

app.get('/getTasks', (req, res) => {
  res.json(db.tasks);
});

app.post('/createTask', (req, res) => {
  const description = req.body.description;
  const id = db.tasks.length;
  db.tasks.push({ description: description, id: id });
  res.json({ message: 'Task created!' });
});

app.listen(port, () => {
  console.log(`listening right now on port ${port}`);
});