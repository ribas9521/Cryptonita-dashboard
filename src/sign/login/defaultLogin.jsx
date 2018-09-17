import React, {Component} from 'react'
import { login } from '../signActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { createHashHistory } from "history";

class DefaultLogin extends Component{
    constructor(props){
        super(props)
        this.redirectTo= this.redirectTo.bind(this)
        
    }
    onSubmit(values) {
        const { login } = this.props
        login(values)
    }

    redirectTo(path){
        const history = createHashHistory()
        history.push(path)
    }
    componentWillMount() {
        const { login } = this.props
        if (!userAuthenticated)
            login()
    }

    componentWillReceiveProps(nextProps){
        const { userAuthenticated} = nextProps
        if(userAuthenticated)
            this.redirectTo('funds')
    }

    render(){
        const { handleSubmit } = this.props
        return(
            <div className="col-12 col-md-4 peer pX-40 pY-40 h-100 bgc-white scrollable pos-r" style={{ minWidth: "320px" }}>
                <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                    <div className="form-group">
                        <label className="text-normal text-dark">Email</label>
                        <Field type="text" name="email" component="input" className="form-control" placeholder="Email" />
                    </div>
                    
                    <div className="form-group">
                        <label className="text-normal text-dark">Password</label>
                        <Field type="password" name="password" component="input" className="form-control" placeholder="Password" />
                    </div>                  
                   
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

DefaultLogin = reduxForm({
    form: 'login'
})(DefaultLogin)

const mapStateToProps = state => {
    return { userAuthenticated: state.sign.userAuthenticated }
}

const mapDispatchToProps = dispatch => {
    return (bindActionCreators({ login }, dispatch))
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLogin)