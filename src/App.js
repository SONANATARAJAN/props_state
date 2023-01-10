import React, { Component } from 'react';
import Table from "./Table.js"

class App extends Component{

  /* state */
  state={
    characters:[{
      name:"Charlie",
      job:"Janitor",
    },
    {
      name:"Mac",
      job:"Bouncer",
    },
    {
      name:"Bob",
      job:"Banker",
    },
    {
      name:"Marley",
      job:"Administrator",
    },
    {
      name:"Loke",
      job:"Mobile developer",
    },
    {
      name:"Revi",
      job:"Designer",
    },
    {
      name:"swa",
      job:"actor",
    },
    {
      name:"vji",
      job:"youtuber",
    },
    {
      name:"suresh",
      job:"politician",
    },
    {
      name:"vera",
      job:"boxer",
    },
    {
      name:"nohs",
      job:"police",
    },
  ]

  }

  removecharecter=(index)=>{
    const {characters} =this.state
    let filtered= characters.filter((character,i)=>{
      return i!==index
    });
    this.setState({characters:filtered})
  }
  render(){
    const {characters} = this.state
  return(
    <div className='container'>
      <caption>TABLE</caption>
      <Table removecharecter={this.removecharecter} characterData={characters}  />

    </div>
  )
}
}

export default App;
