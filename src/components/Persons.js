import React from 'react'

const Person = ({ name, number }) => <div>{name} {number}</div>


const Persons = ({ persons, searchString }) => {
    return (
            persons.map(person => {
                if (searchString === '') {
                    return <Person key={person.id} name={person.name} number={person.number} />
                }
                else if (person.name.includes(searchString)) {
                    console.log(true)
                    return <Person key={person.id} name={person.name} number={person.number} />
                }
                else {
                    return false
                }
        }
    )
    )}

export default Persons