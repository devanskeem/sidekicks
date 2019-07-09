import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getUser } from 'react-redux'
import io from 'socket.io-client'

export class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            host: null,
            category: '',
            total_people: '',
            cost: '',
            location: '',
            image: '',
        };

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleAddEvent = () => {
        console.log('this.props', this.props)
        const {
            name,
            description,
            category,
            total_people,
            cost,
            location,
            image
        } = this.state;
        axios
            .post('/events/add', {
                name,
                description,
                host: this.props.user.user_id,
                category,
                total_people,
                cost,
                location,
                image
            }).then(() => {
                this.props.history.push('/browseevents')
            })
    }



    render() {
        return (

            <div>
                <input
                    className='input'
                    name='name'
                    placeholder="Name"
                    onChange={(e) => { this.handleChange(e) }}
                />
                <input
                    className="input"
                    name='description'
                    placeholder="Description"
                    onChange={(e) => { this.handleChange(e) }}
                />
                <input
                    className='input'
                    name="category"
                    placeholder="Category"
                    onChange={(e) => { this.handleChange(e) }}
                />
                <input
                    className='input'
                    type='number'
                    name="total_people"
                    placeholder="Number of People"
                    onChange={(e) => { this.handleChange(e) }}
                />
                <input
                    className='input'
                    type='number'
                    name="cost"
                    placeholder="Cost"
                    onChange={(e) => { this.handleChange(e) }}
                />
                <input
                    className='input'
                    name="location"
                    type='address'
                    placeholder="Location"
                    onChange={(e) => { this.handleChange(e) }}
                />
                <input
                    className='input'
                    name="image"
                    type='url'
                    placeholder="Image URL"
                    onChange={(e) => { this.handleChange(e) }}
                />
                <button
                    className="create-btn"
                    onClick={this.handleAddEvent}
                >
                    Create
                    </button>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    return reduxState
}
export default connect(mapStateToProps, null)(CreateEvent);

