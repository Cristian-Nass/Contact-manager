import React, { Component } from 'react'
import Contact from './Contact'
class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'Jhone Doe',
                email: 'jhone.doe@gmail.com',
                phone: '072-214-2547'
            },
            {
                id: 2,
                name: 'Sara Smith',
                email: 'sara.smith@gmail.com',
                phone: '072-214-1234'
            },
            {
                id: 3,
                name: 'Pedram Bahadori',
                email: 'pedram.baha@gmail.com',
                phone: '072-214-2345'
            }
        ]
    }
    render() {
        const {contacts} = this.state;
        return (
            <div>
                 {contacts.map(contact => (
                     <Contact
                        key={contact.id}
                        contact={contact}
                     />
                 ))}
            </div>
        )
    }
}

export default Contacts; 