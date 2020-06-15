/** @format */

import React from "react"
import LayoutSecondary from "../layouts/layoutSecondary"
import {Helmet} from "react-helmet"
import bannerImg from "../images/calendar/banner.jpg"

export default function Careers() {
    const pageTitle = "Economic Calendar | MSC Group"
    const iframe =
        '<iframe scrolling="no" allowtransparency="true" style="box-sizing: border-box; height: 600px; width: 80vw;" src="https://s.tradingview.com/embed-widget/events/?#%7B%22width%22%3A510%2C%22height%22%3A600%2C%22isTransparent%22%3Afalse%2C%22utm_source%22%3A%22localhost%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22events%22%7D" frameborder="0"></iframe>'
    function Iframe(props: any) {
        return <div dangerouslySetInnerHTML={{__html: props.iframe ? props.iframe : ""}} />
    }
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <LayoutSecondary bannerImg={bannerImg} pageTitle={"Economic Calendar"}>
                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="tradingview-widget-container">
                                <div className="tradingview-widget-container__widget">
                                <Iframe iframe={iframe} /></div>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutSecondary>
        </>
    )
}
