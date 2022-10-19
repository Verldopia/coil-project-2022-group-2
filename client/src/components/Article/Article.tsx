import React from 'react';
import Popular from '../Popular/Popular';
import styles from './Article.module.css';

type Props = {};

const Article = (props: Props) => {
  return (
    <article className={styles.articleContainer}>
      <h2>Hi fwiends UwU</h2>
      <p>hello sexy article, write me some content plz</p>
      <Popular />
    </article>
  );
};

export default Article;
