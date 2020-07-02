import React, { useRef, useEffect } from 'react';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMassage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;
    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messageRef])

  return (
    <Container>
        <Messages ref={messageRef}>
          <ChannelMassage
            author="Italo Rayone"
            date="01/07/2020"
            content="Preciso parar de procrastinar"
          />
          <ChannelMassage
          author="4Crow"
          date="30/06/2020"
          content={
            <>
              <Mention>@kirito</Mention>, cara preciso que me ajudar com as cartas de tarô.
            </>
          }
          hasMention
          isBot
          />


        </Messages>


      <InputWrapper>
        <Input type="text" placeholder="Message #name_chat" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;