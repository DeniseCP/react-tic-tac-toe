import React from 'react';

const person = {
    name: 'Gregory Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};
export default function ToDoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s ToDos</h1>
            <img src="https://i.imgur.com/yXOvdOSs.jpg"
                alt={person.name}
                class="avatar" />
            <ul>
                <li>Lorem Ipsum</li>
                <li>Ipsum lorem</li>
                <li>Lipsum Iorem</li>
            </ul>
        </div>
    );
}
