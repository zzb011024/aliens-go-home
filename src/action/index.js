export const MOVE_OBJECTS = 'MOVE_OJECTS';
export const moveObjects = mousePosition => ({
    type: MOVE_OBJECTS,
    mousePosition,
});
//然后去reducer里改代码
