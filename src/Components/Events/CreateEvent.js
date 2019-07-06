import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getUser  } from 'react-redux'

export class CreateEvent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            host: '',
            category: '',
            total_people: '',
            cost: '',
            location: '',
            image: '',
        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    };

    componentDidMount(){
        axios.get('/event/user').then(res => {
            this.props.getUser(res.data)
        })
    }

    handleAddEvent(){
        const {
            name,
            description,
            host,
            category,
            total_people,
            cost,
            location,
            image
        } = this.props.state;

  
    axios
    .post('/events/add', {
        name: name,
        description: description,
        host: host,
        category: category,
        total_people:total_people,
        cost: cost,
        location: location,
        image: image
    })
    .then(() => {
        this.props.history.push('addEvent')
    });
    }  



    render() {
        const{updateName, updateDescription, updateHost, updateCategory, updateTotalPeople, updateCost, updateLocation,updateImage} = this.props;
      return (
            <div>
                <input className='input' placeholder="name" onChange={(e) => {updateName(e.target.value)}} />
                <input className="input" placeholder="description" onChange={(e) =>{updateDescription(e.target.value)}} />
                <input className='input' placeholder="host" onChange={(e) => 
                {updateHost(e.target.value)  }}/>
                <input className='input' placeholder="category" onChange={(e) => 
                {updateCategory(e.target.value)}}/>
                <input className='input' placeholder="total_people" onChange={(e) => 
                {updateTotalPeople(e.target.value)}}/>
                <input className='input' placeholder="cost" onChange={(e) => 
                {updateCost(e.target)  }}/>
                <input className='input' placeholder="location" onChange={(e) => 
                {updateCost(e.target.value)  }}/>
                <input className='input' placeholder="image" onChange={(e) => 
                {updateImage(e.target.value)  }}/>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     const {name, description, host, category, total_people, cost, location, image} = state;
//     return{
//         name: name,
//         description: description,
//         host:host,
//         category:category,
//         total_people: total_people,
//         cost: cost,
//         location: location,
//         image: image
//     }
// }


// export default connect(mapStateToProps, {updateName, updateDescription, updateHost, updateCategory, updateTotalPeople, updateCost, updateLocation, updateImage})(CreateEvent);
export default CreateEvent;