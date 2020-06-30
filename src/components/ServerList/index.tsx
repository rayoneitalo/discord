import React from 'react';
import ServerButton from '../ServerButton';
import { Container, Separator, BtnAdd } from './styles';
import { MdAdd } from 'react-icons/md';

const ServerList: React.FC = () => {
    return (
        <Container> 
            <ServerButton isHome />
            <Separator />
            <ServerButton  mentions={3} />
            <ServerButton />
            <ServerButton hasNotification />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotification />
            <ServerButton />
            <ServerButton  mentions={3} />
            <ServerButton hasNotification />
            <ServerButton  mentions={3} />
            <ServerButton />
            <ServerButton />

            <BtnAdd>
                <MdAdd size={28}/>
            </BtnAdd>
        </Container>
    )
}

export default ServerList;