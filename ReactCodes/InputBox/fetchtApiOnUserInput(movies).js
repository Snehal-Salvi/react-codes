import React, { useState, useEffect } from "react";

export default function MovieApi() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue.trim() !== "") {
      fetch("https://dummyapi.online/api/movies")
        .then((response) => response.json())
        .then((data) => {
          // setData(data);
          setData(data.slice(0, 5));
        });
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something to fetch data..."
      />
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.movie}</li>
        ))}
      </ul>
    </div>
  );
}

// ************************************************************************************************************************

// [{"id":1,"movie":"The Shawshank Redemption","rating":9.2,"image":"images/shawshank.jpg","imdb_url":"https://www.imdb.com/title/tt0111161/"},
// {"id":2,"movie":"The Godfather","rating":9.2,"image":"images/godfather.jpg","imdb_url":"https://www.imdb.com/title/tt0068646/"},
// {"id":3,"movie":"The Dark Knight","rating":9,"image":"images/dark_knight.jpg","imdb_url":"https://www.imdb.com/title/tt0468569/"},
// {"id":4,"movie":"Pulp Fiction","rating":8.9,"image":"images/pulp_fiction.jpg","imdb_url":"https://www.imdb.com/title/tt0110912/"},
// {"id":5,"movie":"The Lord of the Rings: The  of the King","rating":9,"image":"images/lotr__king.jpg","imdb_url":"https://www.imdb.com/title/tt0167260/"},{"id":6,"movie":"The Good, the Bad and the Ugly","rating":8.8,"image":"images/good_bad_ugly.jpg","imdb_url":"https://www.imdb.com/title/tt0060196/"},{"id":7,"movie":"Fight Club","rating":8.8,"image":"images/_club.jpg","imdb_url":"https://www.imdb.com/title/tt0137523/"},{"id":8,"movie":"The Lord of the Rings: The Fellowship of the Ring","rating":8.8,"image":"images/lotr_fellowship.jpg","imdb_url":"https://www.imdb.com/title/tt0120737/"},{"id":9,"movie":"Forrest Gump","rating":8.8,"image":"images/forrest_gump.jpg","imdb_url":"https://www.imdb.com/title/tt0109830/"},{"id":10,"movie":"Inception","rating":8.8,"image":"images/inception.jpg","imdb_url":"https://www.imdb.com/title/tt1375666/"}]

// ******************************************************************************************************************
