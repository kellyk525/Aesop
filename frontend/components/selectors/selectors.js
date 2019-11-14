


export const filterProductsByCategory = (state, category) =>
    Object.values(state.entities.products).filter((product) =>
        product.category === category
    )