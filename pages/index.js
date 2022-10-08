import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Profile</title>
      </Head>
      <header>
        <nav>
          <ul>
            <Image src = '/../public/images/profile.png' width={144}
            height = {144} alt= 'profile' />
            <li>HOME</li>
            <li>SERVICES</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </header>
      <section className={utilStyles.headingMd}>
        <p><Link href="/posts/first-post"> Check my profile </Link></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}