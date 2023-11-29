const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');


const devOpsData = [

    { id: 1, topic: "Git", info: "Git is a distributed version-control system for tracking changes in source code during software development." },
    { id: 1, topic: "Docker", info: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers." },
    { id: 3, topic: "Jenkins", info: "Jenkins is an open source automation server. Jenkins helps to automate the non-human part of the software development process, with continuous integration and facilitating technical aspects of continuous delivery." },
    { id: 2, topic: "CI/CD", info: "Continuous Integration and Continuous Delivery are practices that automate the process from code commit to production deployment." },
];

app.use(cors());


// Define a route for the root path '/'
app.get('/', (req, res) => {
    res.send('Hello from Express js'); // Send a simple response for the root path
});

app.get('/api/devops', (req, res) => {
    res.json(devOpsData);
});

app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`);
});
