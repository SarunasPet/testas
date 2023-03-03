import { useState } from "react";
import { useEffect } from "react";

function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.jokes.map(jokes => (
          <li key={jokes.id} className="holder">
            <h3 className="type">{jokes.type}</h3>
            <p className="joke">{jokes.joke}</p>
            <p className="joke">{jokes.setup}</p>
            <p className="delivery">{jokes.delivery}</p>
          </li>
        ))}
      </ul>
    );
  }
}
export default MyComponent;

