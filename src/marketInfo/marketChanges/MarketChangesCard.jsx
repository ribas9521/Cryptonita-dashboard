import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMarketInfo } from '../marketInfoActions'


import ReactEcharts from 'echarts-for-react'
import Loading from '../../common/template/loading/loading'

class MarketChangesCard extends Component{
    constructor(props){
        super(props)
        this.getOption= this.getOption.bind(this)
        //  variation= {
        //     labels: ['bitcoin', 'bitcoin', 'bitcoin', 'bitcoin', 'bitcoin', 'bitcoin', 'bitcoin', 'bitcoin', 'bitcoin', 'bitcoin'],
        //     percentChange1h: [1,2,3,4,5,6,7,8,9,10],
        //     percentChange24h: [-0.5, -4.85, -3.67, -5.34, -5.07, -6.65, -7.58, -6.46, -5.02, -3.68],
        //     percentChange7d: [50, 0, 0, 0, 0, -1, -1, -1, -1, -1]
        // }
        this.chart = <Loading/>
        this.props.getMarketInfo()
        
    }

   
      

    componentWillMount(){
        
        
    }
    componentDidUpdate(){        
       if (this.props.variation.labels.length > 0){
           
           this.chart = <ReactEcharts
               option={this.getOption()}
               style={{ height: '350px', width: '100%' }}
               className='react_for_echarts'
           />   
       }

    }
   
   getOption(){
       
       let data =[]
        if(this.props.type==='1h')
            data = this.props.variation.percentChange1h
        if(this.props.type==='24h')
            data = this.props.variation.percentChange24h
        if(this.props.type==='7d')
            data = this.props.variation.percentChange7d

       let opt = {
           title: {
              
               subtext: 'From CoinMarketcap',
           },
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
               position: 'top',
               splitLine: { lineStyle: { type: 'dashed' } },
           },
           yAxis: {
               type: 'category',
               axisLine: { show: false },
               axisLabel: { show: true },
               axisTick: { show: false },
               splitLine: { show: false },
               data: this.props.variation.labels,
               rich: {

               }
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
                   data: data

               }
           ]
       }
       console.log(opt)
       
       return (opt)
   }
    render(){  
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
    return { variation: state.market.variation }
}
const mapDipatchToProps = dispatch => bindActionCreators({ getMarketInfo }, dispatch)

export default connect(mapStateToProps, mapDipatchToProps)(MarketChangesCard)