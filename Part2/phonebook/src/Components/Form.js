import React from "react";
import numberService from "../Services/Numbers";

const Form = ({ 
    personsList, setNewPersonsList, NewPersonsName, handleName, setNewPersonsName, NewPersonsNumber, handleNumber, setNewPersonsNumber, setNotification, setNotificationStyle}) => {

        const addPerson = (event) => {
            event.preventDefault();
            const personObject = {
                name: NewPersonsName,
                number: NewPersonsNumber,
            };
            const persons = personsList.map(person => person.name);
            if (persons.includes(NewPersonsName)) {
                setNotificationStyle("error");
                setNotification(`The name ${NewPersonsName} is already added to the phonebook`);
                setTimeout(() => {
                    setNotification(null);
                }, 5000);
            } else {
                setNewPersonsList(personsList.concat(personObject));
                setNewPersonsName("");
                setNewPersonsNumber("");
                setNotificationStyle("success");
                setNotification(`Added ${NewPersonsName}`);
                setTimeout(() => {
                    setNotification(null);
                }, 5000);
            }
        }

        const updateContact = (person, number) => {
            numberService.update(person.id, { ...person, number: number })
                .then(returnedPerson => {
                    setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
                    setNotificationStyle("success");
                    setNotification(`Updated ${person.name}`);
                    setTimeout(() => {
                        setNotification(null);
                    }, 5000);
                }
                )
                .catch(error => {
                    setNotificationStyle("error");
                    setNotification(`Information of ${person.name} has already been removed from the server`);
                    setTimeout(() => {
                        setNotification(null);
                    }, 5000);
                }
                )
        }
        const addnewContact = (personObject) => {
            numberService.create(personObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNotificationStyle("success");
                    setNotification(`Added ${personObject.name}`);
                    setTimeout(() => {
                        setNotification(null);
                    }, 5000);
                }
                )
                .catch(error => {
                    setNotificationStyle("error");
                    setNotification(error.response.data.error);
                    setTimeout(() => {
                        setNotification(null);
                    }, 5000);
                }
                )
        }

        const setnotificationmessage = (personObject) => {
            if (window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)) {
                const person = persons.find(p => p.name === personObject.name);
                updateContact(person, personObject.number);
            }
        }

        return (
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={NewPersonsName} onChange={handleName} />
                </div>
                <div>
                    number: <input value={NewPersonsNumber} onChange={handleNumber} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        )
    }

export default Form;


    