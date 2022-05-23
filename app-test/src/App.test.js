import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';


test('renders My Test', () => {
  render(<App />);

  const linkElement = screen.getByText(/My Test/i);
  expect(linkElement).toHaveTextContent(/My Test/i);
});

test('renders Juda', () => {
  render(<App />);

  const linkElement = screen.getByText(/Juda/i);
  expect(linkElement).toHaveTextContent(/Juda/i);
});

test("increment button is clicked", ()=>{
  render(<App/>);
  const displayValue = screen.getByTitle("Display");

  userEvent.click(screen.getByRole('button',{name: '+'}));
  expect(displayValue.textContent).toBe("1");
});

test("decrement button is clicked", ()=>{
  render(<App/>);
  const displayValue = screen.getByTitle("Display");

  userEvent.click(screen.getByRole('button',{name: '-'}));
  expect(displayValue.textContent).toBe("-1");
});
