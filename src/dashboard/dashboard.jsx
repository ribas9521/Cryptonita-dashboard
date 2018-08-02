import React,{Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeCheckedApps } from './dashboardActions'
import { getMarketInfo } from '../marketInfo/marketInfoActions'

import './dashboard.scss'
import Button from '../common/template/ui/button/button'
import Modal from '../common/template/ui/modal/modal'

import MarketChangesCard from '../marketInfo/marketChanges/marketChangesCard'
import VolumeByExchangeCard from '../marketInfo/volumeByExchange/volumeByExchangeCard'

export class Dashboard extends Component{

    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        const target = e.target       
        this.props.changeCheckedApps(target.name, target.checked)
    }
    componentWillMount(){     
        this.props.getMarketInfo()        
    }

    render(){        
        const apps = this.props.apps
        if (apps.percentChange1h) {
            this.percentChange1h = <div className="col-md-4 ">
                <MarketChangesCard
                    title="1H Changes"
                    type="1h"
                    variation={this.props.variation}
                />
            </div>
        }
        else{this.percentChange1h = ""}
        if (apps.percentChange24h) {
            this.percentChange24h = <div className="col-md-4 ">
                <MarketChangesCard
                    title="24H Changes"
                    type="24h"
                    variation={this.props.variation}
                />
            </div>
        }
        else { this.percentChange24h = "" }
        if (apps.percentChange7d) {
            this.percentChange7d = <div className="col-md-4 ">
                <MarketChangesCard
                    title="7d Changes"
                    type="7d"
                    variation={this.props.variation}
                />
            </div>
        }
        else { this.percentChange7d = "" }
        if(apps.volumeByExchange){
            this.volumeByExchange = <div className="col-md-12">
                <VolumeByExchangeCard />
            </div>
        }
        else{this.volumeByExchange = ""}
        
        return(
            <div className="row gap-20">
                
                {this.percentChange1h}
                {this.percentChange24h}
                {this.percentChange7d}
                {this.volumeByExchange}
                <Button 
                    shape="circle"
                    icon="plus"
                    dataToggle="modal" 
                    dataTarget="#modalApps">
                </Button>               
                <Modal 
                    id="modalApps"
                    title="Cryptonita Apps">
                    <div className="">
                        <form>
                            <input
                                name="percentChange1h" 
                                onChange={this.handleChange} 
                                type="checkbox" id="1h"
                                checked={apps.percentChange1h} 
                                className="col-md-12"/>
                                <label htmlFor="1h">Market changes 1h</label>
                            <input
                                name="percentChange24h" 
                                onChange={this.handleChange} 
                                type="checkbox" id="24h"
                                checked={apps.percentChange24h}  
                                className="col-md-12"/>
                                <label htmlFor="24h">
                                    Market changes 24h
                                </label>
                            <input
                                name="percentChange7d" 
                                onChange={this.handleChange} 
                                type="checkbox" id="7d" 
                                checked={apps.percentChange7d}
                                className="col-md-12"/>
                                <label htmlFor="7d">
                                    Market changes 7d
                                </label>
                            <input 
                                name="volumeByExchange"
                                onChange={this.handleChange} 
                                type="checkbox" id="volumeExchange"
                                checked={apps.volumeByExchange} 
                                className="col-md-12"/>
                                <label htmlFor="volumeExchange">
                                    Volume by exchange
                                </label>
                        </form>                        
                    </div>
                </Modal>
            </div>
        ) 
    }
}

const mapStateToProps = state =>{
    return { apps: state.dashboard.apps,
            variation: state.market.variation }
}

const mapDispatchToProps = dispatch => bindActionCreators({changeCheckedApps, getMarketInfo}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)