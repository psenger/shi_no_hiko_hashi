/**
 * Created by psenger on 7/12/17.
 */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

import './card.scss'

/**
 * A basic Card Class used for creating html cards.
 *
 * @class
 */
class Card extends Component {

  /**
   * Constructor
   * @constructor
   * @param {number|string} props.value - the value to pass the <code>onClickHandler</code>
   * @param {function} props.onClickHandler - On click handler
   */
  constructor(props) {
    super(props);
    this.displayName = 'components/Card';
    this.onClickHandlerProxy = this.onClickHandlerProxy.bind(this);
  }

  /**
   * On click handler proxy, which forwards on the prop's value to the <code>onClickHandler</code> attached to the <code>props</code>.
   */
  onClickHandlerProxy() {
    this.props.onClickHandler(this.props.value);
  }

  /**
   * Standard React Render method
   * @returns {XML}
   */
  render() {
    let { value, clazzNames }  = this.props;
    let className = classNames( Object.assign( { 'card' : true }, clazzNames ) );

    return (
      <div className={className} onClick={this.onClickHandlerProxy} tabIndex={0} data-component-name={this.displayName}>{value}</div>
    );
  }
}

/**
 *
 * @type {{value: (*), onClickHandler: (*), clazzNames: *}}
 */
Card.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  clazzNames: PropTypes.object
};

/**
 * ProgressBar Default values
 * @type {{percentage: 0}}
 */
Card.defaultProps = {
  clazzNames: {}
};

export default Card;
