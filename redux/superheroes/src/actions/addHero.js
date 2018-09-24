export const addHero = (heroData) => {
    return {
        type: 'addHero',
        heroData: heroData
    };
}