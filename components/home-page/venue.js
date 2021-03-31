import Image from 'next/image';

import classes from './venue.module.css';

function Venue() {
  return (
    <section className={classes.venue}>
      <div className={classes.image}>
        <Image
          src="/images/site/the-pecking-pointe.jpg"
          alt="The Pecking Pointe"
          width={300}
          height={300}
        />
      </div>
      <h1>The Pecking Pointe</h1>
      <p>
        A blog that chronicles the sometimes busy and not-so-busy events of The
        Pecking Pointe.
      </p>
    </section>
  );
}

export default Venue;
