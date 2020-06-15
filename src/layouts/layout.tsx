/** @format */

import React, {ReactNode} from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/styles.css"
import "../styles/foundation.css"

interface Props {
    children: ReactNode
}

const Layout = ({children}: Props) => {
	return (
		<>
			<SEO />
			<Header></Header>
			<div>
				<main>{children}</main>
			</div>
			<Footer></Footer>
		</>
	)
}

export default Layout
