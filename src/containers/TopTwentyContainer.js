import React from 'react';
import TopTwentyList from '../components/TopTwentyList';

class TopTwentyContainer extends React.Component {

constructor(props){
  super(props)
  this.state = {
    topTwenty: []
  }
  // this space is for binding functions to this class
}

componentDidMount(){
const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

fetch(url)
.then(res => res.json())
.then(topTwenty => this.setState({topTwenty: topTwenty.feed.entry}))
.catch(err => console.error)
}


render(){

  return(
    <div className="top-twenty-container">

      <p>This is the Top Twenty Container.</p>
      <TopTwentyList topTwenty={this.state.topTwenty} />
    </div>
  )
}



}

export default TopTwentyContainer;
