


export const allSkinProducts = (state) => 
    Object.values(state.entities.products).filter((product) => 
        product.category === "Skin"
    )