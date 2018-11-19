import React,{Component} from 'react';
import axios from 'axios';
export default class Post extends Component {
constructor(props){
super(props);
this.state={title:'',description:'',content:''};
this.handleChange=this.handleChange.bind(this);
this.handleSubmit=this.handleSubmit.bind(this);
}

handleChange(event){

if (event.target.name === 'title'){

this.setState({ 'title': event.target.value });
}

if (event.target.name === 'description'){

this.setState({ 'description': event.target.value });
}
if (event.target.name === 'content') {
this.setState({'content':event.target.value});
}

}
handleSubmit(event){
event.preventDefault();
var newstory={
title:this.state.title,

description:this.state.description,
content:this.state.content

}
axios.post('http://10.90.90.61:3002/Story',newstory).then(res=>{

if(res.data.status==='success'){
alert('success');

}
})
}
    render() {
    return (

<div class="container">
   <a href="/logout" class="btn btn-default btn-sm">Logout</a>
   <div class="page-header text-center">
     <h1> Admin Page</h1>
   </div>
    <form method="post"  onSubmit={this.handleSubmit}>
   <div class="container">
     <div class="formgroup">
        <div class="col-xs-4">
         <label for="title">Title</label>
         <input type="text" class="form-control" name="title" onChange={this.handleChange} />
      </div>
   </div>
   </div>
   <div class="container">
     <div class="formgroup">
         <div class="col-xs-4">
             <label for="category">Category</label>
             <select>
                  <option value="The new new">select</option>
                  <option value="The new new">The new new</option>
                  <option value="culture">Culture</option>
                  <option value="culture">Tech</option>
                  <option value="culture">Startups</option>
                  <option value="culture">Self</option>
                  <option value="culture">Politics</option>
                  <option value="culture">Design</option>
                  <option value="culture">Health</option>
                  <option value="culture">Popular</option>
                  <option value="culture">Collections</option>
                  <option value="culture">More</option>
             </select>
         </div>
      </div>
    </div>
   <div class="container">
    <div class="formgroup">
      <div class="col-xs-4">
         <label for="description">Description</label>
         <input type="text" class="form-control" name="description" onChange={this.handleChange} />
      </div>
   </div>
   </div>
   <div class="container">
    <div class="form-group">
       <div class="col-xs-4">
          <label>Content</label>
          <textarea class="form-control" name="content" onChange={this.handleChange}></textarea>
       </div>
   </div>
   </div>
   <input class="btn btn-primary btn-block" type="submit" value="Post" />
   </form>
</div>

);
}
}