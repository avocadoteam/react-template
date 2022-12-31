import { render, screen } from '@testing-library/react';
import { clickableDiv } from '../clickable-div/ClickableDiv.css';
import { CustomDiv } from './CustomDiv';
import { customDiv } from './CustomDiv.css';

describe('CustomDiv component', () => {
  let wrapper: HTMLElement;
  beforeEach(() => {
    render(<CustomDiv>JoJo</CustomDiv>);
    wrapper = screen.getByTestId('custom-div');
  });
  test('render component', () => {
    expect(wrapper).toBeInTheDocument();
  });
  test('text of component equal to "JoJo"', () => {
    expect(screen.getByText('JoJo')).toBeInTheDocument();
  });
  test(`className equal to "${clickableDiv({ clickable: false })} ${customDiv} undefined"`, () => {
    expect(wrapper.className).toEqual(`${clickableDiv({ clickable: false })} ${customDiv} undefined`);
  });
  test(`className with prop className "1" equal to "${clickableDiv({ clickable: false })} ${customDiv} 1"`, () => {
    render(
      <CustomDiv className="1" dataTestId="1">
        JoJo
      </CustomDiv>,
    );
    const wrapper = screen.getByTestId('1');

    expect(wrapper.className).toEqual(`${clickableDiv({ clickable: false })} ${customDiv} 1`);
  });
});
