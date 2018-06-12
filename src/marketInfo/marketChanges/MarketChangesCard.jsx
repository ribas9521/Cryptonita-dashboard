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
        let bgColor=[]
        let max =0
        let min =0
        if(this.props.type === "1h")
            data = variation.percentChange1h
        else if(this.props.type ==="24h")
            data = variation.percentChange24h
        else if(this.props.type === "7d")
            data = variation.percentChange7d

        max = data.reduce((a, b)=> {
            return Math.max(a, b);
        });
        min = data.reduce((a, b) => {
            return Math.min(a, b);
        });
        console.log(max)
        console.log(min)
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
            options : {
                events: true,
                easing: 'easeInBounce',                
                animation: {
                    duration: 1000,
                    onComplete: function () {
                        var chartInstance = this.chart,
                            ctx = chartInstance.ctx;
                        ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily)
                        ctx.textAlign = 'center'
                        ctx.textBaseline = 'bottom'

                        this.data.datasets.forEach(function (dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i)
                            meta.data.forEach(function (bar, index) {
                                var data = dataset.data[index]
                                let offsetX = 0;
                                if(data >0 ){
                                    if(data <= max * 0.40){
                                        offsetX += 20
                                    }else                                    
                                    offsetX -= 25
                                }
                                else{
                                    if(data >= min*0.60){
                                        offsetX -=55
                                    }
                                    offsetX +=30                                
                                }
                                ctx.fillText(data + "%", bar._model.x + offsetX, bar._model.y + 10)
                            });
                        });
                    }
                }
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