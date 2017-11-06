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
    this.state = {
      loaded: 15
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentWillMount() { // HERE WE ARE TRIGGERING THE ACTION
    this.getGifs();
  }

  handleScroll() {
    var el = document.getElementById('masonary-scroller');
    var minPixel = el.offsetLeft;
    var maxPixel = minPixel + el.scrollWidth;
    var value = this.ref.scrollLeft + Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    // respect bounds of element
    var percent = (value - minPixel)/(maxPixel - minPixel);
    percent = Math.min(1,Math.max(percent, 0))*100;

    if (value >= maxPixel) {
      this.setState({
        loaded: this.state.loaded + 15
      });
      this.getGifs();
    }
  }

  getGifs () {

     this.props.gifActions.fetchgifs({
       search: 'aliens',
       quantity: this.state.loaded
     });
  }

  componentDidMount() {
    this.ref.addEventListener("scroll", this.handleScroll);
  }

  renderData() {
    return (
      <div className="masonary" id="masonary-scroller" ref={ref => { this.ref = ref; }}>
        {this.props.gifs.map((gif, i) => {
          return (
            <GifListItem key={i}>
              <div className="GifList-item__hover">
                <span>
                  Click to View
                </span>
              </div>
              <div className="GifList-item__image">
                <img src={gif.images.original.url} />
              </div>
            </GifListItem>
          )
        })}
      </div>
    );
  }


  render() {
    return (
      <div className="">
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
