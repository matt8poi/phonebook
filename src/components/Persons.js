import React from 'react'

const Person = ({ name, phone }) => <div>{name} {phone}</div>


const Persons = ({ persons, searchString }) => {
    return (
            persons.map(person => {
                if (searchString === '') {
                    return <Person key={person.id} name={person.name} phone={person.phone} />
                }
                else if (person.name.includes(searchString)) {
                    console.log(true)
                    return <Person key={person.id} name={person.name} phone={person.phone} />
                }
                else {
                    return false
                }
        }
    )
    )}

export default Persons