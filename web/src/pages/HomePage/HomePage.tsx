import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1 className="mb-4 flex justify-center font-serif text-6xl font-bold text-rose-500">
        HomePage
      </h1>
      <p className=" flex justify-center">
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p className=" flex justify-center">
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
