import React, {useContext} from 'react';

import {
  Container,
  HashtagIcon,
  Title,
  Separator ,
  Description,
} from './styles';



const ChannelInfo: React.FC = () => {

  return (
      <Container>
        <div>
          <HashtagIcon />
          <Title>chat-livre</Title>
          <Separator />
          <Description>Canal aberto para conversas</Description>
          </div>
      </Container>
  );
}

export default ChannelInfo;