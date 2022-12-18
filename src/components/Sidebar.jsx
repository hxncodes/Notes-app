import React from "react";

export default function Sidebar(props) {
  // taking the notes array and mapping it to show notes
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      {/* Conditionaly styling Notes title on selected base */}
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        {/* taking only first line of notes and showing as heading in sidebar */}
        <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>

        <button
          className="delete-btn"
          onClick={(event) => props.deleteNote(event, note.id)}
        >
          <i className="gg-trash trash-icon"></i>
        </button>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}
