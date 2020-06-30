import styled from 'styled-components';
import { MdCheck } from 'react-icons/md';


export const Container = styled.div`
  grid-area: UL;
  display: flex;
  flex-direction: column;
  padding: 3px 6px 0px 16px;
  background-color: var(--secondary);
  max-height: calc(100vh - 46px);
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

export const User = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  background-color: transparent;
  transition: all .2s;
  padding: 4px 0 4px 4px;

  &:hover {
    background-color: rgba(255, 255, 255, .2);
  }

  > strong {
    padding: 4px 0 4px 4px;
    font-weight: 500;
    color: var(--white);
    opacity: .7;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    margin-left: 9px;
    background-color: var(--discord);
    border-radius: 4px;
    padding: 4px 5px;
    color: var(--white);
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--primary);

  &.bot {
    background-color: var(--mention-detail);
  }

`;
export const Role = styled.span`
  margin-top: 20px;
  text-transform: uppercase;
  color: var(--gray);
  font-size: 12px;
  font-weight: 500;
`;

export const Checked = styled(MdCheck)`
  margin-right: 3px;
`;