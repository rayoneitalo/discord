import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

export const Container = styled.div`
  grid-area: CD;
  display: flex;
  background-color: var(--primary);
  flex-direction: column;
  justify-content: space-between;
`;

export const Messages = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 46px - 68px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
}

  scrollbar-width: none;

::-webkit-scrollbar-thumb {
  background-color: var(--notification);
  border-radius: 4px;
}

::-webkit-scrollbar-track {
  background-color: var(--tertiary);
}

`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 0 16px;

`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 9px 0 45px;
  border-radius: 7px;
  color: var(--white);
  background-color: var(--chat-input);
  position: relative;
  transition: .1s all;


  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -45%;
    left: 14px;
    transition: 180ms ease-in-out;
  }
`;

export const InputIcon = styled(MdAdd)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
  border-radius: 50%;
  background-color: #b9bbbe;
  cursor: pointer;
  transition: .1s all;

  &:hover {
    background-color: #e3e5e8;
  }

`;