import React from 'react';

const TopTwentyItem = (props) => {
  if(!props.song) return null;


  return(



    <div className="top-twenty-item">


      <p>{props.song}</p>



    </div>

  )


}

export default TopTwentyItem;
