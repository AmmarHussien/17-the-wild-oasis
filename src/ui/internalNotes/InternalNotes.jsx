import { useState } from "react";
import "./InternalNotes.css"; // Make sure to create this CSS file

const InternalNotes = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    if (note.trim() !== "") {
      setNotes([...notes, note]);
      setNote("");
    }
  };

  return (
    <div className="internal-notes">
      <h2>Internal Notes</h2>
      <div className="notes-display">
        {notes.length === 0 ? (
          <div className="no-note">There is no note</div>
        ) : (
          notes.map((note, index) => (
            <div key={index} className="note">
              {note}
            </div>
          ))
        )}
      </div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note here"
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default InternalNotes;
