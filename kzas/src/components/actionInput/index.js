import React, { Component } from 'react';

export function ActionInput(props) {

    return (
        <input type={this.props.type} className={this.props.className}
            name={this.props.name} placeholder={this.props.placeholder}>
            {this.props.text} </input>
    )
}
