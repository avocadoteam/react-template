import { fireEvent, render, screen } from '@testing-library/react';
import { vars } from '@ui/theme/theme.css';
import { CustomButton } from './CustomButton';

describe('Test CustomizedButton component', () => {
  const testId = 'customized-button';
  const primaryBtn = vars.all.btn.primary;
  beforeEach(() => {
    render(
      <CustomButton onClick={jest.fn()} type="primary">
        Click me!
      </CustomButton>,
    );
  });
  test('render component', () => {
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
  test('render children', () => {
    expect(screen.getByText('Click me!')).toBeInTheDocument();
  });
  test('handle click and incremet value', () => {
    let i = 0;
    const handleClick = () => {
      i++;
    };

    const btn = screen.getByTestId(testId);
    btn.onclick = handleClick;
    fireEvent.click(btn);

    expect(i).toEqual(1);
  });
});
