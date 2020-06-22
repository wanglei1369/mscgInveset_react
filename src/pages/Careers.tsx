/** @format */

import React, {useState} from "react"
import LayoutSecondary from "../layouts/layoutSecondary"
import {Helmet} from "react-helmet"
import bannerImg from "../images/careers/banner.jpg"
import dataCareers from "../data/dataCareers.json"

function careersContent(id: number) {
    return (
        <>
            <h4 className="mb-30 text-red">
                <b>{dataCareers[id].jobTitle}</b>
            </h4>

            <div className="bg-gray p-5 mb-60">
                <div className="row justify-content-center mb-10">
                    <div className="col-lg-12">
                        {dataCareers[id].jobDesc
                            .split("\n")
                            .map((i: React.ReactNode, key: string | number | undefined) => {
                                return (
                                  
                                        <p className="text-dark text-left" key={key}>{i}</p>
                                
                                )
                            })}
                    </div>

                    <ul className="col-lg-12 text-left mb-5 mr-2" style={{listStyle: "inside"}}>
                        <h5 className="text-red">Responsibilities</h5>
                        <>
                            {dataCareers[id].jobResponsibilities
                                .split("\n")
                                .map((i: React.ReactNode, key: string | number | undefined) => {
                                    return (
                                        <li key={key} className="text-dark text-left">
                                            {i}
                                        </li>
                                    )
                                })}
                        </>
                    </ul>
                    <ul className="col-lg-12 text-left mb-5 mr-2" style={{listStyle: "inside"}}>
                        <h5 className="text-red">Qualifications</h5>
                        <>
                            {dataCareers[id].jobQualifications
                                .split("\n")
                                .map((i: React.ReactNode, key: string | number | undefined) => {
                                    return (
                                        <li key={key} className="text-dark text-left">
                                            {i}
                                        </li>
                                    )
                                })}
                        </>
                    </ul>
                    <ul className="col-lg-12 text-left mb-5 mr-2" style={{listStyle: "inside"}}>
                        <h5 className="text-red">Notice</h5>
                        <>
                            {dataCareers[id].jobNotice
                                .split("\n")
                                .map((i: React.ReactNode, key: string | number | undefined) => {
                                    return (
                                        <li key={key} className="text-dark text-left">
                                            {i}
                                        </li>
                                    )
                                })}
                        </>
                    </ul>
                    <div className="col-lg-12">
                        {dataCareers[id].jobExtra
                            .split("\n")
                            .map((i: React.ReactNode, key: string | number | undefined) => {
                                return (
                                    <div key={key}>
                                        <p className="text-dark text-left">{i}</p>
                                    </div>
                                )
                            })}
                    </div>
                </div>

            </div>
        </>
    )
}

export default function Careers() {
    const pageTitle = "Careers | MSC"
    const careersDict: {id: number; router: string; content: string; style: string}[] = []
    for (let index = 0; index < dataCareers.length; index++) {
        careersDict.push({
            id: index,
            router: dataCareers[index].jobRouter,
            content: dataCareers[index].jobTitle,
            style: "border-bottom",
        })
    }
    careersDict[0].style = "active border-bottom"
    const [defaultActive, setDefaultActive] = useState(0)
    const [activePart, setActivePart] = useState(careersDict)
    const handleClickOnSidebar = (id: number) => {
        if (id !== 0) {
            careersDict[id].style = "active border-bottom"
            careersDict[0].style = "border-bottom"
        } else {
            careersDict[0].style = "active border-bottom"
        }
        setDefaultActive(id)
        setActivePart(careersDict)
    }
    const sideBar = activePart.map(careersDictItem => (
        <li key={careersDictItem.id} className={careersDictItem.style}>
            <a className="d-block font-primary text-dark p-4" onClick={() => handleClickOnSidebar(careersDictItem.id)}>
                {careersDictItem.content}
            </a>
        </li>
    ))
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <LayoutSecondary bannerImg={bannerImg} pageTitle={"Work with Us"}>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <aside className="col-lg-4 order-lg-1 order-2">
                                <ul className="service-menu pl-0 border mb-50">{sideBar}</ul>
                            </aside>
                            <div className="col-lg-8 order-lg-2 order-1">{careersContent(defaultActive)}</div>
                        </div>
                    </div>
                </section>
            </LayoutSecondary>
        </>
    )
}
