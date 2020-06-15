/** @format */

import React, {CSSProperties} from "react"
import LayoutSecondary from "../layouts/layoutSecondary"
import {Helmet} from "react-helmet"
import bannerImg from "../images/liveshow/banner.jpg"
import {useTranslation} from "react-i18next"
import mamImage from "../images/services/MAM.png"
import qrCode from "../images/liveshow/live-show-qr.jpg"
import "../fonts/iconfont/iconfont.css"
import {Link} from "react-router-dom"

function Contacts(t: any, formName: string) {
    const contactFormStyle = {
        backgroundImage: `url(${mamImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    let buttonName = ""
    let formInfo = ""
    if (formName === "liveshow") {
        buttonName = "预约直播"
        formInfo = "如果您对以上内容感兴趣，请留下联系方式，预约直播："
    } else if (formName === "competition") {
        buttonName = "参加大赛"
        formInfo = "了解模拟大赛细节，请留下联系方式："
    }

    return (
        <>
            <section className="contact-blue">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="p-5 box-shadow contact-form" style={contactFormStyle}>
                            <form
                                name={formName}
                                method="POST"
                                action="https://formspree.io/elvis.du@cjcmarkets.com"
                                className="row">
                                <input type="hidden" name="form-name" value={formName} />
                                <div className="col-lg-12">
                                    <h5 className="text-dark mb-10">{formInfo}</h5>
                                    <address className="text-center">
                                        <span className="iconfont iconfont-custom icon-Email"></span>
                                        <a className="text-dark" href="mailto:client@mscgroupsecurities.com">
                                            elvis.du@cjcmarkets.com
                                        </a>
                                    </address>
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
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        className="form-control"
                                        placeholder="电话"
                                        required
                                    />
                                </div>
                                <div className="col-lg-12">
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
                                    <textarea
                                        className="form-control p-2"
                                        name="message"
                                        id="message"
                                        placeholder={t("contactForm.contactMessage")}
                                        style={{minHeight: "3rem"}}></textarea>
                                </div>
                                <div className="col-lg-12">
                                    <button className="btn-outline" type="submit" value="send">
                                        {buttonName}
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

export default function LiveShow() {
    const {t, i18n} = useTranslation("")
    i18n.changeLanguage("zh")
    const pageTitle = "直播概要 | MSC Group"
    const flexboxCssProperties: CSSProperties = {
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
    }
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content=" 感谢您对MSCGroup 的认可，请您仔细阅读此直播概要。祝您愉快！" />
            </Helmet>
            <LayoutSecondary bannerImg={bannerImg} pageTitle="直播概要">
                <div className="basic-4" id="event">
                    <div className="container justify-content-center">
                        <div className="row mb-5 justify-content-center">
                            <h6 className="mb-5 mt-5" style={{color: "#f4b01b"}}>
                                感谢您对MSCGroup 的认可，请您仔细阅读此直播概要。祝您愉快！
                            </h6>
                            <div className="col-lg-8 col-md-12">
                                <div style={flexboxCssProperties}>
                                    <div>
                                        <h5>实战操作 抢先行情</h5>
                                        <p>
                                            Francis
                                            将以行情实际操作为主，为大家直播交易策略解析，重大行情分析和实盘交易参考。
                                            根据过往10年丰富的交易经验，Francis 将从长线和短线的角度来分享真正的干货。
                                        </p>
                                        <h5>技术解析，产品介绍</h5>
                                        <p>
                                            Elvis
                                            将分8个课时，详细讲解各个产品，如何风险控制，具体操作指南和技术指标分析。同时实盘给大家展示模拟交易大赛的战况和结果，也会邀请最终的冠军以及神秘嘉宾给大家谈谈自己的交易心得。
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <p>微信扫码预约</p>
                                        <img src={qrCode} className="w-50 text-center" alt="wechat qr code" />
                                    </div>
                                </div>
                                {Contacts(t, "liveshow")}
                            </div>
                        </div>
                        <div className="row my-5 justify-content-center">
                            <div className="col-lg-8 col-md-12">
                                <h5>模拟交易大赛</h5>
                                <div style={flexboxCssProperties}>
                                    <div>
                                        <p>
                                            同时cjc也为想小试身手，或者lockdown期间想打发点时间的朋友准备了模拟交易大赛。
                                            <br />
                                            * 2020年4月13日前开设的所有模拟账户均有资格参加。
                                            <br />
                                            *前三名奖金为新西兰元 NZD$300, NZD$200,
                                            NZD$100。(奖金将存入真实账户，交易至少一手后即可提现）
                                            <br />
                                            *比赛细节请留言或致电咨询：Elvis -
                                            <a className="text-dark" href="tel:0212528108">
                                                021 252 8108
                                            </a>{" "}
                                            或者 Francis -{" "}
                                            <a className="text-dark" href="tel:02108825099">
                                                021 088 25099
                                            </a>
                                        </p>
                                    </div>
                                    <div>
                                        <Link to="/external-mock-up" className="btn-grey-inverse">
                                            {t("hero.createDemoAccount")}
                                        </Link>
                                    </div>
                                </div>
                                {Contacts(t, "competition")}
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutSecondary>
        </>
    )
}
