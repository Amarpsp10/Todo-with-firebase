import { List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'

export default function Todo(props) {
    return (
      <List className={'todo_list'}>
          <ListItem>
              <ListItemText primary='Todo' secondary={props.text}/>
          </ListItem>
      </List>
    )
}
