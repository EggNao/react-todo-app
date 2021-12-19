import React from 'react'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { todoListProps } from '../types/type'

const TodoList: React.FC<todoListProps> = (props) => {
  const [checked, setChecked] = React.useState([0])

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value)
    console.log(currentIndex)

    const newChecked = [...checked]
    console.log(newChecked)

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    setChecked(newChecked)
    console.log(setChecked)
  }

  const checkboxToggle = (
    event: React.ChangeEvent<HTMLInputElement>,
    num: number
  ) => {
    const Item_cp = props.Items
    Item_cp[num].done = true
    props.setItems(Item_cp)
    console.log(Item_cp)
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      style={{ margin: 'auto' }}
    >
      {props.Items.map((value, index) => {
        const labelId = `checkbox-list-label-${value}`

        return (
          <ListItem
            key={value.count}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value.count)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  id={value.id}
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  onChange={(event) => checkboxToggle(event, index)}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={value.text}
                style={{ textTransform: 'none' }}
              />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

export default TodoList
