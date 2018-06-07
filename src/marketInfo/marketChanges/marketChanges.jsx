import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getMarketInfo } from '../marketInfoActions'

import MarketChangesCard from './MarketChangesCard'

class MarketChanges extends Component{
    constructor(props){
        super(props)
    }
    
    componentWillMount(){
        this.props.getMarketInfo()
                
    }    

    render(){       
        return(            
            <div className="row gap-20">
                <div className ="col-md-4">
                    <MarketChangesCard title ="1H Changes" data = {this.props.marketInfo.data}/>
                </div>
                <div className ="col-md-4">
                    <MarketChangesCard title ="24H Changes"/>
                </div>
                <div className ="col-md-4">
                    <MarketChangesCard title ="7D Changes"/>
                </div>
            </div>           
        )
    }    
}

const mapStateToProps = state =>({marketInfo: state.market.marketInfo})
const mapDipatchToProps = dispatch => bindActionCreators({getMarketInfo}, dispatch)
export default connect(mapStateToProps, mapDipatchToProps)(MarketChanges)