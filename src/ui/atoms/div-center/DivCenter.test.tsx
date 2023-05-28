import { render, screen } from '@testing-library/react';
import { DivCenter } from './DivCenter';
import { divCenter } from './DivCenter.css';

describe('Test DivCenter component', () => {
  let wrapper: HTMLElement;
  beforeEach(() => {
    render(<DivCenter>divText</DivCenter>);
    wrapper = screen.getByTestId('div-center');
  });
  test('render component', () => {
    expect(wrapper).toBeInTheDocument();
  });
  test('text of component equal to "divText"', () => {
    expect(screen.getByText('divText')).toBeInTheDocument();
  });
  test(`className equal to " ${divCenter} undefined"`, () => {
    expect(wrapper.className).toEqual(` ${divCenter} undefined`);
  });
  test(`className with prop "1" equal to " ${divCenter} 1"`, () => {
    render(
      <DivCenter className="1" dataTestId="1">
        1
      </DivCenter>,
    );
    const wrapper = screen.getByTestId('1');

    expect(wrapper.className).toEqual(` ${divCenter} 1`);
  });
});
