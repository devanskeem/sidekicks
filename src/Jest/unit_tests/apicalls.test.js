import axios from 'axios'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

jest.mock('axios')


//Display Lists of Users
it('fetches a list of users',() => {
    const getSpy = jest.spyOn(axios, 'get')
    const wrapper = shallow(<EventDisplay />)
})