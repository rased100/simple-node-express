const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello rsd from my second node server with node mon auto 4')
})

const users = [
    { id: 0, name: 'Shabana', email: 'shabana@gmsil.com', phone: '01751341801' },
    { id: 1, name: 'sakib', email: 'sakib@gmsil.com', phone: '01751341802' },
    { id: 2, name: 'manna', email: 'manna@gmsil.com', phone: '01751341803' },
    { id: 3, name: 'sharukh', email: 'sharukh@gmsil.com', phone: '01751341804' },
    { id: 4, name: 'sharukh2', email: 'sharukh2@gmsil.com', phone: '01751341805' },
    { id: 5, name: 'sharukh3', email: 'sharukh3@gmsil.com', phone: '01751341806' }
]

app.get('/users', (req, res) => {
    // console.log(req.query.search);
    const search = req.query.search;

    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }
})

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    res.send('inside post')
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id;
    const user = users[id]
    res.send(user);

})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('fazli tok');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})