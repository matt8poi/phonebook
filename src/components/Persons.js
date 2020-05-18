import React from 'react'

const removeName = (event) => {
    console.log(event)
    event.preventDefault()
    
    peopleService
        .remove(event)
        .then(returnedPerson => {
            setPersons(persons.filter(person => person !== returnedPerson))
            setToDelete('')
        })
}

const Person = ({ key, name, number }) => <div>{name} {number} <button onClick={removeName(key)}>delete</button></div>


const Persons = ({ persons, searchString, removeName }) => {
    return (
            persons.map(person => {
                if (searchString === '') {
                    return <Person key={person.id} name={person.name} number={person.number} removeName={removeName}/>
                }
                else if (person.name.includes(searchString)) {
                    console.log(true)
                    return (
                            <Person key={person.id} name={person.name} number={person.number} removeName={removeName}/>
                    )
                }
                else {
                    return false
                }
        }
    )
    )}

export default Persons