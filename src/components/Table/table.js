/**
 * Created by psenger on 7/12/17.
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './table.scss'

/**
 * A basic Card Class used for creating html cards.
 *
 * @class
 */
class Table extends Component {

  /**
   * Constructor
   * @constructor
   * @param {number|string} props.value - the value to pass the <code>onClickHandler</code>
   */
  constructor(props) {
    super(props);
    this.displayName = 'components/Table';
  }


  /**
   * Standard React Render method
   * @returns {XML}
   */
  render() {
    let { value, clazzNames }  = this.props;

    return (
      <div>
        <div className="flex-container">
          <div className="flex-item"></div>
          <div className="flex-item drop-zone"></div>
          <div className="flex-item drop-zone"></div>
          <div className="flex-item drop-zone"></div>
          <div className="flex-item drop-zone"></div>
          <div className="flex-item"></div>
        </div>
        <div className="flex-container">
          <div className="flex-item"></div>
          <div className="flex-item drop-zone"></div>
          <div className="flex-item drop-zone"></div>
          <div className="flex-item drop-zone"></div>
          <div className="flex-item drop-zone"></div>
          <div className="flex-item"></div>
        </div>
      </div>
    );
  }
}

/**
 *
 * @type {{value: (*), onClickHandler: (*), clazzNames: *}}
 */
Table.propTypes = {
  clazzNames: PropTypes.object
};

/**
 * ProgressBar Default values
 * @type {{percentage: 0}}
 */
Table.defaultProps = {
  clazzNames: {}
};

export default Table;
