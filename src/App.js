import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', phone: '040-123456', id: 0 },
        { name: 'Ada Lovelace', phone: '39-44-5323523', id: 1 },
        { name: 'Dan Abramov', phone: '12-43-234345', id: 2 },
        { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 3 }
    ])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [searchString, setSearchString] = useState('')

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }

    const handleSearchStringChange = (event) => {
        setSearchString(event.target.value)
    }

    const addName = (event) => {
        event.preventDefault()
        if (persons.map(person => person.name).includes(newName)) {
            alert(`${newName} is already added to the phonebook`)
        }
        else {
            const nameObject = {
                name: newName,
                phone: newPhone,
                id: persons.length + 1
            }

            setPersons(persons.concat(nameObject))
            setNewName('')
            setNewPhone('')
        }
    }


    return (
        <div>
            <h1>Phonebook</h1>
            <form>
                <Filter searchString={searchString} handleSearchStringChange={handleSearchStringChange} />
            </form>
            <h2>add a new</h2>
            <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newPhone={newPhone} handlePhoneChange={handlePhoneChange} />
            <h2>Numbers</h2>
            <Persons persons={persons} searchString={searchString} />
        </div>
    )
}

export default App