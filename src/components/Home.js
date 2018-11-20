import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter , NavLink } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col,Container } from 'reactstrap';

class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      stories:[],
      resentPost:{},
      rightPost:{},
      middle:[]
      
    }

    axios.post('http://10.90.90.61:3002/').then(res=>{

      if(res.data.status === "success"){

        this.setState({stories:res.data.story});
       

        for (var i = 0; i < res.data.story.length; i++) {
          if(res.data.story.length === i + 2){
            this.setState({ resentPost: res.data.story[i] })
          }
        }

        for (var j = 0; j < res.data.story.length; j++) {
          if(res.data.story.length === j + 1){
            this.setState({ rightPost: res.data.story[j] })
          }
        }
        
      }
  
    })

    
  }

  render() {


    var rowStyle={
      padding:"10px"
    }

    var hrStyle={
      backgroundColor:'black'
    }
    
    const stories = this.state.stories.slice(1,3).map((d) => 
      <Row style={rowStyle}>
      <Col sm="4">
       <img src="c.jpeg" height="100px" width="100px" alt="poster"/>

      </Col>
      <Col sm="8">
        <p>{d.title,d.description}</p>
     </Col>
      </Row>
           

    );

      
   
    return (
      <HashRouter>
    <Container>
        <Row>

          <Col sm="4">
            <Card>
              <CardImg top width="100%" src="c.jpeg" alt="Card image cap" />
              <CardBody>
                <CardTitle>{this.state.rightPost.title}</CardTitle>
                <CardText>{this.state.rightPost.description}</CardText>
                <NavLink to={'/Story/'+ this.state.rightPost._id}>Read-more</NavLink>
              </CardBody>
            </Card>
          </Col>
         
          <Col sm="4">
            
            {stories}

          </Col>
          <Col sm="4">
             <Card>
              <CardImg top width="100%" src="sample.jpg" alt="Card image cap" />
              <CardBody>
                <CardTitle>{this.state.resentPost.title}</CardTitle>
                <CardText>{this.state.resentPost.description}</CardText>
                <NavLink to={'/Story/'+ this.state.resentPost._id}>Read-more</NavLink>
              </CardBody>
            </Card>
          </Col>
        </Row>

      

        <hr style={hrStyle}/>
      </Container> 
</HashRouter>
     
    );
  }
}

export default Home;
