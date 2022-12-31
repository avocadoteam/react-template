import { render, screen } from '@testing-library/react';
import { clickableDiv } from '../clickable-div/ClickableDiv.css';
import { customDiv } from '../custom-div/CustomDiv.css';
import { CustomCell } from './CustomCell';
import { cell, cellSpaceBetween } from './CustomCell.css';

describe('CustomCell component', () => {
  const testId = 'custom-cell';
  let wrapper: HTMLElement;
  beforeEach(() => {
    render(
      <CustomCell before="text1" after="text3" pt={1} pb={2} pl={3} pr={4} space={5}>
        text2
      </CustomCell>,
    );
    wrapper = screen.getByTestId(testId);
  });
  test('render component', () => {
    expect(wrapper).toBeInTheDocument();
  });
  test(`className equal to "${clickableDiv({ clickable: false })} ${customDiv} ${cell} undefined"`, () => {
    expect(wrapper.className).toEqual(`${clickableDiv({ clickable: false })} ${customDiv} ${cell} undefined`);
  });
  test('style equal to {paddingTop: 1px, paddingBottom: 2px, paddingLeft: 3px, paddingRight: 4px }', () => {
    expect(wrapper.style).toMatchObject({
      paddingTop: '1px',
      paddingBottom: '2px',
      paddingLeft: '3px',
      paddingRight: '4px',
    });
  });
  test('render custom-cell-before', () => {
    expect(screen.getByTestId(`${testId}-before`)).toBeInTheDocument();
  });
  test('text of custom-cell-before equal to text1', () => {
    expect(screen.getByText('text1')).toBeInTheDocument();
  });
  test('render custom-cell-space-between', () => {
    expect(screen.getByTestId(`${testId}-space-between`));
  });
  test('custom-cell-space-between marginLeft equal to 5px', () => {
    expect(screen.getByTestId(`${testId}-space-between`).style.marginLeft).toEqual('5px');
  });
  test(`custome-cell-space-between className equal to "${cellSpaceBetween}"`, () => {
    expect(screen.getByTestId(`${testId}-space-between`).className).toEqual(cellSpaceBetween);
  });
  test(`custom-cell-content render`, () => {
    expect(screen.getByTestId(`${testId}-content`)).toBeInTheDocument();
  });
  test('text of custom-cell-content equal to "text2"', () => {
    expect(screen.getByText('text2')).toBeInTheDocument();
  });
  test(`custom-cell-after render`, () => {
    expect(screen.getByTestId(`${testId}-after`)).toBeInTheDocument();
  });
  test('text of custom-cell-after equal to "text2"', () => {
    expect(screen.getByText('text3')).toBeInTheDocument();
  });
});
