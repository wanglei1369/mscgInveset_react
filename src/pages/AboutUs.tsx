/** @format */

import React from "react"
import {useTranslation} from "react-i18next"
import LayoutSecondary from "../layouts/layoutSecondary"
import bannerImg from "../images/aboutus/banner.jpg"

export default function AboutUs() {
    const {t} = useTranslation("")
    return (
        <>
            {/* <LayoutSecondary bannerImg={bannerImg} pageTitle={t("aboutUs.brandHistory")}> */}
                <section className="mission section">
                    <div className="container">
                        <div className="row justify-content-center mb-50">
                            <div className="col-lg-10 text-center">
                            <h3 className="section-title-sm mb-0">{t("aboutUs.brandHistory")}</h3>
                            <br/>
                            <br/>
                            </div>
                            <div className="col-lg-10 text-left">
                                {t("aboutUs.brandHistoryStory")
                                    .split("\n")
                                    .map((i, key) => {
                                        return (
                                            <p key={key}>
                                                <span>{i}</span>
                                            </p>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                </section>
            {/* </LayoutSecondary> */}
        </>
    )
}
