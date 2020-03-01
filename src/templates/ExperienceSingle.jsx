import React from 'react'
import { graphql } from 'gatsby'

import { HistoryConsumer } from '../provider/history'
import Article from '../layouts/Article'
import Head from '../components/Head'
import DataType from '../components/DataType'
import Time from '../components/Time'
import { Link } from '../elements/Link'
import Hero from '../components/Hero'

class Page extends React.Component {
  state = {
    pageName: 'Experience',
  }

  componentDidMount() {
    const { breadcrumb } = this.props.pageContext

    this.props.history.update({
      location: breadcrumb.location,
      crumbLabel: this.props.data.mdx.title,
      crumbs: breadcrumb.crumbs,
    })
  }

  render() {
    const {
      mdx: {
        fields: { slug },
        frontmatter: { tags, responsibilities, title, position, company, started, ended },
        body,
        excerpt,
      },
    } = this.props.data

    const keywords =
      tags?.length > 0 ? tags : responsibilities?.length > 0 ? responsibilities : null

    return (
      <>
        <Head
          pageTitle={title}
          pageName={this.state.pageName}
          pageDescription={excerpt}
          pageKeywords={keywords}
          bodyClasses="single"
        />

        <Hero size="medium">
          <div className="container container--medium">
            <div className="post-title">
              <h1 itemProp="headline">{title}</h1>
              <h2 itemProp="alternativeHeadline">{responsibilities.join(' | ')}</h2>
            </div>
            <div className="post-info">
              <ul>
                <li>
                  <span className="pre">Timespan:</span> <Time date={started} /> –{' '}
                  <Time date={ended} />
                </li>
                <li>
                  <span className="pre">Company:</span> {company.name}
                </li>
                <li>
                  <span className="pre">Position:</span> {position}
                </li>
                <li>
                  <span className="pre">Address:</span>{' '}
                  <Link
                    href={`https://maps.apple.com/?address=${encodeURIComponent(
                      company.address
                    )}`}
                  >
                    {company.address}
                  </Link>
                </li>
                <li>
                  <span className="pre">Industry:</span> {company.industry}
                </li>
                <li>
                  <span className="pre">Website:</span>{' '}
                  {company.website ? (
                    <Link
                      href={company.website}
                      title={`Link to website: ${company.website}`}
                    >
                      {company.website}
                    </Link>
                  ) : (
                    <DataType tooltip="Not set" type="null"></DataType>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </Hero>

        <Article slug={slug} mdx={body} />
      </>
    )
  }
}

export default React.forwardRef((props, ref) => (
  <HistoryConsumer>
    {(history) => <Page {...props} ref={ref} history={history} />}
  </HistoryConsumer>
))

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug }, source: { eq: "experience" } }) {
      body
      excerpt(pruneLength: 150)
      fields {
        slug
      }
      frontmatter {
        title
        started
        ended
        position
        responsibilities
        company {
          name
          address
          industry
          website
        }
      }
    }
  }
`
