import React, {useContext} from 'react';
import {ThemeContext} from 'styled-components';
import Switch from 'react-switch';

import {
  Container,
  HashtagIcon,
  Title, Separator ,
  Description,
} from './styles';

  interface Props {
    toggleTheme(): void;
  }

const ChannelInfo: React.FC<Props> = ({toggleTheme}) => {
  const {name} = useContext(ThemeContext);

  return (
      <Container>
        <div>
          <HashtagIcon />
          <Title>chat-livre</Title>
          <Separator />
          <Description>Canal aberto para conversas</Description>
          </div>
          <div>
          <Switch onChange={toggleTheme} checked={name === 'light'} />
          </div>
      </Container>
  );
}

export default ChannelInfo;