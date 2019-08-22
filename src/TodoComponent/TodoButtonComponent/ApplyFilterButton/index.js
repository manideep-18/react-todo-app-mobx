import React, { Component } from "react";
import { inject } from "mobx-react";
import { ButtonComponent } from "./styledComponents";
@inject("todoStore")
class ApplyFilterButton extends Component {
  filter = this.props.filter;
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }
  handleClick = () => {
    this.props.todoStore.updateApplyFilter(this.filter);
    this.setState({ isActive: true });
  };
  render() {
    return (
      <div>
        <ButtonComponent
          isActive={this.state.isActive}
          onClick={this.handleClick}
        >
          {this.filter}
        </ButtonComponent>
      </div>
    );
  }
}
export default ApplyFilterButton;
