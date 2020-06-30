import React from 'react';
import { Container, User, Avatar, Role, Checked } from './styles';

export interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
  nickname, isBot
}) => {
  return (
    <User>
      <Avatar />
      <strong>{nickname}</strong>
      {isBot && <span><Checked />Bot</span>}
    </User>
  )
}


const UserList: React.FC = () => {
    return (
        <Container>
          <Role>Discord - 1</Role>
          <UserRow nickname="kirito" />
          <Role>Offline -1</Role>
          <UserRow nickname="4Crow" isBot/>

          <Role>Discord - 1</Role>
          <UserRow nickname="kirito" />
          <Role>Offline -1</Role>
          <UserRow nickname="4Crow" isBot/>

          <Role>Discord - 1</Role>
          <UserRow nickname="kirito" />
          <Role>Offline -1</Role>
          <UserRow nickname="4Crow" isBot/>

          <Role>Discord - 1</Role>
          <UserRow nickname="kirito" />
          <Role>Offline -1</Role>
          <UserRow nickname="4Crow" isBot/>

          <Role>Discord - 1</Role>
          <UserRow nickname="kirito" />
          <Role>Offline -1</Role>
          <UserRow nickname="4Crow" isBot/>

          <Role>Discord - 1</Role>
          <UserRow nickname="kirito" />
          <Role>Offline -1</Role>
          <UserRow nickname="4Crow" isBot/>

          <Role>Discord - 1</Role>
          <UserRow nickname="kirito" />
          <Role>Offline -1</Role>
          <UserRow nickname="4Crow" isBot/>

        </Container>
    )
}

export default UserList;