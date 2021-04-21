import { useEffect } from 'react';           //REACT hook
import { useRouter } from 'next/router';     //NEXT hook

import Link from 'next/link';

const NotFound = () => {

  const router = useRouter();   //Initialise router object and access methods

  useEffect(() => {
    setTimeout(() => {
      //router.go(-1)                 <-- Move back 1 page
      router.push('/')               
    }, 3000)
  }, [])
  
  return (
    <div className="not-found">
      <h1>Ooops....</h1>
      <h2>That page cannot be found</h2>
      <p>Back to <Link href="/"><a>Homepage</a></Link></p>
    </div>
  );
}

export default NotFound;