import React, {Component} from 'react'
import Menu from './menu/menu'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    $('.sidebar .sidebar-menu li a').on('click', function () {
      const $this = $(this);

      if ($this.parent().hasClass('open')) {
        $this
          .parent()
          .children('.dropdown-menu')
          .slideUp(50, () => {
            $this.parent().removeClass('open');
          });
      } else {
        $this
          .parent()
          .parent()
          .children('li.open')
          .children('.dropdown-menu')
          .slideUp(50);

        $this
          .parent()
          .parent()
          .children('li.open')
          .children('a')
          .removeClass('open');

        $this
          .parent()
          .parent()
          .children('li.open')
          .removeClass('open');

        $this
          .parent()
          .children('.dropdown-menu')
          .slideDown(50, () => {
            $this.parent().addClass('open');
          });
      }
    });
  }
  render(){
    return(
      <div className="sidebar">
        <div className="sidebar-inner">
          <div className="sidebar-logo">
            <div className="peers ai-c fxw-nw">
              <div className="peer peer-greed">
                <Link to="/" className="sidebar-link td-n">
                  <div className="peers ai-c fxw-nw">
                    <div className="peer">
                      <div className="logo">
                        <img src="assets/static/images/logo.png" alt="" />
                      </div>
                    </div>
                    <div className="peer peer-greed">
                      <img className="lh-1 mB-0 logo-text" src="assets/static/images/logo-name.png" alt="" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="peer">
                <div className="mobile-toggle sidebar-toggle">
                  <a href="" className="td-n">
                    <i className="ti-arrow-circle-left"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Menu />
        </div>
      </div>
    )
  }
}

