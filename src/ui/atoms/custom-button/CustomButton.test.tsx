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
  test(`background equal to ${primaryBtn.background}`, () => {
    expect(screen.getByTestId(testId).style).toHaveProperty('background', primaryBtn.background);
  });
  test(`color equal to ${primaryBtn.color}`, () => {
    expect(screen.getByTestId(`${testId}-text`).style).toHaveProperty('color', primaryBtn.color);
  });
  test('borderRadius equal to 20px', () => {
    expect(screen.getByTestId(testId).style).toHaveProperty('borderRadius', '20px');
  });
  test('letterSpacing equal to 0.5px', () => {
    expect(screen.getByTestId(`${testId}-text`).style).toHaveProperty('letterSpacing', '0.5px');
  });
  test('width equal to 319px', () => {
    expect(screen.getByTestId(testId).style).toHaveProperty('width', '319px');
  });
  test('minWidth equal to 319px', () => {
    expect(screen.getByTestId(testId).style).toHaveProperty('minWidth', 'auto');
  });
  test('height equal to 50px', () => {
    expect(screen.getByTestId(testId).style).toHaveProperty('height', '50px');
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
  test('fontFamily equal to SFProRoundedMedium', () => {
    expect(screen.getByTestId(`${testId}-text`).style).toHaveProperty('fontFamily', 'SFProRoundedMedium');
  });
  test('fontSize equal to 17px', () => {
    expect(screen.getByTestId(`${testId}-text`).style).toHaveProperty('fontSize', '17px');
  });
});
