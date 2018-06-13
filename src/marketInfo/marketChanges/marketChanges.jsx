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
       
    }    
    
    render(){
        
        return(            
            <div className="row gap-20">
                <div className ="col-md-4">
                    <MarketChangesCard
                         title ="1H Changes"
                         type="1h"
                    />
                </div>
                <div className ="col-md-4">
                    <MarketChangesCard 
                        title ="24H Changes"
                        type="24h"
                    />
                </div>
                <div className ="col-md-4">
                    <MarketChangesCard 
                        title ="7D Changes"
                        type ="7d"
                    />
                </div>
            </div>           
        )
    }    
}

const mapStateToProps = state =>{
    return{marketInfo: state.market.marketInfo}}
const mapDipatchToProps = dispatch => bindActionCreators({getMarketInfo}, dispatch)
export default connect(mapStateToProps, mapDipatchToProps)(MarketChanges)