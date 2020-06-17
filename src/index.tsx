/** @format */

import React, {lazy, Suspense} from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/styles.css"
import "./styles/foundation.css"
import App from "./pages/App"
import WhyCjc from "./pages/WhyCJC"
import Forex from "./pages/products-and-services/forex"
import Metal from "./pages/products-and-services/metal"
import Oil from "./pages/products-and-services/oil"
import USShares from "./pages/products-and-services/USShares"
import Indices from "./pages/products-and-services/indices"
import Careers from "./pages/Careers"
import PlatformPage from "./pages/Platform"
import HelpPage from "./pages/Help"
import NotFound from "./pages/404"
import WebFont from "webfontloader"
import ScrollToTop from "./components/ScrollToTop"
import "react-app-polyfill/ie9"
import "react-app-polyfill/stable"
import * as serviceWorker from "./serviceWorker"

WebFont.load({
    google: {
        families: ["Lato", "Noto Sans SC", "sans-serif"],
    },
})

const AboutUsComponent = lazy(() => import("./pages/AboutUs"))
const AboutUsPage = () => {
    return (
        <Suspense fallback={null}>
            <AboutUsComponent />
        </Suspense>
    )
}

const CooperateComponent = lazy(() => import("./pages/Cooperate"))
const Cooperate = () => {
    return (
        <Suspense fallback={null}>
            <CooperateComponent />
        </Suspense>
    )
}

const PromotionCnComponent = lazy(() => import("./pages/Promotion-CN"))
const PromotionCn = () => {
    return (
        <Suspense fallback={null}>
            <PromotionCnComponent />
        </Suspense>
    )
}

const LiveShowComponent = lazy(() => import("./pages/LiveShow"))
const LiveShow = () => {
    return (
        <Suspense fallback={null}>
            <LiveShowComponent />
        </Suspense>
    )
}

const EvaluationComponent = lazy(() => import("./pages/evaluation.jsx"))
const Evaluation = () => {
    return (
        <Suspense fallback={null}>
            <EvaluationComponent />
        </Suspense>
    )
}

const CalendarComponent = lazy(() => import("./pages/Calendar"))
const Calendar = () => {
    return (
        <Suspense fallback={null}>
            <CalendarComponent />
        </Suspense>
    )
}

ReactDOM.render(
    <Router>
        <ScrollToTop>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/why-choose-cjc" exact component={WhyCjc} />
                <Route path="/evaluation" exact component={Evaluation} />
                <Route path="/calendar" exact component={Calendar} />
                <Route
                    exact
                    path="/platform/iphone"
                    render={props => <PlatformPage {...props} highlightString={0} />}
                />
                <Route exact path="/platform/ipad" render={props => <PlatformPage {...props} highlightString={1} />} />
                <Route
                    exact
                    path="/platform/android"
                    render={props => <PlatformPage {...props} highlightString={2} />}
                />
                <Route
                    exact
                    path="/platform/windows"
                    render={props => <PlatformPage {...props} highlightString={3} />}
                />
                <Route path="/products-and-services/usshares" exact component={USShares} />
                <Route path="/products-and-services/oil" exact component={Oil} />
                <Route path="/products-and-services/metal" exact component={Metal} />
                <Route path="/products-and-services/indices" exact component={Indices} />
                <Route exact path="/help/qna" render={props => <HelpPage {...props} highlightString={0} />} />
                <Route exact path="/help/documents" render={props => <HelpPage {...props} highlightString={1} />} />
                <Route path="/cooperate" exact component={Cooperate} />
                <Route
                    path="/login/trader"
                    component={() => {
                        window.location.href = "https://trader.mscgroupinvestment.com/login"
                        return null
                    }}
                />
                <Route
                    path="/external-sign-up"
                    component={() => {
                        window.location.href = "https://trader.mscgroupinvestment.com/register/"
                        return null
                    }}
                />
                <Route
                    path="/to-fma"
                    component={() => {
                        window.location.href =
                            "https://search-afsl.com/"
                        return null
                    }}
                />
                <Route
                    path="/platform-download/goto/android"
                    component={() => {
                        window.location.href =
                            "https://download.mql5.com/cdn/mobile/mt4/android?server=MSCGroup-Demo,MSCGroup-Real"
                        return null
                    }}
                />
                <Route
                    path="/platform-download/goto/iphone"
                    component={() => {
                        window.location.href =
                            "https://download.mql5.com/cdn/mobile/mt4/ios?server=MSCGroup-Demo,MSCGroup-Real"
                        return null
                    }}
                />
                <Route
                    path="/platform-download/goto/ipad"
                    component={() => {
                        window.location.href = "https://apps.apple.com/us/app/metatrader-4/id496212596#?platform=ipad"
                        return null
                    }}
                />
                <Route
                    path="/platform-download/goto/windows"
                    component={() => {
                        window.location.href = "https://download.mql5.com/cdn/web/15711/mt4/mscgroup4setup.exe"
                        return null
                    }}
                />
                <Route
                    path="/platform-download/goto/windows-vi"
                    component={() => {
                        window.location.href = "/media/installer/cjcmarkets4setup.exe"
                        return null
                    }}
                />
                <Route path="/promotion" exact component={PromotionCn} />
                <Route path="/live-show" exact component={LiveShow} />
                <Route path="/about-us" exact component={AboutUsPage} />
                <Route path="/careers" component={Careers} />
                <Route path="/jobs" component={Careers} />
                <Route path="/work-with-us" component={Careers} />
                <Route path="/404" component={NotFound} />
                <Route path="*" component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </ScrollToTop>
    </Router>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
