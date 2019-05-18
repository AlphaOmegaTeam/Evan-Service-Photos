import React from 'react';
import PhotoCarousel from './PhotoCarousel.jsx';

class PhotoHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCarousel: false,
      carouselId: null,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(id) {
    this.setState({ showCarousel: true, carouselId: id });
    this.on();
  }
  render() {
    if (!this.state.showCarousel) {
      return (
        <div className="photosHeader">
          <img className="photo photoA" key={this.props.photos[0].id} src={this.props.photos[0].url} style={{ width: 142, height: 142 }} onClick={() => this.handleClick(this.props.photos[0].id)} />
          <img className="photo photoB" key={this.props.photos[1].id} src={this.props.photos[1].url} style={{ width: 142, height: 142 }} onClick={() => this.handleClick(this.props.photos[1].id)} />
          <img className="photo photoC" key={this.props.photos[3].id} src={this.props.photos[3].url} style={{ width: 288, height: 288 }} onClick={() => this.handleClick(this.props.photos[2].id)} />
          <img className="photo photoD" key={this.props.photos[4].id} src={this.props.photos[4].url} style={{ width: 142, height: 142 }} onClick={() => this.handleClick(this.props.photos[3].id)} />
          <img className="photo photoE" key={this.props.photos[5].id} src={this.props.photos[5].url} style={{ width: 142, height: 142 }} onClick={() => this.handleClick(this.props.photos[4].id)} />
          <img className="photo photoF" key={this.props.photos[6].id} src={this.props.photos[6].url} style={{ width: 288, height: 288 }} onClick={() => this.handleClick(this.props.photos[5].id)} />
          <img className="photo photoG" key={this.props.photos[7].id} src={this.props.photos[7].url} style={{ width: 142, height: 142 }} onClick={() => this.handleClick(this.props.photos[6].id)} />
          <img className="photo photoH" key={this.props.photos[8].id} src={this.props.photos[8].url} style={{ width: 142, height: 142 }} onClick={() => this.handleClick(this.props.photos[7].id)} />
          <img className="photo photoI" key={this.props.photos[9].id} src={this.props.photos[9].url} style={{ width: 288, height: 288 }} onClick={() => this.handleClick(this.props.photos[8].id)} />
          <img className="photo photoJ" key={this.props.photos[10].id} src={this.props.photos[10].url} style={{ width: 142, height: 142 }} onClick={() => this.handleClick(this.props.photos[9].id)} />
          <img className="photo photoK" key={this.props.photos[11].id} src={this.props.photos[11].url} style={{ width: 142, height: 142 }} onClick={() => this.handleClick(this.props.photos[10].id)} />
        </div>
      )
    } else {
      console.log('rerendered', this.state);
      console.log('img', this.props.photos[this.state.carouselId].url);
      return (
        <div>
          <div className="photosHeader">
            <img className="photo photoA" key={this.props.photos[0].id} src={this.props.photos[0].url} style={{ width: 142, height: 142 }} onClick={() => this.handleClick(this.props.photos[0].id)} />
            <img className="photo photoB" key={this.props.photos[1].id} src={this.props.photos[1].url} style={{ width: 142, height: 142 }} onClick={() => this.handleClick(this.props.photos[1].id)} />
            <img className="photo photoC" key={this.props.photos[3].id} src={this.props.photos[3].url} style={{ width: 288, height: 288 }} onClick={() => this.handleClick(this.props.photos[2].id)} />
            <img className="photo photoD" key={this.props.photos[4].id} src={this.props.photos[4].url} style={{ width: 142, height: 142 }} onClick={() => this.handleClick(this.props.photos[3].id)} />
            <img className="photo photoE" key={this.props.photos[5].id} src={this.props.photos[5].url} style={{ width: 142, height: 142 }} onClick={() => this.handleClick(this.props.photos[4].id)} />
            <img className="photo photoF" key={this.props.photos[6].id} src={this.props.photos[6].url} style={{ width: 288, height: 288 }} onClick={() => this.handleClick(this.props.photos[5].id)} />
            <img className="photo photoG" key={this.props.photos[7].id} src={this.props.photos[7].url} style={{ width: 142, height: 142 }} onClick={() => this.handleClick(this.props.photos[6].id)} />
            <img className="photo photoH" key={this.props.photos[8].id} src={this.props.photos[8].url} style={{ width: 142, height: 142 }} onClick={() => this.handleClick(this.props.photos[7].id)} />
            <img className="photo photoI" key={this.props.photos[9].id} src={this.props.photos[9].url} style={{ width: 288, height: 288 }} onClick={() => this.handleClick(this.props.photos[8].id)} />
            <img className="photo photoJ" key={this.props.photos[10].id} src={this.props.photos[10].url} style={{ width: 142, height: 142 }} onClick={() => this.handleClick(this.props.photos[9].id)} />
            <img className="photo photoK" key={this.props.photos[11].id} src={this.props.photos[11].url} style={{ width: 142, height: 142 }} onClick={() => this.handleClick(this.props.photos[10].id)} />
          </div>
          <img className="overlayPic" src={this.props.photos[this.state.carouselId].url} />
          <div className="dimmer"></div>
        </div>
      )
    }
  }
}

export default PhotoHeader;