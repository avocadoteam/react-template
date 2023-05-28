import { render, screen } from '@testing-library/react';
import { clickableDiv } from '@ui/atoms/clickable-div/ClickableDiv.css';
import { divCenter } from '@ui/atoms/div-center/DivCenter.css';
import { typography } from '@ui/theme';
import { vi } from 'vitest';
import { TabDefault } from './Tab';
import { tab } from './Tab.css';

describe('TabDefault component', () => {
  let wrapper: HTMLElement;
  beforeEach(() => {
    render(<TabDefault onClick={vi.fn}>default</TabDefault>);
    wrapper = screen.getByTestId('tab-default');
  });
  test('render tab-default', () => {
    expect(wrapper).toBeInTheDocument();
  });
  test('text of component equal to "default"', () => {
    expect(screen.getByText('default')).toBeInTheDocument();
  });
  test(`className equal to "${clickableDiv()} ${divCenter} ${tab({ type: 'default' })} ${typography({
    variant: 'tab',
  })}"`, () => {
    expect(wrapper.className).toEqual(
      `${clickableDiv()} ${divCenter} ${tab({ type: 'default' })} ${typography({
        variant: 'tab',
      })}`,
    );
  });
});
