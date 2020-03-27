import React, { Component } from 'react';

export class VisibilityControl extends Component {
  render = () => {
    return (
      <div className="form-check">
        <input className="form-check-input"
          type="checkbox" checked={ this.props.isChecked }
          onChange={ (evt) => this.props.callback(this.props.checked) }
        />
        <label className="form-check-label">
          Show { this.props.description }
        </label>
      </div>
    );
  }
}