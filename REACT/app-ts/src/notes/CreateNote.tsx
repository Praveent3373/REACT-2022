import React, { useRef, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { Note } from './note.model'

type Props = {
  notes: Note[]
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNote = (props: Props) => {
  const [error, setError] = useState<string>('');
  const titleRef = useRef<HTMLInputElement | null>(null);
  const noteRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);
  const {notes, setNotes} = props
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
      e.preventDefault();
      if(titleRef.current?.value === "" || noteRef.current?.value === ""){
         return setError('All fields are mandatory')
      }
      setError("");
      setNotes([...notes, {
        id: (new Date).toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (noteRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: (new Date).toString()
      }]);
      
      (titleRef.current as HTMLInputElement).value = "";
      (noteRef.current as HTMLTextAreaElement).value= "";
      (colorRef.current as HTMLInputElement).value = ""

  }
  return (
    <>
      {error && <Alert variant='danger'>{error}</Alert>}
      <h2>Create Notes</h2>
      <Form className="mt-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' placeholder='Enter title' ref={titleRef} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label>Notes</Form.Label>
          <Form.Control as="textarea" placeholder='Enter your notes'  ref={noteRef} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
          <Form.Control type='color' id="colorInput" defaultValue='#dfdfdf'  ref={colorRef} />
        </Form.Group>
        <Button type="submit" variant='primary'>Submit</Button>
      </Form>
    </>
  )
}

export default CreateNote