import React from 'react';

import { Grid } from './styles';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';

interface Props {
    toggleTheme(): void
}

const Layout: React.FC<Props> = ({toggleTheme}) => {
    return (
        <Grid>
            <ServerList />
            <ServerName />
            <ChannelInfo toggleTheme={toggleTheme} />
            <ChannelList />
            <UserInfo />
            <div />
            <UserList />
        </Grid>
    )
}

export default Layout;