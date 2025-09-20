import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Advanced',
    Svg: require('@site/static/img/star.svg').default,
    description: (
      <>
        Make highly advanced commands to make full use of your custom bots made with <a href='https://kite.onl/' target="_blank">Kite</a> and engage your community.
      </>
    ),
  },
  {
    title: 'Detailed',
    Svg: require('@site/static/img/check.svg').default,
    description: (
      <>
        Detailed tutorials so that you don't encounter any difficulties while setting up your commands.
      </>
    ),
  },
  {
    title: 'Got Stuck?',
    Svg: require('@site/static/img/question.svg').default,
    description: (
      <>
        Open a thread in <code>#support</code> channel in the <a href='https://discord.gg/dvGj3CmwP6' target="_blank">Kite Discord</a> server and feel free to ping me.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
