export function heroReducer(state, action) {

    if(state === undefined) {
        console.log("initial state")
        return {
            heroList: [{
                heroTitle: 'Hero',
               heroURL: 'https://www.impawards.com/2004/posters/hero.jpg'
            },
            {
                heroTitle: 'Ip Man',
                heroURL: 'https://images-na.ssl-images-amazon.com/images/I/61q1uWFVzzL.jpg'
            }
        ]
        }
    }

    switch (action.type) {
        case 'ADD_HERO':
            return {
                ...state,
                heroList: state.heroList.concat({
                    heroName: action.heroData.heroName,
                    heroURL: action.heroData.heroURL
                })
            }
        case 'DELETE_HERO':
            const updatedHeroes = state.heroList.filter(hero => 
                hero.heroURL !== action.heroData.heroURL)
            return {
                ...state,
                heroList: updatedHeroes
                }
        default:
            return state;
    }
}