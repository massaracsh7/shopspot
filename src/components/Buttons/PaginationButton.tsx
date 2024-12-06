import React from 'react';
import styles from './PaginationButton.module.scss';

interface PaginationButtonProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
  ariaLabel: string;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({ label, onClick, disabled, ariaLabel }) => {
  return (
    <button
      className={styles.pagebutton}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {label}
    </button>
  );
};

export default PaginationButton;