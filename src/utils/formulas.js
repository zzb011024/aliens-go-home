// 定义一个传入某些参数就会返回这些字符串的函数
export const pathFromBezierCurve = (cubicBezierCurve) => {

    const {
        initialAxis, initialControlPoint, endingControlPoint, endingAxis,
    } = cubicBezierCurve;
    return `
        M${initialAxis.x}  ${initialAxis.y}
        c ${initialControlPoint.x} ${initialControlPoint.y}
       ${endingControlPoint.x} ${endingControlPoint.y}
       ${endingAxis.x} ${endingAxis.y}
` ;
};
// 先从 cubicBezierCurve 中提取（initialAxis，initialControlPoint，endingControlPoint，endingAxis）
// 接着将它们传入到构建三次贝塞尔曲线的模板字符串中。

export const radiansToDegree = radians => ((radians * 180) / Math.PI);

export const calculateAngle = (x1, y1, x2, y2) => {
    if (x2 >= 0 && y2 >= 0) {
        return 90;
    } else if (x2 < 0 && y2 < 0) {
        return -90;
    }

    const dividend = x2 - x1;
    const divisor = y2 - y1;
    const quotient = dividend / divisor;
    return radiansToDegree(Math.atan(quotient)) * -1;

};




export const getCanvasPosition = (event) => {
    const svg = document.getElementById('aliens-go-home-canvas');
    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const { x, y } = point.matrixTransform(svg.getScreenCTM().inverse());
    return { x, y };
};

