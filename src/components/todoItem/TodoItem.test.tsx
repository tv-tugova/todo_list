import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

test("удаление задачи", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/What needs to be done?/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "Удаляемая задача" } });
  fireEvent.click(addButton);

  const deleteButton = screen.getByLabelText(/Delete/i);
  fireEvent.click(deleteButton);

  expect(screen.queryByText("Удаляемая задача")).not.toBeInTheDocument();
});

test("отметка задачи как выполненной", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/What needs to be done?/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "Выполненная задача" } });
  fireEvent.click(addButton);

  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
});
