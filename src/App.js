import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Route, Link, Switch } from 'react-router-dom';
import { MENUS } from './constent/app';
import './App.scss';

const { Content, Sider } = Layout;

class App extends Component {
  renderMenu = () => (
    <Menu theme="dark" mode="inline">
      {MENUS.map(m => (
        <Menu.Item key={m.name}>
          <Link to={m.path}><span className="nav-text">{m.name}</span></Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  renderRouters = () => (
    <Switch>
      <Route path='/' exact render={() => (
        <div className="app-page">HOW ABOUT MATH AND ANIMATION</div>
      )} />
      {MENUS.map(m => (
        <Route key={m.name} path={`/${m.path}`} exact component={m.component} />
      ))}
    </Switch>
  );

  render() {
    return (
      <Layout>
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
          <Link to="/">
            <div className="logo">MATH AND ANIMATION</div>
          </Link>
          {this.renderMenu()}
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Content style={{ background: '#fff' }}>
            {this.renderRouters()}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
