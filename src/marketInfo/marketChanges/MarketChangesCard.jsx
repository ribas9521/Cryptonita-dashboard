import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMarketInfo } from '../marketInfoActions'


import Chart from 'chart.js'
class MarketChangesCard extends Component{
    constructor(props){
        super(props)
        this.buildChart = this.buildChart.bind(this)        
    }

    buildChart(variation){
        
        let data =[]
        if(this.props.type === "1h")
            data = variation.percentChange1h
        else if(this.props.type ==="24h")
            data = variation.percentChange24h
        else if(this.props.type === "7d")
            data = variation.percentChange7d
        let ctx = this.canvas
        Chart.defaults.global.legend.display = false;
        let myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: variation.labels,
                datasets: [{
                    label: false,                
                    data: data,               
                    borderWidth: 1,
                    backgroundColor: [
                       
                    ]
                }]
            }
        });
    }

    componentWillMount(){
        this.props.getMarketInfo()
    }
    componentDidUpdate(){
        if (this.props.variation.labels.length > 0)
            this.buildChart(this.props.variation)
    }
   
    render(){   
        
        return(
            <div className="layers bd bgc-white p-20">
                <div className="layer w-100 mB-10">
                    <h5 className="lh-1">{this.props.title}</h5>
                </div>
                <div className="layer w-100">
                    <div className="peers ai-sb fxw-nw">                        
                        <canvas height ="400" ref={(canvas) => this.canvas = canvas}></canvas>
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