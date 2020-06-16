/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/** @format */
import React, {useState, useEffect} from "react"
import {useTranslation} from "react-i18next"
import * as initialPrice from "../data/initialPrice.json"
import hmacSHA256 from "crypto-js/hmac-sha256"
import Hex from "crypto-js/enc-hex"
import "../styles/priceTable.css"

function priceTable(id, data) {
    if (id === 0) {
        return (
            <>
            <li className="price-slide usshares">
            {/* <ul data-label="TSLA" data-symbol="TSLA.SPOT.USD.CJC" className="currencies LiveInfo-pricing">
                <li className="LiveInfo-title">TSLA</li>
                <li data-multiplier="100" className="LiveInfo-spread">
                    {((parseFloat(data.TSLA.Ask) - data.TSLA.Bid) * 100).toFixed(0)}
                </li>
                <li className="sell-buy">
                    <div className="sell LiveInfo-bid LiveInfo-up">
                        <span className="LiveInfo-value">{data.TSLA.Bid}</span>
                    </div>
                    <div className="buy LiveInfo-ask LiveInfo-up">
                        <span className="LiveInfo-value">{parseFloat(data.TSLA.Ask).toFixed(2)}</span>
                    </div>
                </li>
                <li className="LiveInfo-change">{data.TSLA.Last}</li>
            </ul> */}
            <ul data-label="AMZN" data-symbol="AMZN.SPOT.USD.CJC" className="currencies LiveInfo-pricing">
                <li className="LiveInfo-title">AMZN</li>
                <li data-multiplier="100" className="LiveInfo-spread">
                    {((parseFloat(data.AMZN.Ask) - data.AMZN.Bid) * 100).toFixed(0)}
                </li>
                <li className="sell-buy">
                    <div className="sell LiveInfo-bid LiveInfo-up">
                        <span className="LiveInfo-value">{data.AMZN.Bid}</span>
                    </div>
                    <div className="buy LiveInfo-ask LiveInfo-up">
                        <span className="LiveInfo-value">{parseFloat(data.AMZN.Ask).toFixed(2)}</span>
                    </div>
                </li>
                <li className="LiveInfo-change">{data.AMZN.Last}</li>
            </ul>
            {/* <ul data-label="AAPL" data-symbol="AAPL.SPOT.CJC" className="currencies LiveInfo-pricing">
                <li className="LiveInfo-title">AAPL</li>
                <li data-multiplier="1" className="LiveInfo-spread">
                    {((parseFloat(data.AAPL.Ask) - data.AAPL.Bid) * 100).toFixed(0)}
                </li>
                <li className="sell-buy">
                    <div className="sell LiveInfo-bid LiveInfo-up">
                        <span className="LiveInfo-value">{data.AAPL.Bid}</span>
                    </div>
                    <div className="buy LiveInfo-ask LiveInfo-up">
                        <span className="LiveInfo-value">{parseFloat(data.AAPL.Ask).toFixed(2)}</span>
                    </div>
                </li>
                <li className="LiveInfo-change">{data.AAPL.Last}</li>
            </ul> */}
            <ul data-label="BA" data-symbol="BA.SPOT.CJC" className="currencies LiveInfo-pricing">
                <li className="LiveInfo-title">BA</li>
                <li data-multiplier="1" className="LiveInfo-spread">
                    {((parseFloat(data.BA.Ask) - data.BA.Bid) * 100).toFixed(0)}
                </li>
                <li className="sell-buy">
                    <div className="sell LiveInfo-bid LiveInfo-up">
                        <span className="LiveInfo-value">{data.BA.Bid}</span>
                    </div>
                    <div className="buy LiveInfo-ask LiveInfo-up">
                        <span className="LiveInfo-value">{parseFloat(data.BA.Ask).toFixed(2)}</span>
                    </div>
                </li>
                <li className="LiveInfo-change">{data.BA.Last}</li>
            </ul>
            <ul data-label="MSFT" data-symbol="MSFT.SPOT.CJC" className="currencies LiveInfo-pricing">
                <li className="LiveInfo-title">MSFT</li>
                <li data-multiplier="1" className="LiveInfo-spread">
                    {((parseFloat(data.MSFT.Ask) - data.MSFT.Bid) * 100).toFixed(0)}
                </li>
                <li className="sell-buy">
                    <div className="sell LiveInfo-bid LiveInfo-up">
                        <span className="LiveInfo-value">{data.MSFT.Bid}</span>
                    </div>
                    <div className="buy LiveInfo-ask LiveInfo-up">
                        <span className="LiveInfo-value">{parseFloat(data.MSFT.Ask).toFixed(2)}</span>
                    </div>
                </li>
                <li className="LiveInfo-change">{data.MSFT.Last}</li>
            </ul>
        </li>
    </>
        )
    }
    if (id === 1) {
        return (
            <>
                <li className="price-slide indices">
                    <ul data-label="SPX500" data-symbol="SPX500.SPOT.USD.CJC" className="currencies LiveInfo-pricing">
                        <li className="LiveInfo-title">SPX500</li>
                        <li data-multiplier="1" className="LiveInfo-spread">
                            {((parseFloat(data.SPX500.Ask) - data.SPX500.Bid) * 1).toFixed(0)}
                        </li>
                        <li className="sell-buy">
                            <div className="sell LiveInfo-bid LiveInfo-up">
                                <span className="LiveInfo-value">{parseFloat(data.SPX500.Bid).toFixed(1)}</span>
                            </div>
                            <div className="buy LiveInfo-ask LiveInfo-up">
                                <span className="LiveInfo-value">{parseFloat(data.SPX500.Ask).toFixed(1)}</span>
                            </div>
                        </li>
                        <li className="LiveInfo-change">{data.SPX500.Last}</li>
                    </ul>
                    {/* <ul data-label="US 30" data-symbol="US30.SPOT.USD.CJC" className="currencies LiveInfo-pricing">
                        <li className="LiveInfo-title">US 30</li>
                        <li data-multiplier="1" className="LiveInfo-spread">
                            {((parseFloat(data.US30.Ask) - data.US30.Bid) * 1).toFixed(0)}
                        </li>
                        <li className="sell-buy">
                            <div className="sell LiveInfo-bid LiveInfo-down">
                                <span className="LiveInfo-value">{parseFloat(data.US30.Bid).toFixed(1)}</span>
                            </div>
                            <div className="buy LiveInfo-ask LiveInfo-down">
                                <span className="LiveInfo-value">{parseFloat(data.US30.Ask).toFixed(1)}</span>
                            </div>
                        </li>
                        <li className="LiveInfo-change">{data.US30.Last}</li>
                    </ul> */}
                    <ul data-label="A50" data-symbol="A50.SPOT.USD.CJC" className="currencies LiveInfo-pricing">
                        <li className="LiveInfo-title">A50</li>
                        <li data-multiplier="1" className="LiveInfo-spread">
                            {((parseFloat(data.A50.Ask) - data.A50.Bid) * 1).toFixed(0)}
                        </li>
                        <li className="sell-buy">
                            <div className="sell LiveInfo-bid LiveInfo-up">
                                <span className="LiveInfo-value">{parseFloat(data.A50.Bid).toFixed(0)}</span>
                            </div>
                            <div className="buy LiveInfo-ask LiveInfo-up">
                                <span className="LiveInfo-value">{parseFloat(data.A50.Ask).toFixed(0)}</span>
                            </div>
                        </li>
                        <li className="LiveInfo-change">{data.A50.Last}</li>
                    </ul>
                    <ul data-label="NAS 100" data-symbol="NAS100.SPOT.AUD.CJC" className="currencies LiveInfo-pricing">
                        <li className="LiveInfo-title">NAS 100</li>
                        <li data-multiplier="1" className="LiveInfo-spread">
                            {((parseFloat(data.NAS100.Ask) - data.NAS100.Bid) * 1).toFixed(0)}
                        </li>
                        <li className="sell-buy">
                            <div className="sell LiveInfo-bid LiveInfo-down">
                                <span className="LiveInfo-value">{parseFloat(data.NAS100.Bid).toFixed(0)}</span>
                            </div>
                            <div className="buy LiveInfo-ask LiveInfo-down">
                                <span className="LiveInfo-value">{parseFloat(data.NAS100.Ask).toFixed(0)}</span>
                            </div>
                        </li>
                        <li className="LiveInfo-change">{data.NAS100.Last}</li>
                    </ul>
                </li>
            </>
        )
    }
    if (id === 2) {
        return (
            <>
                <li className="price-slide commodities">
                    <ul data-label="XAUUSD" data-symbol="XAUUSD.SPOT.USD.CJC" className="currencies LiveInfo-pricing">
                        <li className="LiveInfo-title">XAUUSD</li>
                        <li data-multiplier="100" className="LiveInfo-spread">
                            {((parseFloat(data.XAUUSD.Ask) - data.XAUUSD.Bid) * 100).toFixed(0)}
                        </li>
                        <li className="sell-buy">
                            <div className="sell LiveInfo-bid LiveInfo-up">
                                <span className="LiveInfo-value">{parseFloat(data.XAUUSD.Bid).toFixed(2)}</span>
                            </div>
                            <div className="buy LiveInfo-ask LiveInfo-up">
                                <span className="LiveInfo-value">{parseFloat(data.XAUUSD.Ask).toFixed(2)}</span>
                            </div>
                        </li>
                        <li className="LiveInfo-change">{data.XAUUSD.Last}</li>
                    </ul>
                    <ul data-label="XAGUSD" data-symbol="XAGUSD.SPOT.USD.CJC" className="currencies LiveInfo-pricing">
                        <li className="LiveInfo-title">XAGUSD</li>
                        <li data-multiplier="100" className="LiveInfo-spread">
                            {((parseFloat(data.XAGUSD.Ask) - data.XAGUSD.Bid) * 100).toFixed(0)}
                        </li>
                        <li className="sell-buy">
                            <div className="sell LiveInfo-bid LiveInfo-up">
                                <span className="LiveInfo-value">{parseFloat(data.XAGUSD.Bid).toFixed(3)}</span>
                            </div>
                            <div className="buy LiveInfo-ask LiveInfo-up">
                                <span className="LiveInfo-value">{parseFloat(data.XAGUSD.Ask).toFixed(3)}</span>
                            </div>
                        </li>
                        <li className="LiveInfo-change">{data.XAGUSD.Last}</li>
                    </ul>
                    <ul data-label="Oil" data-symbol="USOIL.SPOT.CJC" className="currencies LiveInfo-pricing">
                        <li className="LiveInfo-title">USOIL</li>
                        <li data-multiplier="1" className="LiveInfo-spread">
                            {((parseFloat(data.USOil.Ask) - data.USOil.Bid) * 100).toFixed(0)}
                        </li>
                        <li className="sell-buy">
                            <div className="sell LiveInfo-bid LiveInfo-up">
                                <span className="LiveInfo-value">{parseFloat(data.USOil.Bid).toFixed(3)}</span>
                            </div>
                            <div className="buy LiveInfo-ask LiveInfo-up">
                                <span className="LiveInfo-value">{parseFloat(data.USOil.Ask).toFixed(3)}</span>
                            </div>
                        </li>
                        <li className="LiveInfo-change">{data.USOil.Last}</li>
                    </ul>
                </li>
            </>
        )
    }
}

