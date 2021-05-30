import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch, Redirect } from 'react-router-dom';
import router from './routes'

class App extends Component {
  render() {
    console.log(router);
    let key = 1
    return (
      <div className="App">
        <ConnectedRouter history={this.props.history}>
          {/* <Layout {...this.props}> */}
          <Switch>
            {router.map(d =>{ 
              key += 1
             return <Route exact
                path={d.path}
                key={key}
                component={d.component}
                // render={(d)=> (d.component) }
              >
                {/* <div> d</div> */}
                
              </Route>}
            )}
          <Redirect from="*" to="/errors/404"/>
          </Switch>
        </ConnectedRouter>
      </div>
    );
  }
}

export default connect(
  (state) => ({

  }),
  dispatch => ({

  })
)((App));