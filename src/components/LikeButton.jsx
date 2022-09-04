import { useState } from 'react';
import classNames from 'classnames';

import pointsImg from '../assets/points.svg';

import styles from './LikeButton.module.css';

export default function LikeButton() {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);

  const onLike = () => {
    setLiked(true);
    setAnimate(true);
    setCount((prev) => prev + 1);

    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  };

  const onUnlike = () => {
    setLiked(false);
    setCount((prev) => prev - 1);
  };

  const likedClass = classNames({ [styles.liked]: liked });

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={liked ? onUnlike : onLike}>
        <img
          alt="points"
          src={pointsImg}
          className={classNames({ [styles.animate]: animate })}
        />

        <svg
          width="48"
          height="48"
          fill="none"
          viewBox="0 0 48 48"
          className={likedClass}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.8401 16.1516C32.3294 15.6406 31.7229 15.2353 31.0555 14.9587C30.388 14.6821 29.6726 14.5398 28.9501 14.5398C28.2276 14.5398 27.5122 14.6821 26.8448 14.9587C26.1773 15.2353 25.5709 15.6406 25.0601 16.1516L24.0001 17.2116L22.9401 16.1516C21.9084 15.1199 20.5092 14.5403 19.0501 14.5403C17.5911 14.5403 16.1918 15.1199 15.1601 16.1516C14.1284 17.1833 13.5488 18.5826 13.5488 20.0416C13.5488 21.5007 14.1284 22.8999 15.1601 23.9316L16.2201 24.9916L24.0001 32.7716L31.7801 24.9916L32.8401 23.9316C33.3511 23.4209 33.7565 22.8144 34.033 22.147C34.3096 21.4795 34.4519 20.7641 34.4519 20.0416C34.4519 19.3191 34.3096 18.6037 34.033 17.9363C33.7565 17.2688 33.3511 16.6624 32.8401 16.1516V16.1516Z"
            stroke="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <span className={classNames(styles.count, likedClass)}>{count}</span>
    </div>
  );
}
