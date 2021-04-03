import { Fragment } from 'react';
import Head from 'next/head';

import ContactForm from '../components/contact/contact-form';

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="How to contact The Pecking Pointe" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
