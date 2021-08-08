import React from 'react';
import styles from './message-modal.module.css';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from '@chakra-ui/react';
import { IMessageModalComponentProps } from './types';
import closeIcon from '../../assets/icons/close_icon.svg';
import { Avatar } from '../commons/Avatar/Avatar';
import { TextArea } from '../commons/TextArea/TextArea';
import { Button } from '../commons/Button/Button';

export const MessageModalComponent: React.FC<IMessageModalComponentProps> = ({
  id,
  subject,
  avatar,
  fullName,
  location,
  formik,
  children,
}) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  return (
    <>
      <div onClick={onOpen}>{children}</div>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className={styles.modal}>
          <div className={styles.modalHeader}>
            <p className={styles.headerTitle}>Contact seller</p>
            <button className={styles.headerButton} onClick={onToggle}>
              <img src={closeIcon} alt='close' />
            </button>
          </div>

          <div className={styles.modalBody}>
            <h2 className={styles.subject}>Subject: {subject}</h2>
            <div className={styles.seller}>
              <Avatar name={fullName} avatar={avatar} size='xl' />
              <div className={styles.sellerInfo}>
                <h2 className={styles.sellerFullName}>{fullName}</h2>
                <p className={styles.sellerLocation}>{location}</p>
              </div>
            </div>

            <form className={styles.form} onSubmit={formik.handleSubmit}>
              <TextArea
                name='text'
                value={formik.values.text}
                onChange={formik.handleChange}
                label='message'
                required
              />

              <div className={styles.buttonDiv}>
                <Button type='submit' className={styles.submitButton}>
                  SUBMIT
                </Button>
              </div>
            </form>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};
