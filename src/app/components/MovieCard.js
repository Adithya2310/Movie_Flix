import React from 'react'
import "../styles/common.css"
import Image from 'next/image';
import Link from 'next/link';

const MovieCard = (curElem) => {
    // fetching the data from the prop
    const {id,type,title,synopsis,backgroundImage}=curElem.jawSummary;
  return (
    <div className='card'>
        <div className="card_image">
            <Image src={backgroundImage.url} alt="Series Image" width={260} height={200} />
        </div>
        <div className="card_data">
            <h2 className="title">
                {title}
            </h2>
            <p className="synopsis">
                {synopsis.substring(0,66)} ...
            </p>
            <Link href={`/movie/${id}`}>
                <button>Read More</button>
            </Link>
        </div>
    </div>
  )
}

export default MovieCard