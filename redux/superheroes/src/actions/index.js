export const addHero = heroData => ({
    type: 'ADD_HERO',
    heroData: heroData
})

export const deleteHero = heroData => ({
    type: "DELETE_HERO",
    heroData: heroData
})