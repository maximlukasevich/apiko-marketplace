import React from 'react';
import styles from './auth-wrapper.module.css';

interface IAuthWrapper
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const AuthWrapper: React.FC<IAuthWrapper> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={[styles.wrapper, className].join(' ')} {...props}>
      {children}
    </div>
  );
};
