import Image from 'next/image';
import React from 'react';
import styles from '../styles/Photo.module.scss'
import { getRandomInt } from '../util/util';
export default function Photo({ photoName, alt, left, deg, duration, delay, size, subtitle }) {
  const [degRotation, setDegRotation] = React.useState(deg);

  React.useEffect(() => {
    setTimeout(() => {
        setDegRotation(getRandomInt(deg - 12, deg + 12))
    }, 1000);
  }, [degRotation])

  return (
    <div className={styles.photo} style={{
                                           left: `${left}%`,
                                           transform: `rotate(${degRotation}deg)`,
                                           animationName: 'moveDown',
                                           animationDuration: `${duration}s`,
                                           animationDelay: `${delay}s`,
                                           animationTimingFunction: 'linear',
                                           animationFillMode: 'forwards'
                                          }}>
       <span className={styles.subtitle}>{subtitle}</span>
       <Image src={`/${photoName}`} alt={alt} width={size ?? 500} height={size ?? 500} />
    </div>
  )
}
