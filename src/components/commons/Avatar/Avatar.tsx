import React from 'react';
import styles from './avatar.module.css';
import { Avatar as ChakraAvatar } from '@chakra-ui/react';

interface IAvatar {
  name: string,
  avatar?: string,
  size: string,
  className?: string,
}

export const Avatar: React.FC<IAvatar> = ({ name, avatar, size, className }) => {
  return <ChakraAvatar className={[styles.avatar, className].join(' ')} size={size} name={name} src={avatar} />;
}