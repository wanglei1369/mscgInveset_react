/** @format */

import React from "react"
import {useTranslation} from "react-i18next"
import ContactForm from "../components/Contacts"
import "../components/i18n"
import LayoutSecondary from "../layouts/layoutSecondary"
import bannerImg from "../images/cooperate/banner.jpg"
import mamImage from "../images/services/MAM.png"
import mamIcon from "../images/services/mam-icon.png"
import ibIcon from "../images/services/ib-icon.png"
import hedgeIcon from "../images/services/hedge-icon.png"

export default function Cooperate() {
    const {t} = useTranslation("")
    const contactFormStyle = {
        backgroundImage: `url(${mamImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    const iconStyle = {
        width: "6%",
    }
    return (
        <>
            <LayoutSecondary bannerImg={bannerImg} pageTitle={t("header.partner")}>
                <section className="section">
                    <div className="container">
                        <div className="row mb-100 justify-content-center" id="hedge">
                            <div className="col-lg-10 text-center">
                                <img className="img-fluid mb-3" style={iconStyle} src={hedgeIcon} alt="hedge Icon" />
                                <h5>{t("productsAndServices.hedge")}</h5>
                                <div className="outline-0 text-center">
                                    <p>{t("productsAndServices.hedgeMessage")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ContactForm />
            </LayoutSecondary>
        </>
    )
}
