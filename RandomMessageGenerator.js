/* General Idea:
Generate random meal suggestions.
3 random pieces of data: Day of Week, Time of Day (Breakfast, Lunch, Dinner), Food to eat.
3 helper functions to generate each piece of data.
1 factory function returning and object containing the meal data.
    - obj method for printing the random message
1 main function calling object creation function and obj print method.
*/

const randomDayOfWeek = () => {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    return daysOfWeek[Math.floor(Math.random() * 7)];
};

const randomTimeOfDay = () => {
    const timesOfDay = ['Breakfast', 'Lunch', 'Dinner'];

    return timesOfDay[Math.floor(Math.random() * 3)];
};