/** @format */

import React from "react"
import {useTranslation} from "react-i18next"
// import mamImage from "../images/services/MAM.png"
import "../fonts/iconfont/iconfont.css"

export default function Contacts() {
    const {t} = useTranslation("")
    const contactFormStyle = {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        background: "#253746",
    }
    const ContactStyle = {
        background: "#253746",
    }
    return (
        <>
            <section className="contact-blue mb-100" style={ContactStyle}>
                <div className="container">
                    <div className="row justify-content-center">
                   
                            <div className="p-5 contact-form" style={contactFormStyle}>
                                <form method="POST" action="https://formspree.io/client@mscgroupsecurities.com" className="row">
                                    <div className="col-lg-12">
                                        <h3 className="section-title-con-sm mb-0">{t("contactForm.contactForm")}</h3>
                                        <h5 className="text-light mb-10">{t("contactForm.contactGreeting")}</h5>
                                        <span className="iconfont iconfont-custom icon-hotelphone"></span>
                                            <a className="text-light" href="tel:0064223569006">
                                                +64 223569006
                                            </a>
                                            <br />
                                            <span className="iconfont iconfont-custom icon-Email"></span>
                                            <a className="text-light" href="mailto:client@mscgroupsecurities.com">
                                                client@mscgroupsecurities.com
                                            </a>
                                            <br/>
                                        {/* <address className="text-center">
                                            <span className="iconfont iconfont-custom icon-address"></span>144 Hobson Street, Auddand Central,Auddand,1010,NZ
                                        </address> */}
                                    </div>
                                    <div className="col-lg-6">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="form-control"
                                            placeholder={t("contactForm.contactName")}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder={t("contactForm.contactEmail")}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-12">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            className="form-control"
                                            placeholder={t("contactForm.contactSubject")}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea
                                            className="form-control p-2"
                                            name="message"
                                            id="message"
                                            placeholder={t("contactForm.contactMessage")}
                                            required
                                            style={{minHeight: "5rem"}}></textarea>
                                    </div>
                                    <div className="col-lg-12">
                                        <button className="btn-outline" type="submit" value="send">
                                            {t("contactForm.contactSubmit")}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                
                </div>
            </section>
        </>
    )
}
