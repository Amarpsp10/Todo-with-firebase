import {useEffect, useState} from 'react'
import {Button, FormControl, Input, InputLabel} from '@material-ui/core'
import Todo from './Todo'
import './App.css';
import db from './firebase'
import firebase from 'firebase'
function App() {
  
  const[todos, setTopdos] = useState([]);
  const[input, setInput] = useState('');

  useEffect(()=>{
     db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
       setTopdos(snapshot.docs.map(doc=>({id:doc.id, todo: doc.data().todo})))
     })
  },[] )

  const addTodo = (e) =>{
    e.preventDefault(); // dont refresh the page
    // setTopdos([...todos, input])
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() 
    })
    setInput('')
  }
  return (
    <div className="App">
      <h1>hello clever programmer</h1>
      <form>
      <FormControl>
        <InputLabel>Write a to do</InputLabel>
        <Input onChange={(e)=>setInput(e.target.value)} value={input}/>
      </FormControl>
      <Button type='submit' disabled={!input} onClick={(e)=>addTodo(e)} variant='contained' color='primary'>Add Todo</Button>
      </form>
      <ul>
        {
          todos.map((data) =><Todo todo={data}/>)
        }
      </ul>
    </div>
  );
}

export default App;
