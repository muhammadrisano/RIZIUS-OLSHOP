import React, {Component} from 'react';
import {Container, Row, Col, Card, CardImg, CardBody} from 'reactstrap';
import categoryList from "../database/categoryList";
import "../index.css"

function text(text) {
    if (text.length > 25) {
      let textSplit = text.substr(0, 30)
      return `${textSplit} ...`
    } else {
      let textSplit = text
      return `${textSplit}`
    }
}



class CategoryList extends Component {
    render() {
        return(
            <div className="style">
            <div data-spm="breadcrumb" id="J_breadcrumb_list" class="breadcrumb_list breadcrumb_custom_cls">
                <ul class="breadcrumb" id="J_breadcrumb">
                    <li class="breadcrumb_item">
                        <span class="breadcrumb_item_text">
                            <a title="Beranda" href="/" class="breadcrumb_item_anchor">
                                <span>Beranda</span>
                            </a>
                            <div class="breadcrumb_right_arrow"></div>
                        </span>
                    </li>
                <li class="breadcrumb_item">
                <span class="breadcrumb_item_text">
                  <a title="Handphone &amp; Tablet" href="/beli-handphone-tablet/" class="breadcrumb_item_anchor">
                    <span>Handphone &amp; Tablet</span>
                  </a>
                <div class="breadcrumb_right_arrow"></div>
            </span>
                 </li>
            <li class="breadcrumb_item">
                <span class="breadcrumb_item_text">
                    <span class="breadcrumb_item_anchor breadcrumb_item_anchor_last">Handphone</span>
                </span>
            </li>
        </ul>
        </div>
        
            <Container>
                <Row>
                  {categoryList.map((item, index) => 
                  <Col md={3}>
                    <div className="list">
                        <Card >
                            <div>
                                <a href={'/' + index}>
                                    <CardImg img
                                        className="img" height="300px"
                                        src={item.url}
                                        alt="image"/>
                                    <CardBody className="cardbody">
                                        <p className="font">{text(item.title)}</p>
                                        <p className="">{item.price}</p>
                                        <p className="">{item.star}</p>
                                        <p className="">{item.city}</p>
                                    </CardBody>
                                </a>
                            </div>
                        </Card>
                    </div>    
                  </Col>
               )}   
                </Row>
            </Container>
            </div>
        )
    }
}

export default CategoryList