import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { clickableDiv } from '../clickable-div/ClickableDiv.css';
import { IconButton } from './IconButton';
import { iconButton } from './IconButton.css';

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
  test(`className equal to "${clickableDiv({ clickable: true })} ${iconButton({ scheme: 'primary' })}"`, () => {
    expect(wrapper.className).toEqual(`${clickableDiv({ clickable: true })} ${iconButton({ scheme: 'primary' })}`);
  });
  test(`className with prop type negative equal to "${clickableDiv({ clickable: true })} ${iconButton({
    scheme: 'negative',
  })}"`, () => {
    render(
      <IconButton dataTestId="1" scheme="negative" onClick={vi.fn()}>
        1
      </IconButton>,
    );
    const wrapper = screen.getByTestId('1');
    expect(wrapper.className).toEqual(`${clickableDiv({ clickable: true })} ${iconButton({ scheme: 'negative' })}`);
  });
  test(`className equal to "${clickableDiv({ clickable: true })} ${iconButton({ scheme: 'transparent' })}"`, () => {
    render(
      <IconButton dataTestId="1" scheme="transparent" onClick={vi.fn()}>
        1
      </IconButton>,
    );
    const wrapper = screen.getByTestId('1');
    expect(wrapper.className).toEqual(`${clickableDiv({ clickable: true })} ${iconButton({ scheme: 'transparent' })}`);
  });
});
