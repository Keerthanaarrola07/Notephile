// const users = [
//     {
//       title: "web development",
//       content: "complete project",
//     },
//     {
//       title: "grocery list",
//       content: "onions, carrots",
//     }
//   ]
  
//   // CRUD functions
//   let getNotes = () => notes;
  
//   function getNotes2() {
//     return notes;
//   }
  
//   // export functions so can utilize them in another
//   // file in application
//   module.exports = {getNotes, getNotes2}


const con = require("./db_connect");

async function createTable() {
  let sql = `
    CREATE TABLE IF NOT EXISTS notes (
      NoteId INT NOT NULL AUTO_INCREMENT,
      UserId VARCHAR(25) NOT NULL,
      title VARCHAR(255) NOT NULL,
      content VARCHAR(255) NOT NULL,
      CONSTRAINT NotePk PRIMARY KEY(NoteId));`

      await con.query(sql)
}

createTable()


async function getNotesByUserId(userId) {
  let sql = `
    SELECT * FROM notes WHERE UserId=${userId}
  `
  return await con.query(sql);
}

// Register (Create) New User
async function addNote(note) {

  let sql = `
    INSERT INTO notes(UserId,title, content)
    VALUES("${note.UserId}", "${note.title}", "${note.content}")
  `

  await con.query(sql)
  return true;
}

// Update - CRUD
async function editNote(note) {
  let updatedNote = await getNoteById(note.NoteId)
  if(updatedNote.length < 0) throw Error("note not available!")

  let sql = `UPDATE notes
    SET title = "${note.title}", content="${note.content}"
    WHERE NoteId = ${note.NoteId}
  `
  await con.query(sql)
  updatedNote = await getNoteById(note.NoteId)
  return updatedNote[0]
}

// Delete User 
async function deleteNote(note) {
  let sql = `DELETE FROM notes
    WHERE NoteId = ${note.NoteId}
  `
  await con.query(sql)
}

// Useful functions
async function getNoteById(noteId) {
  let sql = `
    SELECT * FROM notes 
    WHERE NoteId = "${noteId}" 
  `
  return await con.query(sql)
}

module.exports = {getNotesByUserId, addNote, editNote, deleteNote}


