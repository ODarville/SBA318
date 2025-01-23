////////////////////////////
//// Require Statement /////
////////////////////////////
const express = require('express');
const router = express.Router();

const notes = require('../Data/notes');

////////////////////////////
////// Middleware //////////
////////////////////////////



////////////////////////////
///////// Routes ///////////
////////////////////////////

router.get('/', (req, res) => {
    const notes = notes.find((a, i) =>{
        if(a.id === req.params.id){
            res.send();
        }else {
            res.send ('Note not found');
        }
    });
});

router.post('/', (req, res) => {
    if(req.body.content) {
        const note = {
            id: notes.length + 1,
            content: req.body.content,
            important: Boolean(req.body.important),
            // date: new Date()
        }
        notes.push(note);
        res.json(note);
    }else {
        res.send('Note content missing');
    }
});

route.patch('/:id', (req, res) => {
    const notes = notes.find((a, i) =>{
        if(a.id === req.params.id){
            
        }
    })
    const id = Number(req.params.id);
    const note = notes.find(note => note.id === id);
    note.important = !note.important;
});

router.delete('/:id', (req, res) => {
    const notes = notes.find((a, i) =>{
        if(a.id === req.params.id){
            notes.splice(i, 1);
            res.send('Note deleted');
        }else {
            res.send('Note not found');
        }
    })
});


////////////////////////////
///////// Exports //////////
////////////////////////////

module.exports = router;
