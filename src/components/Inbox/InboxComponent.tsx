import React from 'react';
import { generatePath, NavLink } from 'react-router-dom';
import { routes } from '../../utils/routes';
import styles from './inbox.module.css';
import lastMessageIcon from '../../assets/icons/message-icon.svg';
import defaultImage from '../../assets/defaultImage.png';
import { Route } from 'react-router-dom';
import Chat from '../Chat/Chat';
import { IInboxComponentProps } from './types';
import moment from 'moment';

export const InboxComponent: React.FC<IInboxComponentProps> = ({ 
  showChats,
  isChatsLoading,
  chats,
}) => {
  return (
    <div className={styles.inbox}>
      <aside className={styles.aside}>        
        {chats.map((chat, key) => 
          <NavLink 
            to={generatePath(routes.CHAT, {id: chat.id})}
            activeClassName={styles.active}
            key={key} >
            <div className={styles.chatLink}>
              <div className={styles.chatInfo}>
                <h2 className={styles.fullName}>{chat.participants[0].fullName}</h2>
                <p className={styles.lastMessage}>
                  <img src={lastMessageIcon} alt='Message' /> {chat.lastMessage.text}
                </p>
              </div>
              <div className={styles.productInfo}>
                <img 
                  className={styles.image} 
                  src={chat.product.photos[0] || defaultImage} 
                  alt='Title' /> 
                <div className={styles.text}>
                  <h2 className={styles.title}>{chat.product.title}</h2>
                  <p className={styles.price}>${chat.product.price}</p>
                </div>
              </div>
              <div className={styles.lastMessageTime}>
                {moment(chat.lastMessage.createdAt).format('HH:mm')}
              </div>
            </div>
          </NavLink>
        )}
      </aside> 

      <div className={`
        ${styles.chat}
        ${showChats ? '' : styles.showChat}
      `} >
        <Route path={routes.CHAT} component={Chat} /> 
      </div>
    </div>
  );
}
