import Link from 'next/link'

const Layout = children => <>{children}</>

const Home = () => {
  return (
    <>
      <Link href="/results">
        <button>To results page</button>
      </Link>

      <Link href="/participants">
        <button className="button">To participants page</button>
      </Link>
    </>
  )
}

Home.Layout = Layout

export default Home
