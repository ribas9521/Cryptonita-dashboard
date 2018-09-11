import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Trend from 'react-trend'
import './funds.scss'

import ReactEcharts from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';

import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/toolbox';

export default class Funds extends Component {
    constructor(props) {
        super(props)
        this.getOption = this.getOption.bind(this)

    }

    getOption() {
        //this.coinAmount = this.props.coinAmount.amount <= 100 ? this.props.coinAmount.amount : 100      
        let opt = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    var tar;
                    if (params[1].value != '-') {
                        tar = params[1];
                    }
                    else {
                        tar = params[0];
                    }
                    return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                }
            },
            xAxis: {
                type: 'category',
                axisTick: { show: false },
                data: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
            },
            yAxis: {
                type: 'value',
                axisLine: { show: false },
                axisLabel: { show: false },
                axisTick: { show: false },
                splitLine: { show: false }
            },
            series: [{
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                data: [30, 40, -10, 23, -5, 28, 70],
                type: 'bar'
            }]
        }
        return (opt)
    }

    render() {
        return (
            <div className="gap-20">
                <div className="bd bgc-white p-20 container-fluid">
                    <div className="row fund-main">
                        <div className="col-md-2 fund-identity">
                            <div className="col-md-12">
                                <img src="https://pbs.twimg.com/profile_images/891615264156114944/KviD6nhO_400x400.jpg"
                                    alt=""
                                    className="align-middle img-fluid rounded-circle fund-logo" />
                            </div>
                        </div>
                        <div className="col-md-3 fund-info">
                            <div className="row">
                                <h3 className="fund-title">Alpha Crypto</h3>
                            </div>
                            <div className="row fund-info-content">
                                <div className="col-md-4">
                                    <h3>118</h3>
                                    <p><span>Followers</span></p>

                                </div>
                                <div className="col-md-4">
                                    <h3>523.3</h3>
                                    <p><span>In Btc</span></p>
                                </div>
                                <div className="col-md-4">
                                    <h3>78%</h3>
                                    <p><span>Profit</span></p>
                                </div>
                            </div>
                            <div className="followButton">Follow</div>
                        </div>
                        <div className="col-md-3 variations-container">
                            <strong>Crypto Saints</strong><br />
                            💯 No childish moon lambo content.<br />
                            📈 I breed traders. Others breed followers.<br />
                            📊 The only course on how to trade for a living has been launched. 👇<br />
                            <strong>www.thecryptosaints.com</strong><br />
                        </div>
                        <div className="col-md-1 variations-container">
                            <h6>Variation</h6>
                            <div className="col-md variations">
                                <div className="row">
                                    <div className="col-md-4">
                                        <h6>1h:</h6>
                                    </div>
                                    <div className="col-md-8">
                                        <span className="d-ib lh-0  fw-600 bdrs-10em pX-15 pY-15 bgc-purple-50 c-purple-500">12%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md variations">
                                <div className="row">
                                    <div className="col-md-4">
                                        <h6>24h:</h6>
                                    </div>
                                    <div className="col-md-8">
                                        <span className="d-ib lh-0  fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">-3%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md variations">
                                <div className="row">
                                    <div className="col-md-4">
                                        <h6>7d:</h6>
                                    </div>
                                    <div className="col-md-8">
                                        <span className="d-ib lh-0  fw-600 bdrs-10em pX-15 pY-15 bgc-purple-50 c-purple-500">15%</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-3 trend">
                            <ReactEcharts
                                echarts={echarts}
                                option={this.getOption()}
                                className='fund-chart'
                            />
                        </div>
                    </div>
                </div >
            </div>

        )
    }
}

// const mapStateToProps = state => {
//     return { userAuthenticated: state.sign.userAuthenticated }
// }
// const mapDispatchToProps = dispatch => {
//     return (bindActionCreators({ logout }, dispatch))
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Funds)
