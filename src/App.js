import React, { Component } from 'react'
import { Link, browserHistory ,IndexLink ,router} from 'react-router'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(){
        // browserHistory.push('/repos')
        // 通过context跳转
        this.context.router.push('/repos')
    }
  render() {
    return (
        <div>
            <ul role="nav">
              <li><Link activeStyle={{color: 'red'}} to="/about">About</Link></li>
              <li><Link activeStyle={{color: 'red'}} to="/repos">Repos</Link></li>
              <li><IndexLink to="/" activeStyle={{color: 'red'}}>Home</IndexLink></li>
              <li onClick={this.clickHandler}>browserHistory</li>
            </ul>
            {this.props.children}
        </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}
