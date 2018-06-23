import React,{Component} from 'react'
import '../../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js' 


export default class DropDown extends Component{
    constructor(props){
        super(props)
        this.renderItems = this.renderItems.bind(this)
    }

    renderItems(){
        const items  = this.props.items || []
        return items.map((item, i)=>(
            <a class="dropdown-item" role="button" key={i}>{item}</a>            
        ))
        
    }
    componentDidMount() {
       
    }

    render(){
        return( 
            <div className="btn-group">
                <button type="button" className="btn btn-danger">Action</button>
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
