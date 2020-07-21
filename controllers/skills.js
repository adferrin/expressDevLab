const Skill = require('../models/skills');

module.exports = {
    index,
    show
}


function index(req, res)  {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'My Dev Skills'
    });
};

function show(req, res) {
    res.render('skills/show', {
        title: 'My Dev Skills',
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    })
}