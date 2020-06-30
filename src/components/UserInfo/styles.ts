import styled from 'styled-components';
import { MdMic, MdSettings, MdHeadset } from 'react-icons/md';

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--gray);
`;
export const UserData = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  color: var(--white);


`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  color: var(--symbol);

  > svg:not(:first-child) {
    margin-left: 5px;
  }
`;

export const MicIcon = styled(MdMic)`
  width: 20px;
  height: 20px;
  color: var(--white);
  cursor: pointer;
  opacity: .7;
  transition: opacity .1s;

  &:hover {
    opacity: 1;
    }
`;

export const HeadphoneIcon = styled(MdHeadset)`
  width: 20px;
  height: 20px;
  color: var(--white);
  cursor: pointer;
  opacity: .7;
  transition: opacity .1s;

  &:hover {
    opacity: 1;
    }
`;

export const SettingsIcon = styled(MdSettings)`
  width: 20px;
  height: 20px;
  color: var(--white);
  cursor: pointer;
  opacity: .7;
  transition: all .2s;

  &:hover {
    opacity: 1;
    transform: rotate(180deg);
    }
`;