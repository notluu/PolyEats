import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const TabBarIcon = ({ name, focused }) => {
  return (
    <Ionicons
      name={name}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? '#2f95dc' : '#ccc'}
    />
  );
};

export default TabBarIcon;