import React from 'react'
class Degree extends React.Component {
  state={
    bg:{
        center:"true",
    }
  }

  render() {

    return (
      <div style={{justifyContent: 'center', alignItems: 'center'}}>
      <img src={require("../pictures/degree.png")} height={800} width={1000} />
      </div>
    )
  }

}
export default Degree