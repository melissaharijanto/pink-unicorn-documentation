import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import ReactPlayer from 'react-player';

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className="styles.features">
      <iframe src="https://classroom-360.netlify.app" width="100%" height="500px"/>
    </div>
  );
}
