import React from 'react'
import "../styles/heroSection.css"
import "../styles/common.css"
import Link from 'next/link'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div>
        <main className="main_section">
            <div className="container">
                <div className="grid_two_section">
                    <div className="hero_content"> 
                        <h1>HeroSection</h1> 
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
                        <Image src="/about1.svg" alt="CoverImage" height={500} width={500}/>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default HeroSection