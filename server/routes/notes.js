const express = require("express")
const Notes = require("../models/notes")
const router = express.Router()

router

.post('/add-note', async (req, res) => {
  try {
    const users = await Notes.addNote(req.body);
    res.send({success:"Note added successfully"})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})




.put('/edit-note', async (req, res) => {
  try {
    let note = await Notes.editNote(req.body)
    res.send(note);
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

.delete('/delete', async (req, res) => {
  try {
    await Notes.deleteNote(req.body)
    res.send({success: "Good Riddance >:("})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

.get("/get-notes-by-userid/:userId",async(req,res)=>{
  try {
    const notes = await Notes.getNotesByUserId(req.params.userId)
    res.send(notes);
    
  } catch (err) {
    res.status(401).send({message: err.message})
    
  }
})

module.exports = router;