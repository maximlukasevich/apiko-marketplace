import React from 'react';
import styles from './textarea.module.css';

interface ITextArea extends 
  React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 
  HTMLTextAreaElement> {
    label?: string,
    errors?: string | false,
    className?: string,
}

export const TextArea: React.FC<ITextArea> = ({
  label,
  errors,
  ...props
}) => {
  return (  
  <div>
    <label className={styles.label} >
      {label} 
      <span className={styles.span}>
        {props.required ? '*' : ''}
        {' '}{errors}
      </span>
      <textarea className={styles.textarea} {...props}>

      </textarea>
    </label>
  </div>
  );
}