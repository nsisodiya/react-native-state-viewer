/**
 * Created by narendrasisodiya on 31/05/17.
 */

import React, { Component, PropTypes } from "react";
import wsConnection from "./wsConnection";
class StateViewer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: {}
    };
    wsConnection.onMessage(value => {
      this.setState({
        value
      });
    });
  }
  render() {
    return (
      <div>
        {this.props.render(this.state.value)}
      </div>
    );
  }
}
StateViewer.defaultProps = {};
StateViewer.propTypes = {
  path: PropTypes.string,
  render: PropTypes.func
};
export default StateViewer;
