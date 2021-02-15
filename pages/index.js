import Head from 'next/head'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ninja List</title>
      </Head>
      <div className={styles.container}>
        <main>
          <h1 className={styles.title}>Welcome to Ninja List</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt erat nibh, a aliquam nisi lacinia non. Phasellus a risus id libero interdum bibendum vitae quis nulla. In hac habitasse platea dictumst. Proin et arcu at massa cursus eleifend. Quisque porta dignissim eleifend.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt erat nibh, a aliquam nisi lacinia non. Phasellus a risus id libero interdum bibendum vitae quis nulla. In hac habitasse platea dictumst. Proin et arcu at massa cursus eleifend. Quisque porta dignissim eleifend.</p>
          <Link href="/ninjas"><button className={styles.btn}>See Ninja Listings</button></Link>

        </main>
      </div>
    </>
  )
}
