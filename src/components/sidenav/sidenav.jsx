import React from 'react';
import { Home, Favorite, Folder } from '@material-ui/icons';
import {
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import styles from '../../styles/index';

export default function TemporaryDrawer() {
  const classes = styles();

  const menuItems = [
    {
      name: 'Home',
      icon: <Home />,
    },
    {
      name: 'Favorites',
      icon: <Favorite />,
    },
    {
      name: 'Folders',
      icon: <Folder />,
    },
  ];

  return (
    <div className={classes.sideNav}>
      {menuItems.map((menuItem) => {
        const { icon, name } = menuItem;
        return (
          <ListItem button key={name}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        );
      })}
    </div>
  );
}
