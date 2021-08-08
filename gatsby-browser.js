/**
 * Gatsby's Browser APIs
 *
 * @see https://www.gatsbyjs.org/docs/browser-apis/
 */

import "./src/styles/index.scss"

export { onClientEntry } from "./gatsby/browser/client-entry"
export { onInitialClientRender } from "./gatsby/browser/client-render"
export { wrapPageElement } from "./gatsby/browser/wrap-page"
export { wrapRootElement } from "./gatsby/browser/wrap-root"
