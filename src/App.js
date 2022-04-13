import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className="App"></div>
      <Form />
    </>
  );
}

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      elements: [
        {
          element: '',
          a: '',
          b: ''
        }
      ]
    };
  };

  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset className='elementsFieldset'>
            {this.state.elements.map((value, index) => {
              return (
                <div className='element-wrapper'>
                  <Element
                    options={[' ', 'Dysprosium', 'Neodymium', 'Samarium']}
                    onChange={(element) => this.updateElement(element, index)}
                  />
                </div>
              )
            })}
          </fieldset>
          <button type="submit">Submit</button>
          <button onClick={() => this.addElement()}>Add</button>
        </form>
      </>
    );
  }

  updateElement(currentValue, index) {

    const currentElements = this.state.elements.slice();
    currentElements[index] = {
      element: currentValue.element ?? currentElements[index].element,
      a: currentValue.a ?? currentElements[index].a,
      b: currentValue.b ?? currentElements[index].b,
    }

    this.setState({
      elements: currentElements
    });
  }

  addElement() {
    this.setState({
      elements: this.state.elements.concat({
        element: '',
        a: '',
        b: '',
      })
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
  }

}

class Element extends React.Component {

  render() {
    return (
      <>
        <Dropdown
          options={this.props.options}
          onChange={(value) => this.props.onChange({ element: value })}
        />
        <label htmlFor='1'>a:</label>
        <input type="text" id='1' onChange={(e) => this.props.onChange({ a: e.target.value })} />
        <label htmlFor='2'>b:</label>
        <input type="text" id='2' onChange={(e) => this.props.onChange({ b: e.target.value })} />
      </>
    )
  }

}

function Dropdown(props) {

  return (
    <>
      <label htmlFor='1'>ETR:</label>
      <select id='1' onChange={(e) => {
        const currentValue = [...e.target.children].find(option => option.selected).value;
        return props.onChange(currentValue);
      }}>
        {props.options.map((option, index) => <option id={index}>{option}</option>)}
      </select>
    </>
  );
}

export default App;
