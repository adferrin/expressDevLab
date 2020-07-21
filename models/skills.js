module.exports = {
    getAll,
    getOne
}


//Database
const skills = [
    {text: 'html', done: true},
    {text: 'CSS', done: true},
    {text: 'JavaScript', done: true},
    {text: 'MVC', done: true},    
];

//functions

function getAll() {
    return skills
}

function getOne(id) {
    return skills[id]
}