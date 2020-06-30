import React from 'react';
import {
  Container,
  Title,
  HashtagIcon,
  Separator ,
  Description,
} from './styles';



const ChannelInfo: React.FC = () => {

  return (
      <Container>
        <div>
          <HashtagIcon>#</HashtagIcon>
          <Title>chat-livre</Title>
          <Separator />
          <Description>Canal aberto para conversas</Description>
          </div>
      </Container>
  );
}

export default ChannelInfo;