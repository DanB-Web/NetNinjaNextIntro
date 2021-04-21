//THE 'getStaticPaths' METHOD TELLS NEXT HOW MANY HTML PAGES IT NEEDS TO BUILD
export const getStaticPaths = async () => {

  //GET API DATA
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  //CREATE AN ARRAY OF RETURNED OBJECTS
  const paths = data.map(ninja => {
    return {
      params: { id : ninja.id.toString() }
    }
  })

  //RETURNS AN OBJECT WITH THE NUMBER OF STATIC PAGES REQUIRED
  return {
    paths: paths,
    fallback: false  //Throws 404 if user tries to visit a page with no existing param
  }
}

//THIS WILL RUN FOR EACH VALUE IN 'paths' ABOVE
export const getStaticProps = async (context) => {

  const id = context.params.id;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json();

  return {
    props: { ninja : data }
  }
}

const Details = ( { ninja } ) => {

  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
  
}

export default Details;