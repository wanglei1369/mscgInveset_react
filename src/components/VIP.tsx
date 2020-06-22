/** @format */
import React from "react"
import "../styles/event.css"
import Contacts from "./Contacts"

export default function VIP() {
    const exampleBorderStyle = {
        padding: "2rem",
    }

    return (
        <>
            <div className="basic-4" id="event">
                <div className="container justify-content-center">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <h6 className="mb-5 mt-5" style={{color: "#7baab6"}}>
                                感谢您对MSC
                                的认可，请您仔细阅读此活动须知并回复邮件确认参与此次活动。祝您交易愉快！
                            </h6>
                            <h5 className="col-lg-12">具体细则如下</h5>
                            <p className="col-lg-12">
                                1. 本活动仅限<span className="highlight-red">新西兰地区客户</span>参与，4 月前
                                <span className="highlight-red">完成注册并入金</span>回复邮件确认即参与此活动；
                            </p>
                            <p className="col-lg-12">
                                2. 参与活动的客户凡入金大于等于 NZD 3000 或者等值美金，便可以获得20% 的赠金，
                                赠金金额最高不超过 USD 5000 或者等值纽币。
                            </p>
                            <p className="col-lg-12">
                                3. 参与活动客户在 2020年<span className="highlight-red">3月31日</span>{" "}
                                之前完成入金，便可申请参加此活动
                            </p>
                            <p className="col-lg-12">
                                4. 赠金有效期为三个月，从申请赠金起开始计算。当赠金到期时，MSC 有权利取走赠金。
                            </p>
                            <p className="col-lg-12">
                                5. 客户无权直接取出赠金，仅限于交易使用。如果当账户净值小于等于赠金金额的 120%， CJC
                                Markets 有权强平所有单子并取出赠金。 强平所带来的账户风险和交易结果均由客户自行承担。
                            </p>
                            <p className="col-lg-12">
                                6. 客户在活动期间可取出交易所产生的盈利金额，如取款资金大于或等于申请赠金的本金，CJC
                                Markets 有权强平所有单子，并取出赠金。 强平所带来的账户风险和交易结果均由客户自行承担。
                            </p>
                            <p className="col-lg-12">
                                7. 活动期间，累计交易手数凡达到 100 个标准手，即可获得 100NZD 电影券。
                            </p>
                            <p className="col-lg-12">客户需要完成赠金金额除以3 的标准手后，方可申领赠金；</p>
                            <div style={exampleBorderStyle}>
                                <h5>举例:</h5>
                                <table className="minimalistBlack">
                                    <thead>
                                        <tr>
                                            <th>入金</th>
                                            <th>赠金</th>
                                            <th>所需交易手数</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6,000</td>
                                            <td>1,200</td>
                                            <td>400</td>
                                        </tr>
                                    </tbody>
                                </table>
                            
                                <table className="minimalistBlack mt-5">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>lot 定义</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>金融衍生品</td>
                                            <td>1.0 = 1 lot</td>
                                        </tr>
                                        <tr>
                                            <td>白银</td>
                                            <td>2.0 = 1 lot</td>
                                        </tr>
                                        <tr>
                                            <td>股指</td>
                                            <td>2.0 = 1 lot</td>
                                        </tr>
                                        <tr>
                                            <td>黄金</td>
                                            <td>1.0 = 1 lot</td>
                                        </tr>
                                        <tr>
                                            <td>原油</td>
                                            <td>10.0 = 1 lot</td>
                                        </tr>
                                    </tbody>
                                </table>
                               
                                <p>每单已平仓交易分别包括一手买入交易和一手卖出交易</p>
                            </div>
                            <p className="col-lg-12 mt-4">
                                8. 客户交易量达标后请自行发邮件至
                                <a href="mailto:client@mscgroupsecurities.com">client@mscgroupsecurities.com</a>
                                申领赠金；交易量以 MSC 核实后为准。
                            </p>
                            <Contacts />
                            <p className="col-lg-12" style={{fontSize: "10px"}}>
                                您参与此次活动即确认您知悉并将遵守我们的活动条款。
                                <br />
                                本活动不能与其他活动叠加，活动最终解释权归 MSC 所有。
                                <br />
                                风险提示：金融产品交易存在风险并可能发生重大损失，也许并不是每个投资者都适合从事此类交易。在做出任何决定之前，您应该考虑此类投资是否适合您或者寻求专业建议。
                                <br />
                                您应该阅读我们网站上提供的产品披露声明和风险披露声明。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
