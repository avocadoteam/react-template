import { style } from '@vanilla-extract/css';

export const onboardingModal = style({
  paddingTop: '20px',
  paddingBottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '12px',
});
export const onboardingModalList = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '200px',
  gap: '8px',
});
