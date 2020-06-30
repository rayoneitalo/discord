import styled from 'styled-components';
import { MdPersonAdd, MdSettings } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;
  background-color: transparent;
  transition: .2s;

  .settings-container {
    opacity: 0;
    transform: translateY(20px);
    transition: all .1ms ease;
  }

  &:hover {
    .settings-container {
      opacity: 1;
      transform: translateY(0);
    }
  }

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }

  &.active, &:hover {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }

  }
`;

export const HashtagIcon = styled.div`
  font-size: 18pt;
  font-weight: bold;
  color: var(--symbol);
  margin-right: 4px;
`;

export const InviteIcon = styled(MdPersonAdd)`
  width: 18px;
  height: 18px;
  color: var(--symbol);
  cursor: pointer;
  transition: color .2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(MdSettings)`
  width: 18px;
  height: 18px;
  color: var(--symbol);
  cursor: pointer;
  transition: all .2s;
  margin-left: 4px;

  &:hover {
    transform: rotate(180deg);
    color: var(--white);
  }
`;
