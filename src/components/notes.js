const topTwentyItemNodes = this.props.topTwenty.map(topTwentyItem => {
  return(
  <TopTwentyItem song={topTwentyItem["im:name"].label}> </TopTwentyItem>
)
})



{topTwentyItemNodes}


  preview={topTwentyItem["im:link"][0].attributes.href}
