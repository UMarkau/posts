import { render, screen, fireEvent } from "@testing-library/react";
import { Button, IButtonProps } from "./Button";

describe("Button", () => {
  const BUTTON_TITLE = "button title";

  const defaultProps: IButtonProps = {
    children: BUTTON_TITLE,
    onClick: jest.fn(),
  };

  const renderButton = (props?: Partial<IButtonProps>) => {
    render(<Button {...{ ...defaultProps, ...props }} />);
  };

  it("renders correctly", () => {
    renderButton();
    const button = screen.getByText(BUTTON_TITLE);
    expect(button).toBeInTheDocument();
  });

  it("triggers onClick handler on click", () => {
    const handleCLick = jest.fn();
    renderButton({ onClick: handleCLick });
    const button = screen.getByText(BUTTON_TITLE);
    fireEvent.click(button);
    expect(handleCLick).toHaveBeenCalled();
  });
});
