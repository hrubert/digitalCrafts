export function heroReducer(state = {heroList: []}, action) {
    switch (action.type) {
        case 'addHero':
            return {
                ...state,
                heroList: state.heroList.concat(action.hero)
            }
        case 'deleteHero':
            const updatedHeroes = state.heroList.filter(hero => 
                hero.heroURL !==action.heroData.heroURL)
            return {
                ...state,
                heroList: updatedHeroes
            }
        default:
            return state;
    }
}

    // = {
    // heroList: [{
    //     heroTitle: 'Hero',
    //     heroURL: 'http://www.impawards.com/2004/posters/hero.jpg'
    // }]
// }