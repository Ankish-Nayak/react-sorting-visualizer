import React from "react";
const useRefDimensions = (ref) => {
    const [dimensions,setDimensions] = React.useState({
        width: 1,
        height: 1
    });
    React.useEffect(()=>{
        if(ref.current){
            const boundingRect = ref.current.getBoundingClientRect();
            console.log(boundingRect)
            setDimensions({
                height : boundingRect.height,
                width : boundingRect.width
            }) 
        }
    },[ref])
    return dimensions;
}
export default useRefDimensions;