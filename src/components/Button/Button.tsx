import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const className = props.className
    ? `${props.className} ${styles.btn}`
    : styles.btn;

  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
};
