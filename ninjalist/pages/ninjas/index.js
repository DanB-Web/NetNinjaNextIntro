import Link from 'next/link';

import style from '../../styles/Ninjas.module.css';

//This function will run at render time - i.e. when the page is called from the browser
export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  //This return statement will make 'ninjas' (and any other passed data) available to the component as props
  return {
    props: {
      ninjas: data
    }
  }
}

const Ninjas = ( { ninjas } ) => {

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={style.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Ninjas;