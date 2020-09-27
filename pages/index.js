import * as React from 'react';

const redirectComp = () => {
  React.useEffect(()=>{
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  })
  return <div/>
}

export default redirectComp;