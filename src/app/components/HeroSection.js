import React from 'react'
import "../styles/herosection.css"
import "../styles/common.css"
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = ({ title,imageUrl }) => {
  return (
    <div>
        <main className="main_section">
            <div className="container">
                <div className="grid_two_section">
                    <div className="hero_content"> 
                        <h1>{title}</h1> 
                        <p>
                            From award-winning dramas to blockbuster action movies, we&apos;ve got you covered. Browse
                            our
                            selection of the latest and greatest movies, and find your new favorite today
                        </p>
                        <Link href="/movie">
                            <button>Explore Movies</button>
                        </Link>
                    </div>
                    <div className="hero_image">
                        <Image src={imageUrl} alt="CoverImage" height={500} width={500}/>
                    </div>
                </div>
            </div>
            <div className="custom-shape-divider">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                </svg>
            </div>
        </main>
    </div>
  )
}

export default HeroSection