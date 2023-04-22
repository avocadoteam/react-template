import { fireEvent, render, screen } from '@testing-library/react';
import { typography } from '@ui/theme';
import { vi } from 'vitest';
import { CustomButton } from './CustomButton';
import { btn } from './CustomButton.css';

describe('Test CustomizedButton component', () => {
  const vkBtnClassName =
    'vkuiButton vkuiButton--size-s vkuiButton--mode-primary vkuiButton--appearance-accent vkuiButton--align-center vkuiButton--sizeY-none vkuiButton--android vkuiTappable vkuiTappable--sizeX-none vkuiTappable--hover-has vkuiTappable--hasActive';
  let wrapper: HTMLElement;
  beforeEach(() => {
    render(
      <CustomButton onClick={vi.fn()} scheme="primary">
        Click me!
      </CustomButton>,
    );
    wrapper = screen.getByTestId('custom-button');
  });
  test('render component', () => {
    expect(wrapper).toBeInTheDocument();
  });
  test('render children', () => {
    expect(screen.getByText('Click me!')).toBeInTheDocument();
  });
  test(`className equal to "${btn({ scheme: 'primary' })} ${typography({ variant: 'btn' })}"`, () => {
    expect(wrapper.className).toEqual(`${btn({ scheme: 'primary' })} ${typography({ variant: 'btn' })} ${vkBtnClassName}`);
  });
  test(`className with prop type negative equal to "${btn({ scheme: 'negative' })} ${typography({
    variant: 'btn',
  })}"`, () => {
    render(
      <CustomButton dataTestId="1" scheme="negative" onClick={vi.fn()}>
        1
      </CustomButton>,
    );
    const wrapper = screen.getByTestId('1');
    expect(wrapper.className).toEqual(`${btn({ scheme: 'negative' })} ${typography({ variant: 'btn' })} ${vkBtnClassName}`);
  });
  test(`className equal to "${btn({ scheme: 'transparent' })} ${typography({ variant: 'btn' })}"`, () => {
    render(
      <CustomButton dataTestId="1" scheme="transparent" onClick={vi.fn()}>
        1
      </CustomButton>,
    );
    const wrapper = screen.getByTestId('1');
    expect(wrapper.className).toEqual(
      `${btn({ scheme: 'transparent' })} ${typography({ variant: 'btn' })} ${vkBtnClassName}`,
    );
  });
  test('handle click', () => {
    let i = 0;
    const handleClick = () => ++i;

    render(
      <CustomButton dataTestId="1" onClick={handleClick}>
        1
      </CustomButton>,
    );
    const btn = screen.getByTestId('1');
    fireEvent.click(btn);

    expect(i).toEqual(1);
  });
  test('handle disabled click', () => {
    let i = 0;
    const handleClick = () => ++i;

    render(
      <CustomButton disabled dataTestId="1" onClick={handleClick}>
        1
      </CustomButton>,
    );
    const btn = screen.getByTestId('1');
    fireEvent.click(btn);

    expect(i).toEqual(0);
  });
});
