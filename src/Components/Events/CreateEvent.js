import React, { Component } from 'react'
import axios from 'axios'
import { updateToy} from '../../redux/toyReducer'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import 'reset-css'
import {Link} from 'react-router-dom'

import {
    AppContainer,
    FormContainer,
    Image,
    FormHeader,
    FormTitle,
    FormInput,
    FormBtn,
    Input,
    Title
  } from '../AppStylesMany';

class CreateEvent extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            description: '',
            category: '',
            totalpeople: '',
            cost: '',
            location: '',
            image: '',
            url: ''
        }
    }
    handleToyPost = (e) => {
        e.preventDefault()
        const eventobj = {
            name: this.state.name,
            description: this.state.description,
            category: this.state.category,
            totalpeople: this.state.totalpeople,
            cost: parseInt(this.state.cost),
            location: this.state.location,
            image: this.state.image,
            url: this.props.url
            }
        axios.post('/api/toy', eventobj).then((res) => {
            console.log(toyobj)
            this.props.history.push('/browsetoys')
            this.props.updateToy(res.data)
        })
        this.setState({
            name: '',
            description: '',
            category: '',
            cost: '',
            location: '',
            image: '',
            url: ''
        })
        this.props.id && this.props.history.push('/details')
        
    }

    handlePostFormInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        // console.log(this.props.user)
        return (
            <AppContainer>
                <Title style={{ textDecoration: 'none', color: '#5e0a0a' }}>Post a Toy</Title>
            <FormContainer style={{ height: '150px', width: '115px',  margin: 10, padding: '10px'}}>
            <>
                {/* <Input> */}
                <form onSubmit={this.handleToyPost}>
                    <ul>
                        <li>
                    <input
                        type='text'
                        placeholder='name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handlePostFormInfoUpdate}
                    />
                    </li>
                    <li>
                    <input
                        type='text'
                        placeholder='description'
                        name='description'
                        value={this.state.description}
                        onChange={this.handlePostFormInfoUpdate}
                    />
                    </li>
                    <li>
                    <input
                        type='text'
                        placeholder='category'
                        name='category'
                        value={this.state.category}
                        onChange={this.handlePostFormInfoUpdate}
                    />
                    </li>
                    <li>
                    <input
                        type='integer'
                        placeholder='total people'
                        name='totalpeople'
                        value={this.state.totalpeople}
                        onChange={this.handlePostFormInfoUpdate}
                    />
                    </li>
                    <li>
                    <input
                        type='integer'
                        placeholder='cost'
                        name='cost'
                        value={this.state.cost}
                        onChange={this.handlePostFormInfoUpdate}
                    />
                    </li>
                    <li>
                    <input
                        type='text'
                        placeholder='location'
                        name='location'
                        value={this.state.location}
                        onChange={this.handlePostFormInfoUpdate}
                    />
                    </li>
                    <li>
                    <input
                        type='text'
                        placeholder='image'
                        name='image'
                        value={this.state.image}
                        onChange={this.handlePostFormInfoUpdate}
                    />
                    </li>
                    <li>
                    <input
                        type='text'
                        placeholder='url'
                        name='url'
                        value={this.state.url}
                        onChange={this.handlePostFormInfoUpdate}
                    />
                    </li>
                    <li>
                    {/* </Input> */}
                    <button onClick={this.handle_______}>create event</button>
                    </li>
                    </ul>
                </form>
            </>
            </FormContainer>
            </AppContainer>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
  }
  
  export default withRouter (connect(
    mapStateToProps,
    { updateEvent }
  )(CreateEvent))