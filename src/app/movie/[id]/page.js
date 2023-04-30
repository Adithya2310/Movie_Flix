import React from 'react';
import "../../styles/common.css"
import Image from 'next/image';

const page = async ({params}) => {
    
    const {id}=params;

    // fetching the details of indivijual titles
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
	    method: 'GET',
	    headers: {
		    'content-type': 'application/octet-stream',
		    'X-RapidAPI-Key': 'df948f9694msh0283bbb38c85b9cp1b02c1jsna9cdf03b1915',
		    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
	    }
    };
    let res;
    try {
        res = await fetch(url, options);
        res = await res.json();
        console.log(res);
    } catch (error) {
        console.error(error);
    }

    const data=res[0].details;

  return (
    <div>
        <div className="container">
            <h2 className="movie_titles">Netflix/ <span>{data.type}</span></h2>
            <div className="card_Section">
                <div>
                    <Image src={data.backgroundImage.url} alt={data.title} width={600} height={300}/>
                </div>
                <div>
                    <h1>
                        {data.title}
                    </h1>
                    <p>
                        {data.synopsis}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page