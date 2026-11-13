
import React, { useState } from "react";
import "./App.css";

function App() {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function addNote() {

    if (title === "" || description === "") {
      alert("Please fill all fields");
    }
    else {
      const newNote = {
        id: notes.length + 1,
        title: title,
        description: description
      };

      setNotes([...notes, newNote]);

      setTitle("");
      setDescription("");
    }
  }

  function deleteNote(id) {
    const newNotes = notes.filter(
      (note) => note.id !== id
    );

    setNotes(newNotes);
  }

  return (
    <div className="container">

      <h1>MemoMate</h1>
      <p>Write and save your notes</p>

      <div className="input-box">

        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter your note"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={addNote}>
          Add Note
        </button>

      </div>

      <h2>All Notes</h2>

      <div className="notes">

        {notes.map((note) => (
          <div className="note" key={note.id}>

            <h3>{note.title}</h3>

            <p>{note.description}</p>

            <button onClick={() => deleteNote(note.id)}>
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;

