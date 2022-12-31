import { fireEvent, render, screen } from '@testing-library/react';
import { ClickableDiv } from './ClickableDiv';
import { clickableDiv } from './ClickableDiv.css';

describe('ClickableDiv component', () => {
  let wrapper: HTMLElement;
  beforeEach(() => {
    render(<ClickableDiv>Click</ClickableDiv>);
    wrapper = screen.getByTestId('clickable-div');
  });
  test('render component', () => {
    expect(wrapper).toBeInTheDocument();
  });
  test('text of component equal to "Click"', () => {
    expect(screen.getByText('Click')).toBeInTheDocument();
  });
  test(`className equal to "${clickableDiv({ clickable: false })} undefined"`, () => {
    expect(wrapper.className).toEqual(`${clickableDiv({ clickable: false })} undefined`);
  });
  test('handle click', () => {
    let i = 0;
    const onClick = () => ++i;

    render(<ClickableDiv onClick={onClick} dataTestId="1" />);
    const wrapper = screen.getByTestId('1');
    fireEvent.click(wrapper);

    expect(i).toEqual(1);
  });
  test('handle disabled click', () => {
    let i = 0;
    const onClick = () => ++i;

    render(<ClickableDiv disabled onClick={onClick} dataTestId="1" />);
    const wrapper = screen.getByTestId('1');
    fireEvent.click(wrapper);

    expect(i).toEqual(0);
  });
  test(`className with onClick equal to "${clickableDiv({ clickable: true })} undefined"`, () => {
    render(<ClickableDiv onClick={() => console.log('click')} dataTestId="1" />);
    const wrapper = screen.getByTestId('1');

    expect(wrapper.className).toEqual(`${clickableDiv({ clickable: true })} undefined`);
  });
  test(`className with prop className "3" equal to "${clickableDiv({ clickable: false })} 3"`, () => {
    render(<ClickableDiv className="3" dataTestId="1" />);
    const wrapper = screen.getByTestId('1');

    expect(wrapper.className).toEqual(`${clickableDiv({ clickable: false })} 3`);
  });
});
