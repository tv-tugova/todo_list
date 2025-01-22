import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

interface InputFieldProps {
  onAddTask: (task: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 1, marginBottom: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="What needs to be done?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
        onClick={handleAddTask}
      >
        Add
      </Button>
    </Box>
  );
};

export default InputField;
