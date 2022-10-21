import React from "react";
import Slider from 'react-rangeslider'
export default function BarCntSlider(props) {
  const { barCnt, setBarCnt} = props;
    // const [value,setValue] = React.useState(850);
    function handleChangeStart(){
        console.log('Started');
    }
    function handleChange(barCnt){
        setBarCnt(barCnt);
    }
    function handleChangeComplete(){
        console.log('event Completed');
    }
  return (
    <>
        <p className="sidebar-slider">Set Array Size</p>

      <Slider
        min={5}
        max={25}
        value={barCnt}
        onChangeStart={handleChangeStart}
        onChange={handleChange}
        sonChangeComplete={handleChangeComplete}
      />
      {/* <button onClick={()=>console.log(barCnt)}>Get Value</button> */}
    </>
  );
}
