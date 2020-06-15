/** @format */

import React, {Suspense} from "react"
import "../components/i18n"
import VIP from "../components/VIP"
import {Helmet} from "react-helmet"
import {useTranslation} from "react-i18next"
import LayoutSecondary from "../layouts/layoutSecondary"
import bannerImg from "../images/banner/promotion-banner.jpg"

export default function event() {
    // const {i18n} = useTranslation("")
    // i18n.changeLanguage("zh")
    const pageTitle = "MSCGroup 赠金活动 | MSC Group"
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content="感谢您对MSCGroup 的认可，请您仔细阅读此活动须知并回复邮件确认参与此次活动。祝您交易愉快！"
                />
            </Helmet>
            <LayoutSecondary bannerImg={bannerImg} pageTitle="2020年新西兰赠金活动">
                <VIP />
            </LayoutSecondary>
        </>
    )
}
