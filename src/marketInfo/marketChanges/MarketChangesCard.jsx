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
    }

   
    componentDidMount(){
        
    }

    
    componentWillMount(){
        this.props.getMarketInfo()
    }
   
   getOption(){

        let variationData = {}

        for(var key in this.props.variation){
            variationData[key] = this.props.variation[key].filter((value, i) => i < parseInt(this.props.coinAmount))
        }
       

    
       
       let data =[]
        if(this.props.type==='1h')
            data = variationData.percentChange1h
        if(this.props.type==='24h')
            data = variationData.percentChange24h
        if(this.props.type==='7d')
            data = variationData.percentChange7d

        
       //data = [1, 2, 3, -4, 5, 6, -7, 8, 9, 10]

       

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

    //    rich: {
    //        bitcoin: {
    //            height: 20,
    //                align: 'center',
    //                    backgroundColor: {
    //                image: '../../assets/static/images/crypto-icons/btc.png'

    //            }
    //        }
    //    }
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
               position: 'bottom',
               splitLine: {show: false},
               axisTick: { show: false },
               axisLine:{
                   show:false              
                   
               },
               axisLabel:{show:false}

              
               //splitLine: { lineStyle: { type: 'dashed' } },
             
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
       //console.log(opt)
       return (opt)
   }
    render(){
        if (this.props.variation && this.props.variation.labels.length >0 ) {

            this.chart = <ReactEcharts
                option={this.getOption()}
                style={{ height: parseInt(this.props.coinAmount) * 50, width: '100%' }}
                className='react_for_echarts'
            />
        }
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