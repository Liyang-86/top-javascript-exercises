const findTheOldest = function(people) {
    people.sort((a, b) => {
        if (a.yearOfDeath === undefined) a.yearOfDeath = new Date().getFullYear();
        if (b.yearOfDeath === undefined) b.yearOfDeath = new Date().getFullYear();
        return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
    });
    console.log(people);
    return people[people.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
