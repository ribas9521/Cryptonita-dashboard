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

import 'easy-pie-chart/dist/jquery.easypiechart.min.js';

export default class Funds extends Component {
    constructor(props) {
        super(props)
        this.getOption = this.getOption.bind(this)
    }
    componentDidMount() {
        if ($('.easy-pie-chart').length > 0) {
            $('.easy-pie-chart').easyPieChart({
                onStep(from, to, percent) {
                    this.el.children[0].innerHTML = `${Math.round(percent)} %`;
                },
            });
        }
    }
    getOption() {
        //this.coinAmount = this.props.coinAmount.amount <= 100 ? this.props.coinAmount.amount : 100      
        let opt = {
            xAxis: {
                type: 'category',
                data: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
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
                    <div className="row">
                        <div className="col-md-2 fund-identity">
                            <div className="col-md-12">
                                <h5>Alpha Crypto</h5>
                            </div>
                            <div className="col-md-12">
                                <img src="https://pbs.twimg.com/profile_images/891615264156114944/KviD6nhO_400x400.jpg"
                                    alt=""
                                    className="img-responsive fund-logo" />
                            </div>
                        </div>


                        <div className="col-md-2 variations-container">
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
                        <div className="col-md-2 variations-container">
                            <h6>Operations</h6>
                            <div className="col-md variations">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>24/07 13:36</h6>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="d-ib lh-0  fw-600 bdrs-10em pX-15 pY-15 bgc-purple-50 c-purple-500">12%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md variations">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>24/07 13:36</h6>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="d-ib lh-0  fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">-3%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md variations">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>24/07 13:36</h6>
                                    </div>
                                    <div className="col-md-6">
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
                        <div className="col-md-3">
                            <div className="peer">
                                <div className="easy-pie-chart" data-size="80" data-percent="75" data-bar-color="#f44336">
                                    <span>75 %</span>
                                    <canvas height="80" width="80"></canvas>                             
                                    
                                </div>

                            </div>
                            <button className="followButton">Seguir</button>


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
