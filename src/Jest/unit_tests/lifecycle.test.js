import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('calls componentDidMount', () => {
    jest.spyOn(App.prototype, 'componentDidMount')
    const wrapper = shallow(<App />)
    expect(App.prototype.componentDidMount.mock.calls.length).toBe(1)
  })

  it('should call componentDidMount once', () => {
    componentDidMountSpy = spyOn(BrowseEvent.prototype, 'componentDidMount');
    component = shallow(<BrowseEvents/>)
    expect(componentDidMOuntSpy).toHaveBeenCalledTimes(1);

    it('should populate the state', () => {
      component = shallow(<BrowseEvents/>)
      expect(compoinent.state().events.lenght).toEqual(5);
    });
  });

  it('should have a working method called handleButtonClick(firstEvent)');

  expect(component.state().selectEvent).toEqual(eventData[0]);