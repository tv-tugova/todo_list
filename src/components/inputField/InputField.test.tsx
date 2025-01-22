import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

test("добавление задачи", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/What needs to be done?/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "Добавляемая задача" } });
  fireEvent.click(addButton);

  expect(screen.getByText("Добавляемая задача")).toBeInTheDocument();
});
