import React from "react";
import CannonBase from "./CannonBase";
import CannonPipe from "./CannonPipe";
import Ground from "./Ground";
import Sky from "./Sky";


const Canvas = () => {
    // const style = {
    //     border: '1px solid black'
    // };
    const viewBox=[window.innerWidth/-2,100-window.innerHeight,window.innerWidth,window.innerHeight]
    return (
        <svg
            id="aliens-go-home-canvas"
            preserveAspectRatio="xMaxYMax"
            //  preserveAspectRatio属性表示是否强制进行统一缩放.
            // xMaxYMax - 强制统一缩放。
            // 将SVG元素的viewbox属性的X的最小值+元素的宽度与视图的X的最大值对齐。
            // 将SVG元素的viewbox属性的Y的最小值+元素的高度与视图的Y的最大值对齐。
            // style={style}

            viewBox={viewBox}
            // viewbox ( min-x, min-y, width, height )
            // 负友左正    负下正上

        >
            <Sky />
            <Ground />
            <CannonPipe rotation={45}/>
            <CannonBase/>
            {/* <circle cx={0} cy={0} r={50}/> */}

      </svg>
    );
}

export default Canvas;


// const Canvas = () => {
//   const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
//   return (
//     <svg
//       id="aliens-go-home-canvas"
//       preserveAspectRatio="xMaxYMax none"
//       viewBox={viewBox}
//     >
//       <Sky />
//       <Ground />
//       <CannonPipe rotation={45} />
//       <CannonBase />
//     </svg>
//   );
// };

// export default Canvas;
