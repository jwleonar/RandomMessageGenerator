/* General Idea:
Generate random meal suggestions.
3 random pieces of data: Day of Week, Time of Day (Breakfast, Lunch, Dinner), Food to eat.
3 helper functions to generate each piece of data.
1 factory function returning and object containing the meal data.
    - obj method for printing the random message
1 main function calling object creation function and obj print method.
*/

const meals = {
    _breakfast: ['an Omelette', 'Bacon, Eggs, and Toast', 'a Smoked Salmon Bagel'],
    _lunch: ['a Chicken Caesar', 'a Grilled Cheese', 'Carrots and Celery'],
    _dinner: ['Chicken and Rice', 'Sushi', 'Salmon and Asparagus'],

    get breakfast () {
        return this._breakfast;
    },

    set breakfast (meal) {
        this._breakfast.push(meal);
    },

    getMeal () {
        let day = randomDayOfWeek();
        let time = randomTimeOfDay();
        let meal = randomMeal(time);

        console.log(`You should eat ${meal} for ${time} on ${day}`);
    }
};

const randomDayOfWeek = () => {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    return daysOfWeek[Math.floor(Math.random() * 7)];
};

const randomTimeOfDay = () => {
    const timesOfDay = ['Breakfast', 'Lunch', 'Dinner'];

    return timesOfDay[Math.floor(Math.random() * 3)];
};

const randomMeal = (timeOfDay) => {

    if (timeOfDay === 'Breakfast') {
        return meals._breakfast[Math.floor(Math.random() * 3)];
    } else if (timeOfDay === 'Lunch') {
        return meals._lunch[Math.floor(Math.random() * 3)];
    } else if (timeOfDay === 'Dinner') {
        return meals._dinner[Math.floor(Math.random() * 3)];
    } else {
        return 'Invalid time of day.'
    }
};

meals.getMeal();