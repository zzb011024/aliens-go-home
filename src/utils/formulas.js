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

