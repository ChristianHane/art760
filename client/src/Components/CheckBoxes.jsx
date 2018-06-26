import React, { Component } from "react";
import { CustomInput } from 'reactstrap';

class Checkbox extends Component {
  state = {
    isChecked: false,
    value: this.props.category,
  };

  toggleCheckboxChange = () => {
    this.setState({
      ...this.state,
      isChecked: !this.state.isChecked,
    }, () => {
      this.checkCategory();
    });
  };

  checkCategory = () => {
    const { value } = this.state;
    const { addCategory, removeCategory} = this.props;
    if(this.state.isChecked) {
      addCategory(value);
    } else {
      removeCategory(value);
    }
  }

  render() {
    return (
      <div>
        <label class="form-check-label">{this.props.category}</label>
        <CustomInput
          type="checkbox"
          id={this.props.category}
          onChange={this.toggleCheckboxChange}
          label={this.props.category}
        />
      </div>
    );
  }
}

export default Checkbox;
