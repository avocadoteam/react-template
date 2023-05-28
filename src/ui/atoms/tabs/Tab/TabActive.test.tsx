import { render, screen } from '@testing-library/react';
import { divCenter } from '@ui/atoms/div-center/DivCenter.css';
import { typography } from '@ui/theme';
import { TabActive } from './Tab';
import { tab } from './Tab.css';

describe('TabActive component', () => {
  let wrapper: HTMLElement;
  beforeEach(() => {
    render(<TabActive>active</TabActive>);
    wrapper = screen.getByTestId('tab-active');
  });
  test('render tab-default', () => {
    expect(wrapper).toBeInTheDocument();
  });
  test('text of component equal to "active"', () => {
    expect(screen.getByText('active')).toBeInTheDocument();
  });
  test(`className equal to " ${divCenter} ${tab({ type: 'active' })} ${typography({
    variant: 'tab',
  })}"`, () => {
    expect(wrapper.className).toEqual(
      ` ${divCenter} ${tab({ type: 'active' })} ${typography({
        variant: 'tab',
      })}`,
    );
  });
});
