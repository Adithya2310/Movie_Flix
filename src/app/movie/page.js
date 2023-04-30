import React from 'react'
import "../styles/common.css"
import MovieCard from '../components/MovieCard';

const Movie = async () =>   {

  // fetching the movies
  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=50&lang=en';
  const options = {
	  method: 'GET',
	  headers: {
		  'content-type': 'application/octet-stream',
		  'X-RapidAPI-Key': 'df948f9694msh0283bbb38c85b9cp1b02c1jsna9cdf03b1915',
		  'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
	  }
  };
  let res;
  try{
    res=await fetch(url, options);
    res=await res.json();
  }
  catch(error)
  {
    console.log(error);
  }

  const {titles:main_data}=res;

  return (
    <div className='movieSection'>
      <div className='container'>
        <h1>Movies & Series</h1>
        {/* passing the movies */}
        <div className="card_section">
        {
          main_data.map((curElem)=>{
            return <MovieCard key={main_data.id} {...curElem}/>
          })
        }
        </div>

      </div>
    </div>
  )
}

export default Movie