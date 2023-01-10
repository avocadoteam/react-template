import { render, screen } from '@testing-library/react';
import { clickableDiv } from '../clickable-div/ClickableDiv.css';
import { IconButton } from './IconButton';
import { iconButton } from './IconButton.css';
import { vi } from 'vitest';

describe('IconButton component', () => {
  let wrapper: HTMLElement;
  beforeEach(() => {
    render(<IconButton onClick={vi.fn()}>Icon</IconButton>);
    wrapper = screen.getByTestId('icon-button');
  });
  test('render component', () => {
    expect(wrapper).toBeInTheDocument();
  });
  test('render children', () => {
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });
  test(`className equal to "${clickableDiv({ clickable: true })} ${iconButton({ type: 'primary' })}"`, () => {
    expect(wrapper.className).toEqual(`${clickableDiv({ clickable: true })} ${iconButton({ type: 'primary' })}`);
  });
  test(`className with prop type negative equal to "${clickableDiv({ clickable: true })} ${iconButton({
    type: 'negative',
  })}"`, () => {
    render(
      <IconButton dataTestId="1" type="negative" onClick={vi.fn()}>
        1
      </IconButton>,
    );
    const wrapper = screen.getByTestId('1');
    expect(wrapper.className).toEqual(`${clickableDiv({ clickable: true })} ${iconButton({ type: 'negative' })}`);
  });
  test(`className equal to "${clickableDiv({ clickable: true })} ${iconButton({ type: 'transparent' })}"`, () => {
    render(
      <IconButton dataTestId="1" type="transparent" onClick={vi.fn()}>
        1
      </IconButton>,
    );
    const wrapper = screen.getByTestId('1');
    expect(wrapper.className).toEqual(`${clickableDiv({ clickable: true })} ${iconButton({ type: 'transparent' })}`);
  });
});
