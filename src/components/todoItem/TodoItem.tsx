import React from "react";
import {
  ListItem,
  Divider,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

interface TodoItemProps {
  task: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  completed,
  onToggle,
  onDelete,
}) => {
  return (
    <>
      <ListItem
        sx={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        <Checkbox
          sx={{
            "& .MuiSvgIcon-root": {
              color: "primary.main",
            },
            "&.Mui-checked .MuiSvgIcon-root": {
              color: "primary.main",
            },
          }}
          checked={completed}
          onChange={onToggle}
        />
        <ListItemText primary={task} />
        <IconButton aria-label="Delete" onClick={onDelete}>
          <ClearIcon />
        </IconButton>
      </ListItem>
      <Divider />
    </>
  );
};

export default TodoItem;
