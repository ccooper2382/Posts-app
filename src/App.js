import './App.css';
import React, {Component} from 'react';
import PostTile from "./Components/postTile";
import axios from "axios";


class App extends Component {
  state = {
    userId: '1',
    id: '1',
    title: 'stuff',
    body: 'lots of stuff'
  };

  fetchData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts", { headers: { Accept: "application/json" } });
    console.log(res.data);
  };

  render() {
    return (
        <div className="App">
          <PostTile id={this.state.id} title={this.state.title} body={this.state.body} onClick={this.fetchData}/>
        </div>
    );
  }
}

export default App;
