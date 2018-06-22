import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getMarketInfo } from '../marketInfoActions'

import MarketChangesCard from './marketChangesCard'


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
                <div className ="col-md-4 ">
                    <MarketChangesCard
                         title ="1H Changes"
                         type="1h"                         
                         variation = {this.props.variation}
                    />
                </div>
                <div className ="col-md-4">
                    <MarketChangesCard 
                        title ="24H Changes"
                        type="24h"                        
                        variation={this.props.variation}
                    />
                </div>
                <div className ="col-md-4">
                    <MarketChangesCard 
                        title ="7D Changes"
                        type ="7d"                        
                        variation={this.props.variation}
                    />
                </div>
            </div>           
        )
    }    
}

const mapStateToProps = state => {
    return { variation: state.market.variation }
}
const mapDipatchToProps = dispatch => bindActionCreators({ getMarketInfo }, dispatch)
export default connect(mapStateToProps, mapDipatchToProps)(MarketChanges)