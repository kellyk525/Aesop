

export const OPEN_SIDE = 'OPEN_SIDE';
export const CLOSE_SIDE = 'CLOSE_SIDE';
export const HOVER_PRODUCT = 'HOVER_PRODUCT';

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


export const hoverProduct = (productId) => (
    {
        type: HOVER_PRODUCT,
        productId
    }
)
