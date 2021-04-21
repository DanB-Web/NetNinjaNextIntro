import Head from 'next/head';

import Link from 'next/link';

import style from '../styles/Home.module.css';

const Home = () => {
  return ( 
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>

      <div>

        <h1 className={style.title}>Home page</h1>

        <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque porta eleifend. Vestibulum eu viverra purus. Curabitur elementum nulla et lorem dignissim tristique. Etiam blandit velit a nunc mollis sagittis. Integer feugiat mi id quam rhoncus semper. Nam sagittis dui ac risus convallis vulputate. Proin dignissim est eu lectus finibus.</p>

        <p className={style.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque porta eleifend. Vestibulum eu viverra purus. Curabitur elementum nulla et lorem dignissim tristique. Etiam blandit velit a nunc mollis sagittis. Integer feugiat mi id quam rhoncus semper. Nam sagittis dui ac risus convallis vulputate. Proin dignissim est eu lectus finibus.</p>

        <Link href="/ninjas"><a className={style.btn}>See Ninja Listings</a></Link>
      </div> 
    </>
  )
}

export default Home;
