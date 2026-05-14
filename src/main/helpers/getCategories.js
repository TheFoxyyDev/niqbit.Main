import games from './getGames.js';

const categories = [
    {
        id: 1,
        name: "Papa's Arcade"
    },
    {
        id: 2,
        name: "Moto X3M"
    },
    {
        id: 3,
        name: "Others"
    }
]

export default categories.filter(category =>
    games.some(game => game.category === category.id && game.show)
);