import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from "react-redux";
import io from "socket.io-client";
import * as Icon from "react-feather";
import { MobileBody, H1, ImageContainer, ImageBody, InputBody, InputDiv, H3, Input, InputDiv2} from "./MobileCreate";

export class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      host: null,
      category: "",
      total_people: "",
      cost: "",
      location: "",
      image: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddEvent = () => {
    console.log("this.props", this.props);
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
      .post("/events/add", {
        name,
        description,
        host: this.props.user.user_id,
        category,
        total_people,
        cost,
        location,
        image
      })
      .then(() => {
        this.props.history.push("/browseevents");
      });
  };

  render() {
    return (
      <div>
        <MobileBody>
          <ImageContainer>
            <ImageBody>
              <Icon.Image>
                <input
                  className="input"
                  name="image"
                  type="url"
                  placeholder="Image URL"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />
              </Icon.Image>
            </ImageBody>
            <H1>Start a new Event</H1>
            <p>Find people<br/>and do your thing &mdash; together.</p>
            <button className="create-btn" onClick={this.handleAddEvent}>
            Create
          </button>
          </ImageContainer>
          <InputBody>
          <InputDiv>
          <H3>Event Name</H3>
          <Input
            className="input"
            name="name"
            placeholder="What do you want to call your event?"
            onChange={e => {
                this.handleChange(e);
            }}
          />
          </InputDiv>
          <InputDiv2>
          <H3>Description</H3>
          <Input
            className="input"
            name="description"
            placeholder="Who should join? What will you do?"
            onChange={e => {
              this.handleChange(e);
            }}
          />
          </InputDiv2>
          {/* <input
            className="input"
            name="category"
            placeholder="Category"
            onChange={e => {
              this.handleChange(e);
            }}
          /> */}
          <InputDiv2>
          <H3>Number of Attendees</H3>
          <Input
            className="input"
            type="number"
            name="total_people"
            placeholder="Number of People"
            onChange={e => {
              this.handleChange(e);
            }}
          />
          </InputDiv2>
          <InputDiv2>
          <H3>Approx Cost</H3>
          <Input
            className="input"
            type="number"
            name="cost"
            placeholder="Cost"
            onChange={e => {
              this.handleChange(e);
            }}
          />
          </InputDiv2>
          <InputDiv2>
          <H3>Location</H3>
          <Input
            className="input"
            name="location"
            type="address"
            placeholder="Location"
            onChange={e => {
              this.handleChange(e);
            }}
          />
        
          </InputDiv2>
          </InputBody>
        </MobileBody>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState;
}
export default connect(
  mapStateToProps,
  null
)(CreateEvent);
