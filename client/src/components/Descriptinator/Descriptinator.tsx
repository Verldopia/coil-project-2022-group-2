import React from 'react';
import styles from './Descriptinator.module.css';

type Props = {
  text: string;
};

const Descriptinator = ({ text }: Props) => {
  // Split description and create individual list-items
  const splitText = text.split('•');
  return (
    <ul className={styles.descriptionList}>
      {splitText.map(
        (text, i) =>
          text && (
            <li key={i}>
              <p className={styles.descriptionText}>• {text}</p>
            </li>
          )
      )}
    </ul>
  );
};

export default Descriptinator;
