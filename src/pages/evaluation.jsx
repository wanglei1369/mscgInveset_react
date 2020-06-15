/** @format */

import React from "react"
import {Helmet} from "react-helmet"
import {Link} from "react-router-dom"
import LayoutSecondary from "../layouts/layoutSecondary"
import bannerImg from "../images/evaluation/banner.jpg"

const iframe =
    "<iframe width='640px' height= '800px' src= 'https://forms.office.com/Pages/ResponsePage.aspx?id=NzqGl6hqnE6ee_-VPbEkHIZtSFmx5ktLghOB1wlOaKdUMTAyUERYSlhGRkVZUzhNNVdDTzJYTVMzVS4u&embed=true' frameborder= '0' marginwidth= '0' marginheight= '0' style= 'border: none; max-width:100%; max-height:100vh' allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>"
const childStyle = {
    position: "absolute",
    top: "40%",
    transform: (0, "-20%"),
}
function Iframe(props) {
    return <div dangerouslySetInnerHTML={{__html: props.iframe ? props.iframe : ""}} />
}
export default function Evaluation() {
    return (
        <>
            <Helmet>
                <title>Suitability Evaluation | MSCGroup</title>
                <meta name="description" content="Ongoing Client Suitability Evaluation Form" />
            </Helmet>
            <LayoutSecondary bannerImg={bannerImg} pageTitle="Suitability Evaluation">
                <section className=" mt-100">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-right">
                            <Iframe iframe={iframe} />
                        </div>
                        <div className="col-lg-4 text-left mt-5 mb-5" style={{position: "relative"}}>
                            <div className="row">
                                <div className="col-8">
                                    <div className="mt-5 pt-5">
                                        <h5 className="text-dark">
                                            If you have already submitted the evaluation form, please click the button
                                            below to login.
                                        </h5>
                                        <Link to="/login/trader" className="btn-outline">
                                            Trader Login
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutSecondary>
        </>
    )
}
