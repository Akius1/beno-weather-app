import React, {useEffect,useState} from 'react'

const Clock = () => {
    const [clockState, setClockState] = useState({
        hr:0,
        min: 0
    });

    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }
    useEffect(()=>{
       let interval =  setInterval(()=>{
            const date = new Date();
            setClockState({
                hr: addZero(date.getHours()),
                min :addZero(date.getMinutes()),
            })
        },1000)

       return function(){
        clearInterval(interval)
       }
    },[])
  return (
    <div className='time'><div>{clockState.hr}</div><div>{clockState.min}</div></div>
  )
}

export default Clock;