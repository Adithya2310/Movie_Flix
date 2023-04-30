import Link from "next/link"

const NotFound = () => {
  return (
    <div className="container">
        <div className="error_page">
            <h1>404</h1>
            <h2>Not Found</h2>
            <p>Could not find the page you were looking for</p>
            <Link href={"/"}>
                <button>Home Page</button>
            </Link>
        </div>
    </div>
  )
}

export default NotFound