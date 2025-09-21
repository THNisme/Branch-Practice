const data = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 },
    { name: 'Peter', age: 25 },
    { name: 'Emily', age: 17 },
    { name: 'David', age: 33 },
    { name: 'Sarah', age: 12 },
    { name: 'James', age: 48 },
    { name: 'Jessica', age: 21 },
    { name: 'Kevin', age: 15 },
    { name: 'Ashley', age: 28 },
    { name: 'Brian', age: 18 },
    { name: 'Megan', age: 31 },
    { name: 'Christopher', age: 11 },
    { name: 'Nicole', age: 42 },
    { name: 'Matthew', age: 23 },
    { name: 'Amanda', age: 13 },
    { name: 'Joshua', age: 39 },
    { name: 'Melissa', age: 29 },
    { name: 'Daniel', age: 14 },
    { name: 'Stephanie', age: 36 },
    { name: 'Andrew', age: 27 },
    { name: 'Angela', age: 19 },
    { name: 'Justin', age: 45 },
    { name: 'Rebecca', age: 22 },
    { name: 'Ryan', age: 16 },
    { name: 'Katherine', age: 34 },
    { name: 'Paul', age: 20 }
];

const TaskC = () => {
    const teenager = data.filter((person) => { return person.age >= 10 && person.age <= 20; });
    const notTeen = data.filter((person) => { return !(person.age >= 10 && person.age <= 20); });

    const firstTeen = teenager.find((person) => { return person.age >= 10 && person.age <= 20; });

    const teenagerSorted = teenager.sort((a, b) => { return a.age - b.age; });

    const ages = notTeen.map(p => p.age);

    const oldestAge = Math.max.apply(null, ages);
    const youngestAge = Math.min.apply(null, ages);

    const indexOldest = ages.findIndex(a => a === oldestAge);
    const indexYoungest = ages.findIndex(a => a === youngestAge);

    const getColor = (index) => {
        if (index === indexOldest) return "green";
        if (index === indexYoungest) return "red";
        return "black";
    };


    return (
        <div style={{ margin: "20px", textAlign: "center" }}>
            <h2>People Demo</h2>

            <p><strong>First Teenager:</strong> {firstTeen.name} ({firstTeen.age})</p>

            <h3>All Teenagers (sorted by age)</h3>
            <ul style={{padding: "0px", listStyle: "none"}}>
                {teenagerSorted.map(({ name, age }, index) => (
                    <li key={index}>
                        {name} - {age}
                    </li>
                ))}
            </ul>

            <h3>Not Teenagers</h3>
            <ul style={{padding: "0px", listStyle: "none"}}>
                {notTeen.map(({ name, age }, index) => (

                    <li key={index}
                        style={{
                            color: getColor(index),
                        }}>
                        {name} - {age}
                    </li>
                ))
                }
            </ul>
        </div >
    );

};

export default TaskC;
