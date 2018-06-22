import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setCoinAmount } from '../marketInfoActions'

import ReactEcharts from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';



import Loading from '../../common/template/loading/loading'


class MarketChangesCard extends Component{
    constructor(props){
        super(props)
        this.getOption= this.getOption.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
        //  variation= {
        //     labels: ['bitcoin', 'bitcoin', 'bitcoin', 'bitcoin', 'bitcoin', 'bitcoin', 'bitcoin', 'bitcoin', 'bitcoin', 'bitcoin'],
        //     percentChange1h: [1,2,3,4,5,6,7,8,9,10],
        //     percentChange24h: [-0.5, -4.85, -3.67, -5.34, -5.07, -6.65, -7.58, -6.46, -5.02, -3.68],
        //     percentChange7d: [50, 0, 0, 0, 0, -1, -1, -1, -1, -1]
        // }
        this.chart = <Loading/>
       
    }
    shouldComponentUpdate(nextProps, nextState){
        return (this.props.type === nextProps.coinAmount.type) || nextProps.coinAmount.type === 'all'
    }

    componentWillMount(){
        this.coinAmount = this.props.coinAmount.amount
    }
    componentDidMount(){
        this.component.addEventListener('scroll', this.handleScroll)
        //$(this.component).on('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        this.component.removeEventListener('scroll',()=>null)
        this.props.setCoinAmount({ amount: 10, type: this.props.type })
    }
    handleScroll(event){
        let element = event.target
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            this.props.setCoinAmount({ amount: this.coinAmount + 10, type: this.props.type})
        }
    }
   
   getOption(){
        this.coinAmount = this.props.coinAmount.amount <= 100 ? this.props.coinAmount.amount : 100
        let variationData = {}
        for(var key in this.props.variation){
            variationData[key] = this.props.variation[key].filter((value, i) => i < parseInt(this.coinAmount))
        }
       let data =[]
        if(this.props.type==='1h')
            data = variationData.percentChange1h
        if(this.props.type==='24h')
            data = variationData.percentChange24h
        if(this.props.type==='7d')
            data = variationData.percentChange7d
       let chartData = data.map((value)=>{
            let newObj ={
                value : 0,
                itemStyle :{
                    color: ''                
                }
            }
            newObj['value'] = value
            newObj['itemStyle'].color = value <= 0 ? '#c23531' : '#31c235'
           return newObj
       })
       let rich ={}
       variationData.symbols.map((symbol) => {
           rich[symbol] = {
               height: 25,
               align: 'center',
               backgroundColor: {
                   image: '../../assets/static/images/crypto-icons/' + symbol + '.png'
               }
           }
       })
       let opt = {
           
           tooltip: {
               trigger: 'axis',
               axisPointer: {            
                   type: 'shadow'        
               }
           },
           grid: {
               top: 80,
               bottom: 30,
               left: 80               
           },
           xAxis: {
               type: 'value',
               position: 'bottom',
               splitLine: {show: false},
               axisTick: { show: false },
               axisLine:{
                   show:false   
               },
               axisLabel:{show:false}
           },
           yAxis: {
               axisTick: { show: false },
               type: 'category',     
               data: variationData.symbols,
               inverse: true,
               axisLabel: {                   
                    formatter: function (value) {                       
                        return '{' + value + '| }'
                    },                   
                    rich:rich
                },
               axisLine: {
                   lineStyle: {
                       color: '#ccc'
                   }
               },
               splitLine: {show:true, lineStyle: { type: 'dashed' } }
           },
           series: [
               {
                   name: 'Percentage',
                   type: 'bar',
                   label:{
                       normal: {
                           show: true,
                           formatter: '{c}%'                        
                       }
                   },
                   data: chartData  
               }
           ]
       }
       return (opt)
   }
    render(){
        if (this.props.variation && this.props.variation.labels.length >0 ) {
            this.chart =     
                    <ReactEcharts
                        echarts = {echarts}
                        option={this.getOption()}
                        style={{ height: parseInt(this.coinAmount) * 50, width: '100%' }}
                        className='react_for_echarts'                       
                    />
        }
        return(
            <div className="layers bd bgc-white p-20">
                <div className="layer w-100 mB-10">
                    <h5 className="lh-1">{this.props.title}</h5>
                    <h6>Amonut of coins showing: {this.coinAmount}</h6>
                </div>
                <div className="layer w-100">
                        <div className="peers ai-sb fxw-nw canvas-container" 
                            ref={(ref)=>this.component = ref}>                             
                            {this.chart}                        
                        </div>     
                </div>
            </div>
            
        )
        
    }
}

const mapStateToProps = state => {
    return { coinAmount: state.market.coinAmount }
}
const mapDipatchToProps = dispatch => bindActionCreators({ setCoinAmount }, dispatch)

export default connect(mapStateToProps, mapDipatchToProps)(MarketChangesCard)