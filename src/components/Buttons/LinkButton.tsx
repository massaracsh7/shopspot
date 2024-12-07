import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LinkButton.module.scss';

interface LinkButton {
  label: string;
  to: string;
}

const LinkButton: React.FC<LinkButton> = ({ label, to }) => {
  const navigate = useNavigate();

  return (
    <button className={styles.linkBtn} onClick={() => navigate(to)}>
      {label}
    </button>
  );
};

export default LinkButton;
