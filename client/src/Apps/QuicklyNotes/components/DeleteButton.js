import React from 'react'

const DeleteButton = (props) => {
  return (
    // delete button on NoteCard
    <div onClick={props.deleteNote}>X</div>
  )
}

export default DeleteButton