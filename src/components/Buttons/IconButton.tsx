import React from 'react';
import { IconType } from 'react-icons';
import styles from './IconButton.module.scss';

interface IconButtonProps {
  icon: IconType;
  label: string;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  label,
  onClick,
}) => {
  return (
    <button className={styles.iconButton} onClick={onClick}>
      <Icon className={styles.iconButton__icon} />
      {label}
    </button>
  );
};

export default IconButton;
