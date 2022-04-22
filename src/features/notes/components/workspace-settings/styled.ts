import styled from '@emotion/styled';
import * as Modal from '@radix-ui/react-dialog';
import { keyframes } from '@emotion/react';
import * as colors from '@radix-ui/colors';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const overlayHide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -50%) scale(.75)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const contentHide = keyframes({
  '0%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
  '100%': { opacity: 0, transform: 'translate(-50%, -50%) scale(.75)' },
});

export const WorkspaceSettingsRoot = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: 8,
});

export const WorkspaceTitle = styled.span({
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '21px',
  letterSpacing: '0.02em',
});

export const ModalRoot = styled(Modal.Root)({});

export const ModalTrigger = styled(Modal.Trigger)({});

export const ModalOverlay = styled(Modal.Overlay)({
  backgroundColor: colors.blackA.blackA9,
  position: 'fixed',
  inset: 0,
  zIndex: 400,
  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state=open]': {
      animation: `${overlayShow} 250ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state=closed]': {
      animation: `${overlayHide} 250ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
  },
});

export const ModalContent = styled(Modal.Content)({
  position: 'fixed',
  backgroundColor: 'inherit',
  padding: 8,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  zIndex: 401,

  '&:focus': {
    outline: 'none',
  },

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state=open]': {
      animation: `${contentShow} 250ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state=closed]': {
      animation: `${contentHide} 250ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
  },
});

export const ModalTitle = styled(Modal.Title)({});

export const ModalDescription = styled(Modal.Description)({});

export const ModalPortal = styled(Modal.Portal)({});

export const ModalClose = styled(Modal.Close)({
  border: 'none',
  background: 'none',
  position: 'absolute',
  top: 0,
  right: 0,
});

export const ChangeWorkspace = styled.input({
  outline: 0,
  padding: '8px 8px 8px 0px',
  border: 'none',
});

export const Content = styled.div({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Buttons = styled.div({
  display: 'flex',
});
