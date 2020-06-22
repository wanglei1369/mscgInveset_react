/** @format */

import React, {Suspense} from "react"
import {Link} from "react-router-dom"
import {useTranslation} from "react-i18next"
import footerImg from "../images/logoFooter.png"
import "../fonts/iconfont/iconfont.css"

export default function Footer() {
    const {t} = useTranslation("")
    const copyrightYear = new Date().getFullYear()
    return (
        <>
            <footer className="footer" style={{backgroundColor: "#253746"}}>
                <div className="py-50 footer-border">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-12">
                                <div className="mb-5 mb-md-0 text-center text-md-left">
                                    <Link className="footer-brand logo-image" to="/" style={{textDecoration: "none"}}>
                                        <img className="img-fluid mb-10 w-50" src={footerImg} alt="logo of CJC" />
                                    </Link>
                                    <p className="text-white mb-4">
                                        {t("footer.aboutMessage")}
                                        <br />
                                        <span>{t("footer.licenseNumber")}</span>{" "}
                                        <a
                                            className="text-red"
                                            href="https://search-afsl.com/">
                                            428289
                                            <span className="iconfont icon-share-square text-red"></span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="mt-5 mt-lg-0 text-center text-md-left">
                                    <p className="text-white">
                                        <br/>
                                        <br/>
                                        {t("services.tradingPlatformMessage1")}
                                        <br />
                                        <span>
                                            {t("services.tradingPlatformMessage2")}
                                            {t("services.tradingPlatformMessage3")}
                                            {t("services.tradingPlatformMessage4")}
                                            {t("services.tradingPlatformMessage5")}
                                        </span>
                                        <br />
                                        {t("services.tradingPlatformMessage6")}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className="mt-5 mt-lg-0 text-center text-md-left">
                                    <br/>
                                    <br/>
                                    <Link to="/platform/windows" className="btn-outline">
                                        {t("footer.platform")}
                                    </Link>
                                </div>
                            </div>

                            {/* <div className="col-lg-3 col-md-12">
                                <div className="mt-5 mt-lg-0 text-center text-md-left">
                                    <h4 className="mb-4 text-white">{t("footer.socialMedia")}</h4>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href="https://www.facebook.com/CJCmarkets">
                                                <span
                                                    className="iconfont icon-facebook text-red"
                                                    style={{fontSize: "2rem"}}></span>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://www.instagram.com/cjc_markets">
                                                <span
                                                    className="iconfont icon-instagram text-red"
                                                    style={{fontSize: "2rem"}}></span>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://www.linkedin.com/company/cjc-markets">
                                                <span
                                                    className="iconfont icon-linkedin text-red"
                                                    style={{fontSize: "2rem"}}></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-12">
                                {/* <h6 className="text-white">{t("footer.productDisclosureStatement")}</h6>
                                <p className="footer-paragraph">{t("footer.productDisclosureStatementMessage")}</p> */}
                            </div>
                            {/* <div className="col-lg-12 mt-2">
                                <h6 className="text-white">{t("footer.riskWarningAndProductSuitability")}</h6>
                                <p className="footer-paragraph">
                                    {t("footer.riskWarningAndProductSuitabilityMessage")}
                                </p>
                            </div> */}
                            <div className="col-lg-12 mt-2">
                                <h6 className="text-white">{t("footer.license")}</h6>
                                <p className="footer-paragraph">{t("footer.licenseMessage")}</p>
                            </div>
                            <div className="col-lg-12">
                                <h6 className="text-white">{t("footer.disclaimer")}</h6>
                                <p className="footer-paragraph">{t("footer.disclaimerMessage")}</p>
                                <p className="footer-paragraph">
                                    Apple, iPad, and iPhone are trademarks of Apple Inc., registered in the U.S. and other
                                    countries. App Store is a service mark of Apple Inc. Android is a trademark of
                                    Google Inc. Telephone calls and online chat conversations may be recorded and monitored.
                                    This website uses cookies to obtain information about your general internet usage. 
                                    Removal of cookies may affect the operation of certain parts of this
                                    website. Learn about cookies and how to remove them. Portions of this page are
                                    reproduced from work created and shared by Google and used according to terms
                                    described in the Creative Commons 3.0
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-4 pb-3 position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-5">
                                <p className="text-white text-center text-md-left">
                                    <span className="text-primary">{t("footer.copyrightInfo")}</span> &copy;
                                    {copyrightYear}
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-7">
                                {/* <ul className="list-inline text-center text-md-right">
                                    <li className="list-inline-item mx-lg-3 my-lg-0 mx-2 my-2">
                                        <Link to="/help/documents" className="font-secondary text-white">
                                            {t("footer.documents")}
                                        </Link>
                                    </li>
                                    <li className="list-inline-item mx-lg-3 my-lg-0 mx-2 my-2">
                                        <a
                                            className="font-secondary text-white"
                                            href="/media/documents/MSC - Privacy Policy.pdf">
                                            {t("contactForm.privacyPolicy")}
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
