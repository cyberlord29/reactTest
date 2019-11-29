import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  setParams,
  createTest
} from '../../actions/company-actions'
import {
  Card, Button,
  Form, FormGroup,
  Input, Label
} from 'reactstrap'
import cx from 'classnames'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class Company extends Component {

  render () {
    const {
        testForm 
    } = this.props.company
    return (
      <div>
          <Card>
            <h3>Create New Test</h3>
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input 
                        type="text"
                        name="name"
                        id="name"
                        value={testForm.name}
                        onChange={(e)=>{this.props.setParams({id:'name', value:e.target.value})}}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="desc">Description</Label>
                    <Input 
                        type="text" 
                        name="desc" 
                        id="desc" 
                        value={testForm.description}
                        onChange={(e)=>{this.props.setParams({id:'description', value:e.target.value})}}
                    />                
                </FormGroup>
            </Form>
            <Button
              onClick={ ()=> this.props.createTest({
                name: testForm.name,
                description: testForm.description
              }) }
            />
          </Card>
      </div>
    )
  }
}

Company.propTypes = {
  setParams: PropTypes.func,
  createTest: PropTypes.createTest
}

const mapStateToProps = ({ company }) => {
  return {
      company
    }
}

export default connect(
  mapStateToProps,
  {
    setParams,
    createTest
  }
)(Company)