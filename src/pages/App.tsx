/** @format */

import React from "react"
import "../components/i18n"
import Layout from "../layouts/layout"
import Service from "../components/Service"
import Banner from "../components/Banner"
import Terminal from "../components/Terminal"
import Contact from "../components/Contacts"
import FMA from "../components/FMA"
import PriceTable from "../components/PriceTable"

export default function Index() {
    return (
        <>
            <Layout>
                <Banner />
                <Service />
                <PriceTable />
                <FMA />
                <Terminal />
                <Contact />
            </Layout>
        </>
    )
}
