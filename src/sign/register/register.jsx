import React,{ Component } from 'react'
import { signup } from '../signActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import '../style.scss'



class Registration extends Component{
    constructor(props){
        super(props)
    }
    onSubmit(values) {
        const { signup } = this.props
        signup(values)
    }

    render(){
        const { handleSubmit, userCreated } = this.props
        return(userCreated ? <h1>Please, verify your email</h1>:
            <div className="peers ai-s fxw-nw h-100vh">
                <div className="peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style={{ backgroundImage: 'url("assets/static/images/bg.jpg")' }}>
                    <div className="pos-a centerXY">
                        <div className="bgc-white bdrs-50p pos-r" style={{ width: "120px", height: "120px" }}>
                            <img className="pos-a centerXY" src="assets/static/images/logo.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 peer pX-40 pY-40 h-100 bgc-white scrollable pos-r" style={{ minWidth: "320px" }}>
                    <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                        <div className="form-group">
                            <label className="text-normal text-dark">Name</label>
                            <Field type="text" name="name" component="input" className="form-control" placeholder='John Doe' />
                        </div>
                        <div className="form-group">                            
                            <label htmlFor="traderType">{`Trader  ` }</label><Field className="radio-inline" type="radio" id="traderType" name="profileType" component="input" value="1" />
                           
                            <label htmlFor="clientType">{` Client `} </label><Field className="radio-inline" type="radio" id="clientType" name="profileType" component="input" value="0" />
                        </div>                        
                        <div className="form-group">
                            <label className="text-normal text-dark">Api Key</label>
                            <Field type="password" name="apiKey" component="input" className="form-control"/>
                        </div>                        
                        <div className="form-group">
                            <label className="text-normal text-dark">Secret Key</label>
                            <Field type="password" name="secretKey" component="input" className="form-control"/>
                        </div>                        
                                             
                        <div className="form-group">
                            <label className="text-normal text-dark">Email Address</label>
                            <Field type="email" name="email" component="input" className="form-control" placeholder='name@email.com' />
                        </div>
                        <div className="form-group">
                            <label className="text-normal text-dark">Password</label>
                            <Field type="password" name="password" component="input" className="form-control" placeholder="Password" />
                        </div>                       
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Registration = reduxForm({
    form: 'register'
})(Registration)

const mapDispatchToProps = dispatch =>{ 
    return(bindActionCreators({ signup }, dispatch))
} 
const mapStateToProps = state => {
    return { userCreated: state.sign.userCreated }
}
export default connect(mapStateToProps, mapDispatchToProps)(Registration)