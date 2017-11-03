import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gifActions from '../../redux/actions/actions';
import PropTypes from 'prop-types';
import React from 'react';
import GifListItem from './GifListItem';

import './GifList.styles.css';

class gifList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentWillMount() { // HERE WE ARE TRIGGERING THE ACTION
     this.props.gifActions.fetchgifs();
   }
   
  handleScroll() {
    const windowWidth = "innerWidth" in window ? window.innerWidth : document.documentElement.offsetWidth;
    const body = document.body;
    const html = document.documentElement;
    const docWidth = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth,  html.scrollWidth, html.offsetWidth);
    const windowRight = windowWidth + window.pageXOffset;
    console.log(windowRight, docWidth)
    if (windowRight >= docWidth) {
      this.setState({
        message:'right reached'
      });
    } else {
      this.setState({
        message:'not at right'
      });
    }
  }

  componentDidMount() {
    this.ref.addEventListener("scroll", this.handleScroll);
  }
  
  renderData() {  
    return (
      <div className="masonary" ref={ref => { this.ref = ref; }}>
        {this.props.gifs.map((gif, i) => {
          return (
            <GifListItem key={i}>
              <img src={gif.images.original.url} />
            </GifListItem>
          )
        })}
      </div>
    );
  }
  
  
  render() {
    return (
      <div className="">
          {this.state.message}
          {this.props ?
            this.renderData()
            :
            <div className="">
              No Data
            </div>
          }
      </div>
    );
  }
}
gifList.propTypes = {
  gifActions: PropTypes.object,
  gifs: PropTypes.array
};
function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}
function mapDispatchToProps(dispatch) {
  return {
    gifActions: bindActionCreators(gifActions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(gifList);