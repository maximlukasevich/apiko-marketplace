import React from 'react';
import { generatePath, NavLink } from 'react-router-dom';
import { Avatar } from '../commons/Avatar/Avatar';
import styles from './chat.module.css';
import defaultImage from '../../assets/defaultImage.png';
import chatProductIcon from '../../assets/icons/chat-product-icon.svg';
import chatHeaderDots from '../../assets/icons/chat-dots-icon.svg';
import backIcon from '../../assets/icons/back-icon.svg';
import smileIcon from '../../assets/icons/smile-icon.svg';
import sendFileIcon from '../../assets/icons/send-file-icon.svg';
import { routes } from '../../utils/routes';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import { IChatComponentProps } from './types';
import { Spinner } from '../commons/Spinner/Spinner';
import InfiniteScroller from 'react-infinite-scroll-component';
import { Button } from '../commons/Button/Button';

export const ChatComponent: React.FC<IChatComponentProps> = ({
  messages,
  isLoading,
  fetchMore,
  chatBottomRef,
  isFetchedAll,
  saller,
  product,
  formik,
}) => (
  <>
    {isLoading ? (
      <Spinner />
    ) : (
      <div className={styles.chatWrapper}>
        <div className={styles.chatHeader}>
          <NavLink to={routes.INBOX} className={styles.backIcon}>
            <img src={backIcon} alt='Go back' />
          </NavLink>
          <div className={styles.chatHeaderLeft}>
            <NavLink
              to={generatePath(routes.USER_PAGE, { id: saller.id })}
              className={styles.saler}
            >
              <Avatar name={saller.fullName} size='md' avatar={saller.avatar} />
              <h2 className={styles.fullName}>{saller.fullName}</h2>
            </NavLink>
            <div className={styles.chatHeaderProduct}>
              <div className={styles.chatHeaderProductContainer}>
                <img
                  className={styles.productImage}
                  src={product.photos[0] || defaultImage}
                  alt='Product'
                />
                <div className={styles.productText}>
                  <h2 className={styles.title}>{product.title}</h2>
                  <p className={styles.price}>${product.price}</p>
                </div>
              </div>
              <NavLink
                to={generatePath(routes.PRODUCT, { id: product.id })}
                className={styles.productLinkIcon}
              >
                <img src={chatProductIcon} alt='Link' />
              </NavLink>
            </div>
          </div>

          <img
            className={styles.chatHeaderRight}
            src={chatHeaderDots}
            alt='?'
          />
        </div>

        <div
          className={styles.chat}
          id='scrollableDiv'
          style={{ display: 'flex', flexDirection: 'column-reverse' }}
        >
          <InfiniteScroller
            className={styles.chatInfinite}
            dataLength={messages.length}
            next={fetchMore}
            style={{ display: 'flex', flexDirection: 'column-reverse' }}
            inverse={true}
            hasMore={!isFetchedAll}
            loader={<Spinner />}
            scrollableTarget='scrollableDiv'
          >
            <div ref={chatBottomRef}></div>
            {messages.map((message, key) => (
              <ChatMessage
                key={key}
                type={message.ownerId === saller.id ? 'incoming' : 'outgoing'}
                message={message.text}
                createdAt={message.createdAt}
              />
            ))}
          </InfiniteScroller>
        </div>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <input
            name='text'
            value={formik.values.text}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={styles.input}
            type='text'
            placeholder='Type your message here..'
          />
          {formik.values.text !== '' ? (
            <Button type='submit' className={styles.sendButton}>
              Send
            </Button>
          ) : (
            <div className={styles.icons}>
              <img src={smileIcon} alt='Smile' />
              <img src={sendFileIcon} alt='Send File' />
            </div>
          )}
        </form>
      </div>
    )}
  </>
);
