import React,{Component} from 'react'
import "./dropDown.scss"
export default class DropDown extends Component{
    constructor(props){
        super(props)
        this.renderItems = this.renderItems.bind(this)
        this.buttonClick = this.buttonClick.bind(this)
    }

    renderItems(){
        
        const items  = this.props.items || []
       
        return items.map((item, i)=>(            
            <a className="dropdown-item" role="button" key={i} 
                onClick={()=>this.props.handleClick({item: item, type: this.props.type })}>{item}
            </a>            
        ))        
    }
    
    buttonClick(value){
        let obj ={item:'', type:''}        
            this.props.items.filter((item, i)=> {
                if(item === value){
                    if(i >= this.props.items.length -1){
                        obj.item = (this.props.items[0])
                    }
                    else
                       obj.item = (this.props.items[i+1])
                }
            })        
        obj.type = (this.props.type)      
        this.props.handleClick(obj)
    }

    render(){
        return( 
            <div className="btn-group">
                <button type="button" onClick={()=>this.buttonClick(this.props.value)} className="btn btn-light">{this.props.value}</button>
                <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                   {this.renderItems()}
                </div>
            </div>
        )
    }
}
