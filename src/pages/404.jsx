import React from "react"

import SEO from "../components/SEO"

const FourOhFourPage = () => (
  <>
    <SEO pageTitle="Not found" pageName="404" />
    {/* <Head pageName="404" /> */}

    {/* <Hero size="medium" centered={true}> */}
    <div className="container">
      <div className="post-title">
        <h1>404</h1>
        <h2>Page was not found</h2>
      </div>
    </div>
    {/* </Hero> */}
  </>
)

export default FourOhFourPage
