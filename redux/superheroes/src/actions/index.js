

export const addHero = heroData => ({
    type: 'ADD_HERO',
    heroData: heroData,
})

export const deleteHero = heroData => ({
    type: "DELETE_HERO",
    heroData: heroData
})

export const fetchHero = heroData => ({
    type: "FETCH_HERO",
    heroData: heroData
})

export const addToCart = heroData => ({
    type: "ADD_TO_CART",
    heroData: heroData
})

export const deleteFromCart = heroData => ({
    type: "DELETE_FROM_CART",
    heroData: heroData
})