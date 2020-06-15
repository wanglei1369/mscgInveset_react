/** @format */

import React, {Suspense} from "react"
import {Link} from "react-router-dom"
import {useTranslation} from "react-i18next"
import "../styles/notfound.css"

export default function NotFoundPage() {
    const {t} = useTranslation("NotFound")

    return (
        <>
        <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <div></div>
                        <h1>404</h1>
                    </div>
                    <h2>{t("NotFound.notFoundTitle")}</h2>
                    <p>{t("NotFound.notFoundMessage")}</p>
                    <Link to="/" className="btn-outline">{t("NotFound.notFoundHomepage")}</Link>
                </div>
            </div>
        </>
    )
}