import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getMarketInfo } from '../marketInfoActions'


import Chart from 'chart.js'
import 'chartjs-plugin-datalabels'
class MarketChangesCard extends Component{
    constructor(props){
        super(props)
        this.buildChart = this.buildChart.bind(this)        
    }

    buildChart(variation){
        
        let data =[]
        let bgColor=[]
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
                    backgroundColor: bgColor 
                }]
            },
            datalabels: {
                align: 'end',
                anchor: 'start'
            }
        });
        for (let i = 0; i < myChart.data.datasets[0].data.length; i++) {
            let val = myChart.data.datasets[0].data[i]
            
            if ( val < -50 ) {
                bgColor.push("#ff0000");
            } else if(val < -25 && val > -50 ) {
                bgColor.push("#ff1919");
            } else if (val < -10 && val > -25) {
                bgColor.push("#ff3232");
            }
            else if (val < -5 && val > -10) {
                bgColor.push("#ff4c4c");
            }
            else if (val < 0 && val > -5) {
                bgColor.push("#ff6666");
            }
            else if (val >0 && val < 5) {
                bgColor.push("#66ff66");
            }
            else if (val >5 && val < 10) {
                bgColor.push("#4cff4c");
            }
            else if (val > 10 && val < 25) {
                bgColor.push("#32ff32");
            }
            else if(val > 25 && val < 50){
                bgColor.push("#19ff19");
            }
            else if(val > 50){
                bgColor.push("#00ff00");
            }
            
        }
        console.log(myChart.data.datasets[0])
        // myChart.data.datasets.forEach(function (dataset) {
        //     dataset.points.forEach(function (points) {
        //         ctx.fillText(points.value, points.x, points.y - 10);
        //     });
        // })
        myChart.update()

        
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