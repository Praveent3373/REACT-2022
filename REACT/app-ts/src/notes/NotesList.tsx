import React, { FC } from 'react'
import { Note } from './note.model'
import Notes from './Notes'

type Props = {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

export const NotesList:FC<Props> = ({notes, setNotes}) => {
  const handleDelete = (id: string) => {
      setNotes(notes.filter(note => note.id !== id))
  }
  const renderNotes = () => {
    return notes.map(note => {
      return <Notes key={note.id} note={note} handleDelete = {handleDelete} ></Notes>
    })
  }
  return (
    <div>{renderNotes()}</div>
  )
}