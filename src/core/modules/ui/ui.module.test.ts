import { Dimensions, Snackbar } from '@core/models';
import { createGetStateProp } from '@core/utils';
import { uiEvents } from './events';
import { $ui } from './store';

const getStateProp = createGetStateProp($ui);

describe('ui module', () => {
  beforeEach(() => {
    uiEvents.setDefaultState();
  });

  test('event setDimensions({width: 50, height: 50}) should set dimensions to {width: 50, height: 50}', () => {
    const dimensions: Dimensions = { width: 50, height: 50 };
    uiEvents.setDimensions(dimensions);
    expect(getStateProp('dimensions')).toStrictEqual(dimensions);
  });

  test('event setAppearance("dark") should set appearance to dark', () => {
    uiEvents.setAppearance('dark');
    expect(getStateProp('appearance')).toEqual('dark');
  });
  test('event setAppearance("light") should set appearance to light', () => {
    uiEvents.setAppearance('dark');
    uiEvents.setAppearance('light');
    expect(getStateProp('appearance')).toEqual('light');
  });

  test('event setSnackbar({message: "hello", type: "success"}) should set snackbar to {message: "hello", type: "success"}', () => {
    const snackbar: Snackbar = { message: 'hello', type: 'success' };
    uiEvents.setSnackbar(snackbar);
    expect(getStateProp('snackbar')).toStrictEqual(snackbar);
  });
  test('event setSnackbar(null) should set snackbar to null', () => {
    uiEvents.setSnackbar({ message: 'hello', type: 'error' });
    uiEvents.setSnackbar(null);
    expect(getStateProp('snackbar')).toEqual(null);
  });
});
