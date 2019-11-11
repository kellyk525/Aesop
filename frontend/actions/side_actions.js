

export const OPEN_SIDE = 'OPEN_SIDE';
export const CLOSE_SIDE = 'CLOSE_SIDE';


export const openSide = (side) => (
    ({
        type: OPEN_SIDE,
        side
    })
)

export const closeSide = () => (
    ({
        type: CLOSE_SIDE
    })
)



