import React,{Component} from 'react'



export default class DropDown extends Component{
    constructor(props){
        super(props)
        this.renderItems = this.renderItems.bind(this)
    }

    renderItems(){
        
        const items  = this.props.items || []
       
        return items.map((item, i)=>(            
            <a className="dropdown-item" role="button" key={i} 
                onClick={()=>this.props.handleClick([item, this.props.type])}>{item + " " + this.props.type}
            </a>            
        ))        
    }
   


    render(){
        return( 
            <div className="btn-group">
                <button type="button" className="btn btn-light">{this.props.value}</button>
                <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                   {this.renderItems()}
                </div>
            </div>
        )
    }
}
