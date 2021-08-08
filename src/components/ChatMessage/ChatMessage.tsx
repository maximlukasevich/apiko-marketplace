import React from 'react';
import styles from './chat-message.module.css';
import moment from 'moment';

interface IChatMessageProps {
  type: 'incoming' | 'outgoing';
  message: string;
  createdAt: number;
}

export const ChatMessage: React.FC<IChatMessageProps> = ({
  type,
  message,
  createdAt,
}) => {
  return ( <>

      {type === 'incoming' && (
        <div className={styles.incomingMessage}>
          <div className={styles.messageContainer}>
            <div className={styles.message}>
              <p className={styles.text}>{message}</p>
            </div>
            <p className={styles.time}>{moment(createdAt).fromNow()}</p>
          </div>
        </div>
      )}

      {type === 'outgoing' && (
        <div className={styles.outgoingMessage}>
          <div className={styles.messageContainer}>
            <div className={styles.message}>
              <p className={styles.text}>{message}</p>
            </div>
            <p className={styles.time}>{moment(createdAt).fromNow()}</p>
          </div>
        </div>
      )}

  </> );
}