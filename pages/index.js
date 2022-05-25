import Head from 'next/head'
import React from 'react';
import Photo from '../components/photo';
import styles from '../styles/Home.module.scss'
import { getRandomInt } from '../util/util';
import NetParticles from '../components/Particles';

export default function Home() {

  const dateTimeWhenISawYouForTheFirstTime = new Date('2022-02-26T20:48-03:00');
  const now = new Date();
  const diff = now.getTime() - dateTimeWhenISawYouForTheFirstTime.getTime();

  const [counter, setCounter] = React.useState(Math.round(diff / 1000));
  const [randomPhotos, setRandomPhotos] = React.useState([]);
  const [particles, setParticles] = React.useState();

  // React.useEffect(() => {
  //   width = window.innerWidth;
  // }, []);

  React.useEffect(() => {

    const width = window.innerWidth;

    const photos = [];

    while (photos.length < 14) {
      let num = getRandomInt(1, 14);
      while (photos.includes(num)) {
        num = getRandomInt(1, 14);
      }
      photos.push(num);
    }

    const subtitles = ['Algumas coisas podem ser aleatórias',
                       'Como a ordem dessas fotos',
                       'E o balançar delas',
                       'Talvez a posição também',
                       'Mas uma coisa é certa',
                       'Eu gosto muito de você',
                       'E eu quero sempre que esteja bem',
                       'A cada dia, eu percebo que consigo me abrir cada vez mais',
                       'E vejo que, apesar de todas as aleatoriedades da vida',
                       'Ter encontrado você foi um acerto e tanto pra mim',
                       'Obrigado por existir, por me aceitar, por estar aqui',
                       'Vocé é I N C R Í V E L',
                       'Me orgulho muito de você',
                       'Beijos e abraços quentinhos de urso 🐻'];

    console.log(width)

    const randomPhotos = photos.map((num, index) => ({
                                                      key: index,
                                                      subtitle: subtitles[index],
                                                      photoName: `${num}.png`,
                                                      size: getRandomInt(400, 600),
                                                      left: getRandomInt(index % 2 === 0 || width < 900 ? 10 : 55, width < 900 ? 12 : index % 2 === 0 ? 16 : 67),
                                                      alt: '',
                                                      duration: getRandomInt(10, 13),
                                                      delay: (index + 1) * 3,
                                                      deg: getRandomInt(-25, 25)
                                                    }));

    setRandomPhotos(randomPhotos);

    setParticles(<NetParticles />)

  }, []);

  React.useEffect(() => {
    setTimeout(() => {
        setCounter(counter + 1)
    }, 1000);
  }, [counter])

  return (
    <div className={styles.container}>
      <Head>
        <title>Tr3s Meses</title>
        <meta name="description" content="A next project to celebrate 3 months of our relationship. I love U, Leo" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.backSpider}>
          {particles}
        </div>
        <span className={styles.counter1}>Feliz {counter} segundos de Namoro!</span>
        {randomPhotos.map((photo, index) => <Photo key={photo.key} {...photo}/>)}
        {/* <Photo photoName="1.png" alt="Our first photo together" top={50} left={150} deg={-20} delay={2} duration={10} /> */}
      </main>
    </div>
  )
}
