import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
import {
  PageHeader,
} from 'react-bootstrap'
import {
} from './actions/company-actions'
import { HeaderWrapper, AppContainer, Body } from "./containers";
import Company from './Components/Company'

class App extends Component {

  componentDidMount(){
  }

  render () {
    return (
      <HeaderWrapper>
        <PageHeader className='header'>
          <div>THRIVE TEST</div>
        </PageHeader>
        <AppContainer>
          <Body>
            <Company/>
          </Body>
        </AppContainer>
       </HeaderWrapper>
    )
  }
}

App.propTypes = {

}

const mapStateToProps = ({ company }) => {
  return {
      company
    }
}

export default connect(
  mapStateToProps,
  {

  }
)(App)