export default function PriceTable() {
    const {t} = useTranslation("")
    const verifyCode = Hex.stringify(
        // dollar sign for it is reserved and omitted by dotenv
        hmacSHA256(process.env.REACT_APP_API_MESSAGE + "$", process.env.REACT_APP_API_SECRET)
    )
    const [activeTable, setActiveTable] = useState(0)
    const [priceData, setPriceData] = useState(initialPrice.default)
    const priceTableStyle = {
        background: "#253746",
    }

    const handlePriceIndicator = id => {
        setActiveTable(id)
    }

    async function fetchData() {
        const res = await fetch(process.env.REACT_APP_API_PUBLIC_URL, {
            crossDomain: true,
            method: "POST",
            body: JSON.stringify({
                verifyCode: verifyCode,
            }),
        })
        const data = await res.json()
        setPriceData(data)
    }

    useEffect(() => {
        fetchData()
        // fetch data every half a minute.
        setInterval(() => {
            fetchData()
        }, 10000)
    }, [])

    return (
        <>
            <section className="section" style={priceTableStyle}>
                <h5 className="text-center mb-5 text-white">{t("hero.competitiveSpreads")}</h5>
                <div className="market-price-widget">
                    <div className="container">
                        {/* <h1>{priceData}</h1> */}
                        <p className="text-white">{t("whyCJC.advantage.aWideRangeOfProductsMessage")}</p>
                    </div>
                    <div className="price-picker my-5">
                        <a
                            className={`price-indicator ${activeTable === 0 ? "active" : ""} my-1`}
                            onClick={() => handlePriceIndicator(0)}>
                            {t("hero.exchange")}
                        </a>
                        <a
                            className={`price-indicator ${activeTable === 1 ? "active" : ""} my-1`}
                            onClick={() => handlePriceIndicator(1)}>
                            {t("hero.index")}
                        </a>
                        <a
                            className={`price-indicator ${activeTable === 2 ? "active" : ""} my-1`}
                            onClick={() => handlePriceIndicator(2)}>
                            {t("hero.commodities")}
                        </a>
                    </div>
                    <div className="prices">
                        <ul>
                            <li>
                                <ul className="titles">
                                    <li>Symbol</li>
                                    <li>Spread</li>
                                    <li className="hide-mobile">Bid</li>
                                    <li className="hide-mobile">Ask</li>
                                    <li className="hide-desktop">Bid/Ask</li>
                                    <li>EST</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="price-slider" data-component="price-slider">
                            {priceTable(activeTable, priceData)}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
