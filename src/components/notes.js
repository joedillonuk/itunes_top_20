const topTwentyItemNodes = this.props.topTwenty.map(topTwentyItem => {
  return(
  <TopTwentyItem song={topTwentyItem["im:name"].label}> </TopTwentyItem>
)
})



{topTwentyItemNodes}
