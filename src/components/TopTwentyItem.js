import React from 'react';

const TopTwentyItem = (props) => {
  if(!props.song) return null;



  return(



    <div className="top-twenty-item">

    <div>
    <img className="top-twenty-item-image" src={props.cover} alt="song cover"></img>
    </div>


    <div className="top-twenty-item__text">
      <h2>{props.song}</h2>
    <p>artist: {props.artist}</p>
    <p><i> released: {props.releaseDate}</i></p>

      <p>{props.preview}</p>
    </div>



    </div>

  )


}

export default TopTwentyItem;
