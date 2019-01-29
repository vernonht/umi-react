import React from 'react';
import styles from './index.css';
import Clock from '../components/Clock';


export default function() {
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
  return (
    <div className={styles.normal}>
		{name}
			{element}
			<Clock/>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li><a href="https://umijs.org/guide/getting-started.html">Getting Started</a></li>
      </ul>
    </div>
  );
}
