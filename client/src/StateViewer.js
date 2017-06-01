/**
 * Created by narendrasisodiya on 31/05/17.
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
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
      <div style={{
        paddingTop: 20
      }}>
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
