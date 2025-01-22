import React, { useState } from "react";
import {
  Paper,
  List,
  Box,
  Typography,
  ButtonGroup,
  Button,
} from "@mui/material";
import TodoItem from "../todoItem/TodoItem";
import InputField from "../inputField/InputField";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTask = (text: string) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const deleteCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 100,
          color: "primary.main",
          fontFamily: "'Lato', sans-serif",
        }}
        align="center"
        gutterBottom
      >
        todos
      </Typography>
      <Paper elevation={6} sx={{ padding: 3 }}>
        <InputField onAddTask={addTask} />
        <List>
          {filteredTasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task.text}
              completed={task.completed}
              onToggle={() => toggleTask(task.id)}
              onDelete={() => deleteTask(task.id)}
            />
          ))}
        </List>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Typography>
            {tasks.filter((task) => !task.completed).length} items left
          </Typography>
          <ButtonGroup color="primary">
            <Button
              variant={filter === "all" ? "contained" : "outlined"}
              onClick={() => setFilter("all")}
            >
              All
            </Button>
            <Button
              variant={filter === "active" ? "contained" : "outlined"}
              onClick={() => setFilter("active")}
            >
              Active
            </Button>
            <Button
              variant={filter === "completed" ? "contained" : "outlined"}
              onClick={() => setFilter("completed")}
            >
              Completed
            </Button>
          </ButtonGroup>
          <Button onClick={deleteCompleted}>Clear completed</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default TodoList;
