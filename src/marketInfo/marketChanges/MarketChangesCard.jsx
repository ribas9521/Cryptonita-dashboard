import React from 'react'
import Chart from 'chart.js'

const buildChart = props=>{
    console.log(props.data);
   // props.data.map((value)=>{console.log(value);})
    let ctx = $("#myChart")
    Chart.defaults.global.legend.display = false;
    let myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["Bitcoin", "Ethereum", "Ripple", "NEO", "IOTA", "Nano", "Bitcoin", "Ethereum", "Ripple", "NEO", "IOTA", "Nano"],
            datasets: [{
                label: false,                
                data: [-12, 19, -3, 5, 2, 3, -12, 19, -3, 5, 2, 3],               
                borderWidth: 1
            }]
        }
    });
}
export default props=>(    
    <div className="layers bd bgc-white p-20">
        <div className="layer w-100 mB-10">
            <h5 className="lh-1">{props.title}</h5>
        </div>
        <div className="layer w-100">
            <div className="peers ai-sb fxw-nw">
                <canvas id="myChart" height="400" ></canvas>
                {buildChart(props)}
            </div>
        </div>
    </div>
)