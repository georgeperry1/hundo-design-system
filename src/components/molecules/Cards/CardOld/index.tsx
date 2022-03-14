import React from 'react';

import styles from './index.scss';
import { Course, Content } from '../../../../types';

export type CardProps = {
  data: Course | Content;
  type: string;
};

const Card: React.FC<CardProps> = ({ data, type }: CardProps) => {
  return (
    <div key={data._id} className={styles.wrapper}>
      <a href={`/${type}/${data._id}`}>
        <button className={styles.card}>
          <div className="flex absolute bg-white p-2">
            <img src="/icons/lock.png" alt="" className="w-4 h-4" />
          </div>
          <img src={data.thumbnail.url} alt={data.thumbnail.alt} className="w-full" />
          <div className="p-5 bg-white w-full text-left h-full flex justify-between flex-col">
            <div>
              <div className={styles['icon-container']}>
                <div className="flex flex-row">
                  <img src="/icons/clock.svg" alt="Clock icon" className={styles.icon} />
                  <p>{data['estimated-course-completion-time']}</p>
                </div>
                <div className="flex flex-row">
                  <img src="/icons/book.svg" alt="Book icon" className={styles.icon} />
                  <p>{data.modules.length} Modules</p>
                </div>
                <div className="flex flex-row">
                  <img src="/icons/people.svg" alt="People icon" className={styles.icon} />
                  <p>220</p>
                </div>
              </div>
              <h1>{data.name}</h1>
              <div className={styles['tutor-container']}>
                <img src={data['tutor-profile-picture'].url} alt={data['tutor-profile-picture'].alt} />
                <p>By {data['tutor-name-s']}</p>
              </div>
            </div>

            <div className={styles['stake-container']}>
              <div className="flex flex-col">
                <p>Stake to access</p>
                <p className={styles.price}>{data['staking-cost']} LETSGO</p>
              </div>
              <div className="flex flex-col">
                <p>Reward</p>
                <p className={styles.price}>{data['reward-price']} LETSGO</p>
              </div>
            </div>
          </div>
        </button>
      </a>
      <div className={styles['drop-shadow']} />
    </div>
  );
};

export default Card;
