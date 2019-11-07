


export const allBodyProducts = (state) =>
    Object.values(state.entities.products).filter((product) =>
        product.category === "Body"
    )