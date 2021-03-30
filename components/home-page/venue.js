import Image from 'next/image';

import classes from './venue.module.css';

function Venue() {
  return (
    <section className={classes.venue}>
      <div className={classes.image}>
        <Image
          src="/images/site/the-pointy-peck.jpg"
          alt="The Pointy Peck"
          width={300}
          height={300}
        />
      </div>
      <h1>The Pointy Peck</h1>
      <p>A blog which chronicles the events of The Pointy Peck.</p>
    </section>
  );
}

export default Venue;
