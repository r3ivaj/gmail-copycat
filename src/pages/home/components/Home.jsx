import React from 'react';
import Layout from '@app/layouts/layout';
import Emails from '@app/shared/emails';
import { getEmails } from '@app/api/emails';
import useSWR from 'swr'

const Home = () => {
  const {data: emails} = useSWR('/emails', () => getEmails().then(data => data.messages));
  if (!emails) return 'loading';

  return (
    <Layout>
      <Emails emails={emails} />
    </Layout>
  )
};

export default Home;