import React, {Component} from 'react';
import TopTwentyItem from './TopTwentyItem';

class TopTwentyList extends Component{

render(){

  const topTwentyItemNodes = this.props.topTwenty.map(topTwentyItem => {
    return(
      <div className="top-twenty-list">
    <TopTwentyItem
    song={topTwentyItem["im:name"].label} artist={topTwentyItem["im:artist"].label}
    cover={topTwentyItem["im:image"][2].label}
    releaseDate={topTwentyItem["im:releaseDate"].attributes.label}
    preview={topTwentyItem["link"][1].attributes.href}
    >
    </TopTwentyItem>
    </div>
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
