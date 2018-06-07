import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getMarketInfo } from '../marketInfoActions'

class MarketChanges extends Component{
    
    componentWillMount(){
       this.props.getMarketInfo()
    }
    render(){
        //const { name, symbol, percentChange1h, percentChange24h, percentChange7d} = this.props.marketInfo
        console.log(this.props.marketInfo);
        return(
            // <div>
            //     <h1>{name}</h1>
            //     <h1>{symbol}</h1>
            //     <h1>{percentChange1h}</h1>
            // </div>
            <h1>tteste</h1>
        )
    }    
}

const mapStateToProps = state =>({marketInfo: state.market.marketInfo})
const mapDipatchToProps = dispatch => bindActionCreators({getMarketInfo}, dispatch)
export default connect(mapStateToProps, mapDipatchToProps)(MarketChanges)