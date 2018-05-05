import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


class FormExample extends Component {
  render() {
    return (
      <div>
        <form>
          <FormGroup>
            <ControlLabel>Email address</ControlLabel>
            <FormControl
              type="email" id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Example select</ControlLabel>
            <FormControl componentClass="select" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Example multiple select</ControlLabel>
            <FormControl componentClass="select"
              id="exampleFormControlSelect2" multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Example textarea</ControlLabel>
            <FormControl
              componentClass="textarea" id="exampleFormControlTextarea1" rows="3"
            />
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default FormExample;
