/** @format */

import React, {CSSProperties} from "react"
import {useTranslation} from "react-i18next"
import "../styles/ourAdvantages.css"
import bannerDemoImg from "../images/banner-demo.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"
import Modal from "./Modal"
import liveshowBannerImg from "../images/banner/live-show.jpg"
import {Link} from "react-router-dom"
import "../styles/banner.css"

const bannerOneStyle: CSSProperties = {
    background: `linear-gradient(to bottom, rgba(43, 43, 43, 0.9), rgba(0, 1, 40, 0.3)), url(${bannerDemoImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // minHeight: "100vh",
    // maxHeight: "100vh",
}

const liveshowBannerImgStyle: CSSProperties = {
    background: `url(${liveshowBannerImg})`,
    backgroundPosition: "center left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
    maxHeight: "100vh",
}
const carouselTextStyle: CSSProperties = {
    zIndex: 2000,
}
function cnBanner(t: any) {
    return (
        <>
            {/* <Modal /> */}
            <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                swipeable={false}
                showStatus={false}
                showThumbs={false}
                interval={6000}>
                {/* change banner     */}
                {/* <section className="section blur-bgimage" style={liveshowBannerImgStyle}>
                <div className="container" style={carouselTextStyle}>
                    <div className="row banner">
                        <div className="col-lg-8 col-md-12 text-left">
                            <h2 className="text-cream mb-30" style={{fontWeight: "bold"}}>
                                黄金要变天？石油会跌至10块？
                            </h2>

                            <h4 className="text-cream mb-30">
                                动荡市场谁主沉浮，这个时候不知道做点什么又不想错失良机？
                                <br />
                                快来看由CJC Market赞助的交易高手<span style={{color: "#f6db14"}}>在线直播！</span>
                            </h4>
                        </div>
                        <div className="col-lg-12 col-md-12 text-left">
                            <Link to="/live-show" className="btn-liveshow">
                                预约直播
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}
                <section className="section blur-bgimage" style={bannerOneStyle}>
                    <div className="container" style={carouselTextStyle}>
                        <div className="row banner">
                            <div className="col-lg-12">
                                <h2 className="text-white text-left" style={{fontWeight: "bold"}}>
                                    {t("hero.heroSubtitle1")}
                                    <br />
                                    {t("hero.heroSubtitle1PreCN")}
                                    {t("hero.heroSubtitle1CN")}
                                    {t("hero.heroSubtitle2")}
                                </h2>
                                <h5 className="section-title text-white banner-title text-left">
                                    {t("hero.heroMessage")}
                                </h5>
                            </div>
                            <div className="col-lg-6 col-md-12 text-left">
                                <Link to="/external-sign-up" className="btn-solid">
                                    {t("hero.createLiveAccount")}
                                </Link>
                                <Link to="/cooperate" className="btn-grey-inverse">
                                    {t("hero.createDemoAccount")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Carousel>
        </>
    )
}
function defaultBanner(t: any) {
    return (
        <>
            {/* <Modal /> */}
            <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                swipeable={false}
                showStatus={false}
                showThumbs={false}
                interval={6000}>
                <section className="section blur-bgimage" style={bannerOneStyle}>
                    <div className="container" style={carouselTextStyle}>
                        <div className="row banner">
                            <div className="col-lg-12">
                                <h2 className="text-white text-center" style={{fontWeight: "bold"}}>
                                    {t("hero.heroSubtitle1")}
                                    <br />
                                    {t("hero.heroSubtitle1PreCN")}
                                    {t("hero.heroSubtitle1CN")}
                                    {t("hero.heroSubtitle2")}
                                </h2>
                                <h5 className="section-title text-white banner-title text-center">
                                    {t("hero.heroMessage")}
                                </h5>
                            </div>
                            {/* <div className="col-lg-12 col-md-12 text-center">
                                <Link to="/external-sign-up" className="btn-solid">
                                    {t("hero.createLiveAccount")}
                                </Link>
                                <Link to="/cooperate" className="btn-grey-inverse">
                                    {t("hero.createDemoAccount")}
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </section>
            </Carousel>
        </>
    )
}

export default function Banner() {
    const {t, i18n} = useTranslation("")
    if (i18n.language.includes("zh")) {
        return cnBanner(t)
    } else {
        return defaultBanner(t)
    }
}
