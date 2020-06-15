/** @format */

import React from "react"
import {Helmet} from "react-helmet"
import {useTranslation} from "react-i18next"

export default function SEO() {
    const {t} = useTranslation()
    const pageTitle = t("pagetitle") + " | MSC Group"
    const pageDesc = t("description")
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDesc} />
            </Helmet>
        </>
    )
}

