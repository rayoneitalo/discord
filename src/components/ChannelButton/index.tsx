import React from 'react';
import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
  channelName: string;
  selected?: boolean;
}



const ChannelButton: React.FC<Props> = ({channelName, selected}) => {
  return (
    <Container>
      <div>
        <HashtagIcon>#</HashtagIcon>
        <span>{channelName}</span>
      </div>
      <div className="settings-container">
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  )
}

export default ChannelButton;