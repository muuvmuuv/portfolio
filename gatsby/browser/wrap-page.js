import { MDXProvider } from "@mdx-js/react"
import React from "react"

export const wrapPageElement = ({ element }) => <MDXProvider>{element}</MDXProvider>
