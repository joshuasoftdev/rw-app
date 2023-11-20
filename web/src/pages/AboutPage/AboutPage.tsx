import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <h1 className="mb-4 flex justify-center font-serif text-6xl font-bold text-rose-500">
        AboutPage
      </h1>
      <p className=" flex justify-center">
        Find me in <code>./web/src/pages/AboutPage/AboutPage.tsx</code>
      </p>
      <p className=" flex justify-center">
        My default route is named <code>about</code>, link to me with `
        <Link to={routes.about()}>About</Link>`
      </p>
    </>
  )
}

export default AboutPage
