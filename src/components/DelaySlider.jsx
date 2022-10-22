import React from "react";
import Slider from 'react-rangeslider'

export default function DelaySlider(props){
    const {delay,setDelay} = props;
    function handleChangeStart(){
        console.log('delay started');
    }
    function handleChange(delay){
        setDelay(delay);
    }
    function handleChangeComplete(){
        console.log("delay complete")
    }
    return (<>
        <p className="sidebar-slider">Set Delay(ms)</p>
        <Slider
            min={0}
            max={500}
            value={delay}
            onChangeStart={handleChangeStart}
            onChange={handleChange}
            sonChangeComplete={handleChangeComplete}
        />
         {/* <button onClick={()=>console.log(delay)}>Get Value</button> */}
    </>);
}