import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() =>{ 
    const retrieveData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data =  await response.json();
      setIsLoading(false);
      setIsError(false);
      setUser(data);
      return data;
  }
    catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    } finally {
      setIsLoading(false);
    }
  }
  retrieveData();
},[])

return (isLoading ? <h2>Loading...</h2> : <User {...user} />);
};

const User = ({ id, avatar_url, company, name, bio }) => {
  return (
    <div className='user' key={id}>
      <img
         style={{ width: '150px', borderRadius: '25px' }}
         src={avatar_url}
         alt={name} />
      <h2>{name}</h2>
      <h4>Works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
