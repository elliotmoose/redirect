import * as React from 'react';

const redirectComp = () => {
  React.useEffect(()=>{
    window.location.href = "https://www.youtube.com/watch?v=jOiwqAOgh7Q"
  })
  return <div/>
}

export default redirectComp;