import React, {Component} from 'react';
import TopTwentyItem from './TopTwentyItem';

class TopTwentyList extends Component{

render(){

  const topTwentyItemNodes = this.props.topTwenty.map(topTwentyItem => {
    return(
    <TopTwentyItem song={topTwentyItem["im:name"].label}> </TopTwentyItem>
  )
  })

  return(
    <div className ="top-twenty-list">
    <h4>Top Twenty:</h4>
    {topTwentyItemNodes}

    </div>



  )


}


}

export default TopTwentyList;
