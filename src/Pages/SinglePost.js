import React, { Component } from 'react';
import {Col,Card,CardTitle} from 'react-materialize';


class SinglePost extends Component {
   render() {
    return (
      <Col s={3}>
          <Card  className='small'
            header={<CardTitle className="card-image" image={`${this.props.imageUrl}`}></CardTitle>}>
              <h5 className="card-title">{this.props.title}</h5>
              <h6 className="card-subtitle text-black"> By {this.props.category}</h6>
              <p className="card-text">{this.props.salePrice}</p>
          </Card>
      </Col>
    );
  }
}

export default SinglePost;
