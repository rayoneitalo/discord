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
<<<<<<< HEAD
            content="Isso é uma mensagem teste."
=======
            content="Preciso parar de procrastinar"
>>>>>>> 9a8b225c046222abf56e22fa7db4628b17e386a4
          />
          <ChannelMassage
          author="4Crow"
          date="30/06/2020"
          content={
            <>
<<<<<<< HEAD
              <Mention>@Italo Rayone</Mention>,  Esta é uma mensagem teste de bot com mentions.
=======
              <Mention>@kirito</Mention>, cara preciso que me ajudar com as cartas de tarô.
>>>>>>> 9a8b225c046222abf56e22fa7db4628b17e386a4
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