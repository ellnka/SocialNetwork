import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DialogMessage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: props.id,
      text: props.text
    }
  }

  render () {
    return (
      <div>
        <p>{this.state.text}</p>
      </div>
    )
  }
}

DialogMessage.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string
}
