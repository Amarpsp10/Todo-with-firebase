import { Button, List, ListItem, ListItemText, makeStyles, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import db from './firebase'
import {Delete} from '@material-ui/icons'
    
    const useStyle = makeStyles((theme)=>({
        paper:{
            position:'absolute',
            width:400,
            backgroundColor: '2px solic #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2,4,3) 
        },
    }))

export default function Todo(props) {
    const[input, setInput] = useState(props.todo.todo)
    const classes = useStyle();
    const[isopen, setopen] = useState(false)

    const updateTodo=()=>{
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        },{merge:true});
       setopen(false)
    }
    return (
       <>
       <Modal
         open = {isopen}
         onclose = {e => setopen(false)}
        >
           <div  className={classes.paper}>
               <h1>Update todo</h1>
               <input value={input} onChange={e=>setInput(e.target.value)} />
               <button onClick={()=>updateTodo()}>update</button>     
           </div>
       </Modal>
      <List className={'todo_list'}>
          <ListItem>
              <ListItemText primary='Todo' secondary={props.todo.todo}/>
          </ListItem>
          <Delete onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
          <button onClick={()=>setopen(true)}>Edit</button>
      </List>
      </>
    )
}
