import React, { useState } from 'react';
import styles from './input.module.css';
import { InputGroup, InputLeftAddon, InputRightAddon } from '@chakra-ui/react';
import passwordIcon from '../../../assets/icons/password-eye.svg';

interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  icon?: string;
  errors?: string | false;
  className?: string;
  wrapperClassName?: string;
}

export const InputField: React.FC<IInput> = ({
  label,
  icon,
  errors,
  className,
  wrapperClassName,
  ...props
}) => {
  const [inputType, setInputType] = useState<string | undefined>(props.type);
  const showPasswordHandler = (): void => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label}>
        {label}
        <span className={styles.span}>
          {props.required ? '*' : ''} {errors}
        </span>
        <InputGroup className={[styles.inputGroup, wrapperClassName].join(' ')}>
          {icon ? (
            <InputLeftAddon
              className={styles.icon}
              children={<img src={icon} alt='icon' />}
            />
          ) : (
            ''
          )}
          <input
            className={[styles.input, className].join(' ')}
            {...props}
            type={inputType}
          />
          {props.type === 'password' ? (
            <InputRightAddon
              className={styles.icon}
              children={<img src={passwordIcon} alt='Password Icon' />}
              onClick={showPasswordHandler}
            />
          ) : (
            ''
          )}
        </InputGroup>
      </label>
    </div>
  );
};
