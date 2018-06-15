import React,{Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTopExchangesByPair } from '../marketInfoActions'


import ReactEcharts from 'echarts-for-react'
import Loading from '../../common/template/loading/loading'
import echarts from 'echarts'

class VolumeByExchangeCard extends Component{
    constructor(props){
        super(props)
        this.getOption = this.getOption.bind(this)
        this.pairs = [{ baseCoin: 'usd', targetCoin: 'btc' }, 
            { baseCoin: 'brl', targetCoin: 'btc' }, 
            { baseCoin: 'eur', targetCoin: 'btc' },
            { baseCoin: 'usdt', targetCoin: 'btc' },
            { baseCoin: 'jpy', targetCoin: 'btc' },
            { baseCoin: 'krw', targetCoin: 'btc' }
        ]       
        this.chart = <Loading />
        
    }
   
    
    componentWillMount(){
        this.props.getTopExchangesByPair(this.pairs)
    }
    getOption(){        
        function colorMappingChange(value) {
            var levelOption = getLevelOption(value);
            chart.setOption({
                series: [{
                    levels: levelOption
                }]
            });
        }
        var formatUtil = echarts.format;
        function getLevelOption() {
            return [
                {
                    itemStyle: {
                        normal: {
                            borderWidth: 0,
                            gapWidth: 5
                        }
                    }
                },
                {
                    itemStyle: {
                        normal: {
                            gapWidth: 1
                        }
                    }
                },
                {
                    colorSaturation: [0.35, 0.5],
                    itemStyle: {
                        normal: {
                            gapWidth: 1,
                            borderColorSaturation: 0.6
                        }
                    }
                }
            ];
        }
        let opt = {


            tooltip: {
                formatter: function (info) {
                    var value = info.value;
                    var treePathInfo = info.treePathInfo;
                    var treePath = [];

                    for (var i = 1; i < treePathInfo.length; i++) {
                        treePath.push(treePathInfo[i].name);
                    }

                    return [
                        '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
                        'Volume in BTC: ' + formatUtil.addCommas(value),
                    ].join('');
                },
                z: 9
            },

            series: [
                {
                    name: 'Btc volume per exchange',
                    type: 'treemap',
                    visualMin: 300,
                    visualMax: 1,
                    label: {
                        show: true,
                        formatter: '{b}'
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#fff'
                        }
                    },
                    levels: getLevelOption(),
                    data: this.props.tree
                }
            ]
        }
        console.log(this.props.tree)
        return opt
    }
   componentDidUpdate(){
       if (this.props.tree) {
           this.chart = <ReactEcharts
               option={this.getOption()}
               style={{ height: '600px', width: '100%' }}
               className='react_for_echarts'
           />
       }
   }

    render() {
        
        return(
            <div className="layers bd bgc-white p-20">
                <div className="layer w-100 mB-10">
                    <h5 className="lh-1">{this.props.title}</h5>
                </div>
                <div className="layer w-100">
                    <div className="peers ai-sb fxw-nw canvas-container">
                    
                        {this.chart}
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return { tree: state.market.tree }
}
const mapDipatchToProps = dispatch => bindActionCreators({ getTopExchangesByPair }, dispatch)

export default connect(mapStateToProps, mapDipatchToProps)(VolumeByExchangeCard)