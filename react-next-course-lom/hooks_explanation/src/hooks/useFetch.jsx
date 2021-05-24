import { useState, useEffect } from 'react';



export const UsingFetch = () => {

    useEffect(() => {
        asdsd()
    }, [])

    const [jsonPost, setJsonPost] = useState('');

    const asdsd = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await data.json()
        setJsonPost(json)
        return json
    }


  return (
    <div>
      <p>{JSON.stringify(jsonPost, null, 2)}</p>
    </div>
  );
};
