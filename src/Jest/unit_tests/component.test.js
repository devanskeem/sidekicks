import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import CreateEvent from './../../Components/Events/CreateEvent/CreateEvent'
import  EventMobile from './../../Components/Events/EventDisplay/EventMobile'
import BrowseEvent from './../../Components/Events/BrowseEvents'
import Navbar from './../../Components/Nav/Navbar'
import Messages from './../../Components/Profile/Messages'

import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })


//CreateEvent Component is rendering
    describe("Create Event component", () => {
      test("renders", () => {
        const wrapper = shallow(<CreateEvent />);

        expect(wrapper.exists()).toBe(true);
      });
    });

  //MobileCreate Component is rendering
  describe("Event Mobile component", () => {
    test("renders", () => {
      const wrapper = shallow(<EventMobile />);

      expect(wrapper.exists()).toBe(true);
    });
  });

  //EventDisplay component is rendering
  describe("My EventDisplay component", () => {
    test("renders", () => {
      const wrapper = shallow(<EventDisplay />);

      expect(wrapper.exists()).toBe(true);
    });
  });
    
  //EventMobile component is rendering
  describe("My CreateEvent component", () => {
    test("renders", () => {
      const wrapper = shallow(<CreateEvent />);

      expect(wrapper.exists()).toBe(true);
    });
  });

  //BrowseEvent component is rendering
  describe("Browse Event component", () => {
    test("renders", () => {
      const wrapper = shallow(<BrowseEvent />);

      expect(wrapper.exists()).toBe(true);
    });
  });

  //Navbar component is rendering
  describe("Nav bar component", () => {
    test("renders", () => {
      const wrapper = shallow(<Navbar />);

      expect(wrapper.exists()).toBe(true);
    });
  });

  //My Profile component is rendering
  describe("User Profile component", () => {
    test("renders", () => {
      const wrapper = shallow(<UserProfile />);

      expect(wrapper.exists()).toBe(true);
    });
  });

  //TipsTricks component is rendering
  describe("TipsTricks component", () => {
    test("renders", () => {
      const wrapper = shallow(<TipsTrick />);

      expect(wrapper.exists()).toBe(true);
    });
  });

  describe("Messages component", () => {
    test("renders", () => {
      const wrapper = shallow(<Messages />);

      expect(wrapper.exists()).toBe(true);
    });
  });

  describe('MyEvents Component', () => {
    let component, node;

    //Jest beforeEach()
    beforeEach((() => component = shallow(<ProductHeaer/>) ))
    beforeEach((() => node = component.find('h1') ))

    it('has h1 tag', () => {
      expect(node).toBeTruthy()
    });
    it('has a title class', () => {
      expect(node.hasClass('title')).toBeTruthy()
    });
  });



 
    


 