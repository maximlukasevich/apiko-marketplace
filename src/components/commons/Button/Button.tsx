import React from 'react';
import styles from './button.module.css';

interface IButton extends 
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, 
  HTMLButtonElement> {
    className?: string | undefined;
}

export const Button: React.FC<IButton> = ({children, className, ...props}) => {
  return <button className={[styles.button, className].join(' ')} {...props}>{children}</button>
}