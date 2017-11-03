import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gifActions from '../../redux/actions/actions';
import PropTypes from 'prop-types';
import React from 'react';

class gifListItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };

        this.toggleActive = this.toggleActive.bind(this);
    }

    toggleActive() { // HERE WE ARE TRIGGERING THE ACTION
        this.setState({
            active: !this.state.active
        });
    }
  
    getClassName() {
        let name = "masonry-tile"
        if(this.state.active) name += " active"
        return name;
    }

    render() {
    return (
        <div onClick={this.toggleActive} className={this.getClassName()}>
            {this.props.children}
        </div>
    );
  }
}

export default gifListItem;