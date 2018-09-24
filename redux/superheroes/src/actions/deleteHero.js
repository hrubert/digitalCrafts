export const deleteHero = (heroData) => {
    return {
        type: "deleteHero",
        heroData: heroData
    }
}