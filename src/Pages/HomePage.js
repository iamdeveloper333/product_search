import React, { Component } from 'react';
import {Row,Col,Pagination} from 'react-materialize';
import SinglePost from './SinglePost';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state= {
    }
  }

  render() {

    const singlePost = this.props.products.map((val)=>{
      return(
        <SinglePost key={val.productId} title={val.title} category={val.category} imageUrl={val.imageUrl} salePrice={val.salePrice}/>
        )
    })
    return (
    <div className="content">
      <Row className="content-left">      
         <Col s={12} className='grid-example'>
             <Row>
                {singlePost}
                <Pagination items={10} activePage={2} maxButtons={8} />
              </Row>
         </Col>
      </Row>
    </div>    
    );
  }
}

export default HomePage;
