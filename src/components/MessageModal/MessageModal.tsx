import React from 'react';
import { MessageModalComponent } from './MessageModalComponent';
import { IMessageModalProps } from './types';

export const MessageModal: React.FC<IMessageModalProps> = ({ 
  id,
  subject,
  avatar, 
  fullName,
  location,
  children,
}) => {
  return <MessageModalComponent 
    id={id}
    subject={subject}
    avatar={avatar}
    fullName={fullName}
    location={location}
    children={children} />;
}