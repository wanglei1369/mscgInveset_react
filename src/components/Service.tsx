/** @format */

import React, {Suspense} from "react"
import {useTranslation} from "react-i18next"
import "../styles/ourAdvantages.css"
import advantage1Image from "../images/whyCJC/advantage1.png"
import advantage2Image from "../images/whyCJC/advantage2.png"
import advantage3Image from "../images/whyCJC/advantage3.png"
import advantage4Image from "../images/whyCJC/advantage4.png"
import advantage5Image from "../images/whyCJC/advantage5.png"
import advantage6Image from "../images/whyCJC/advantage6.png"
import {Link} from "react-router-dom"
export default function Service() {
    const {t} = useTranslation("")
    return (
        <>
            <div className="our-advantages-flex">
                <div className="flex-container" style={{height: "100%", width: "100%"}}>
                    <div>
                        <ul className="flex-list">
                            <li className="text-center flex-title">
                                <img className="img-fluid w-25" src={advantage1Image} alt="advantage1Image" />
                            </li>
                            <li className="text-center">
                                <h5>{t("whyCJC.advantage.superiorExecution")}</h5>
                               
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex-list">
                            <li className="text-center flex-title">
                                <img className="img-fluid w-25" src={advantage2Image} alt="advantage2Image" />
                            </li>
                            <li>
                                <h5 className="text-center">{t("whyCJC.advantage.aWideRangeOfProducts")}</h5>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex-list">
                            <li className="text-center flex-title">
                                <img className="img-fluid w-25" src={advantage3Image} alt="advantage3Image" />
                            </li>
                            <li>
                                <h5 className="text-center">{t("whyCJC.advantage.latestTechnologyPlatform")}</h5>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex-list">
                            <li className="text-center flex-title">
                                <img className="img-fluid w-25" src={advantage4Image} alt="advantage4Image" />
                            </li>
                            <li>
                                <h5 className="text-center">{t("whyCJC.advantage.NDDTrading")}</h5>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex-list">
                            <li className="text-center flex-title">
                                <img className="img-fluid w-25" src={advantage5Image} alt="advantage5Image" />
                            </li>
                            <li>
                                <h5 className="text-center">
                                    {t("whyCJC.advantage.competitiveSpreadsAndLowTransactionCosts")}
                                </h5>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex-list">
                            <li className="text-center flex-title">
                                <img className="img-fluid w-25" src={advantage6Image} alt="advantage6Image" />
                            </li>
                            <li>
                                <h5 className="text-center">{t("whyCJC.advantage.eminentCustomerService")}</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mb-30">
                <div className="container">
                    <div className="col-lg-12 text-center">
                        <Link to="/why-choose-cjc" className="btn-outline">
                            {t("hero.findOutMore")}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
