import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CreateNote from './CreateNote'
import Header from './Header';
import { Note } from './note.model';
import { NotesList } from './NotesList';

const NotesIndex = () => {
    const [notes, setNotes] = React.useState<Note[]>([{
        id: (new Date).toString(),
        title: 'Meetings',
        text: 'Schedule meeting with UI team',
        color: '#dddd',
        date: (new Date()).toString()
      }])
  return (
    <>
    <Header/>
    <Container className='mt-5'>
      <Row>
        <Col>
            <NotesList notes = {notes} setNotes = {setNotes}/>
        </Col>
      </Row>
      <Row>
        <Col>
            <CreateNote notes = {notes} setNotes = {setNotes}/>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default NotesIndex