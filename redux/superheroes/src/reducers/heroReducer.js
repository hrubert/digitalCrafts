export function heroReducer(state, action) {

    if(state === undefined) {
        console.log("initial state")
        return {
            heroList: [],
            cart: [],
            total: 0
        }
    }

    switch (action.type) {
        case 'ADD_HERO':
            return {
                ...state,
                heroList: state.heroList.concat({
                    heroName: action.heroData.heroName,
                    heroURL: action.heroData.heroURL,
                    id: action.heroData.id,
                    price: Math.floor(Math.random() * 25)
                }),
                cart: state.cart,
                total: state.total
            }
        case 'DELETE_HERO':
            const updatedHeroes = state.heroList.filter(hero => 
                hero.id !== action.heroData.id)
            return {
                ...state,
                heroList: updatedHeroes,
                cart: state.cart,
                total: state.total
                }
        case 'FETCH_HERO':
            {
                return {
                    ...state,
                    heroList: state.heroList.concat({
                        heroName: action.heroData.Title,
                        heroURL: action.heroData.Poster,
                        id: action.heroData.imdbID,
                        price: Math.floor(Math.random() * 20) + 5 
                    }),
                    cart: state.cart,
                    total: state.total
                }
            }
        case 'ADD_TO_CART':
            {
                return {
                    ...state,
                    cart: state.cart.concat(action.heroData),
                    total: state.total += action.heroData.price
                }
            }
        case 'DELETE_FROM_CART':
            const updatedCart = state.cart.filter(hero => 
                hero.id !== action.heroData.id)
            return {
                ...state,
                cart: updatedCart,
                total: state.total -= action.heroData.price
            }
        default:
            return state;
    }
}