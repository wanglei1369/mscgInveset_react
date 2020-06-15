/** @format */

import React from "react"
import "react-responsive-modal/styles.css"
import {Modal} from "react-responsive-modal"
export default class App extends React.Component {
    state = {
        open: true,
    }
    onOpenModal = () => {
        this.setState({open: true})
    }
    onCloseModal = () => {
        this.setState({open: false})
    }
    render() {
        const {open} = this.state
        return (
            <>
               
                <Modal open={open} onClose={this.onCloseModal} center={true}>
                    <h3>MSCGroup原油产品通告</h3>
                    <h5></h5>
                    <h5></h5>
                    <p>尊敬的客户，您好。</p>
                    <p>由于近期原油市场不稳定，市场流动性缺乏。为保障客户利益，MSC group将采取以下特殊措施：</p>
                    <p>当上级流动性提供商，禁止交易，或者当WTIUSD价格低于5美元，MSC Group将暂停WTIUSD交易产品的新开仓订单。现有仓位可以进行平仓交易。之后视原油价格情况来恢复正常交易。</p>
                    <p>当WTIUSD价格触及2美元，所有WTIUSD仓位将按照当时市场价格强制平仓，包括锁单。实际交易安排，以平台显示为准。</p> 
                    <p>此特殊保护措施即时生效, 对此带来的不便，我们深感抱歉。</p>
                    <p>MSC Group建议阁下谨慎交易和评估个人风险，敬请您密切关注账户的持仓和资金情况，以防市况突变, 对此本公司将不作另行通知。
                    若阁下有任何疑问，请随时联系在线客服或致电客户服务部查询。</p>
                    <p>感谢阁下对MSC Group的支持，并祝交易愉快！</p>
                    <h5>MSC Group 客服团队</h5>
                </Modal>
            </>
        )
    }
}
