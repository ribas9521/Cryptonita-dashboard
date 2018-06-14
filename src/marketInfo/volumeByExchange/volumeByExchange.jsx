import React from 'react'
import VolumeByExchangeCard from './volumeByExchangeCard'

export default props=>(
    <div className="row gap-20">
        <div className="col-md-6">
            <VolumeByExchangeCard/>
        </div>
        <div className="col-md-6">
            <VolumeByExchangeCard/>
        </div>
        <div className="col-md-6">
            <VolumeByExchangeCard/>
        </div>
        <div className="col-md-6">
            <VolumeByExchangeCard/>
        </div>
        
    </div>
        
)