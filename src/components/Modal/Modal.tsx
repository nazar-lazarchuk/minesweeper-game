import { FC } from 'react';
import { ModalProps } from './Modal.types';
import styles from './Modal.module.scss';

export const Modal: FC<ModalProps> = ({
  backdropProps = {},
  wrapperProps = {},
  children,
}) => {
  const modalClassName = backdropProps.className
    ? `${backdropProps.className} ${styles.modal}`
    : styles.modal;

  const contentClassName = wrapperProps.className
    ? `${wrapperProps.className} ${styles.content}`
    : styles.content;

  return (
    <div {...backdropProps} className={modalClassName}>
      <div {...wrapperProps} className={contentClassName}>
        {children}
      </div>
    </div>
  );
};
