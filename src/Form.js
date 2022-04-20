import React from 'react';
import './Form.css'

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
      ],
      ph: {
        min: '',
        max: ''
      },
      n: {
        min: '',
        max: ''
      },
      rao: {
        min: '',
        max: ''
      }
    };
  };

  render() {
    return (

      <form
        className='form'
        onSubmit={(e) => this.handleSubmit(e)}
      >

        <fieldset className='operation-fieldset'>
          <OperationVariable
            name='pH'
            shortString='ph'
            onChange={(value) => this.changeOperationalVariableValue(value)}
          />
          <OperationVariable
            name='Nº of stages'
            shortString='n'
            onChange={(value) => this.changeOperationalVariableValue(value)}
          />
          <OperationVariable
            name='A/O Ratio'
            shortString='rao'
            onChange={(value) => this.changeOperationalVariableValue(value)}
          />
        </fieldset>

        <fieldset className='elements-fieldset'>
          {this.state.elements.map((value, index) => {
            return (
              <div key={index} className='element-wrapper'>
                <Element
                  options={[' ', 'Dysprosium', 'Neodymium', 'Samarium']}
                  onChange={(element) => this.updateElement(element, index)}
                />
              </div>
            )
          })}
        </fieldset>

        <fieldset className='buttons-fieldset'>
          <button type="submit">Submit</button>
          <button onClick={() => this.addElement()}>Add</button>
        </fieldset>

      </form>

    );
  }

  updateElement(currentValue, index) {

    this.setState((state) => {

      const currentElements = state.elements.slice();
      currentElements[index] = {
        element: currentValue.element ?? currentElements[index].element,
        a: currentValue.a ?? currentElements[index].a,
        b: currentValue.b ?? currentElements[index].b,
      }

      return {
        elements: currentElements
      }
    });
  }

  addElement() {
    this.setState((state) => {
      return {
        elements: state.elements.concat({
          element: '',
          a: '',
          b: '',
        })
      }
    });
  }

  changeOperationalVariableValue(currentValue) {
    const keyToChange = Object.keys(currentValue)[0];
    this.setState((state) => {
      return {
        [keyToChange]: {
          min: currentValue[keyToChange].min ?? state[keyToChange].min,
          max: currentValue[keyToChange].max ?? state[keyToChange].max,
        }
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

}

function OperationVariable(props) {
  return (
    <div className='op-wrapper'>
      <span className='op-wrapper-title'>{props.name}</span>
      <label >min:
        <input className='small-input' type="text" key='1' onChange={(e) => props.onChange({ [props.shortString]: { min: e.target.value } })} />
      </label>
      <label >max:
        <input className='small-input' type="text" key='2' onChange={(e) => props.onChange({ [props.shortString]: { max: e.target.value } })} />
      </label>
    </div>
  )
}

function Element(props) {
  return (
    <>
      <Dropdown
        label='ETR:'
        options={props.options}
        onChange={(value) => props.onChange({ element: value })}
      />
      <label >a:
        <input className='small-input' type="text" key='1' onChange={(e) => props.onChange({ a: e.target.value })} />
      </label>
      <label >b:
        <input className='small-input' type="text" key='2' onChange={(e) => props.onChange({ b: e.target.value })} />
      </label>
    </>
  )
}

function Dropdown(props) {
  return (
    <>
      <label >{props.label}
        <select
          className='small-input'
          onChange={(e) => {
            const currentValue = [...e.target.children].find(option => option.selected).value;
            return props.onChange(currentValue);
          }}
        >
          {props.options.map((option, index) => <option key={index}>{option}</option>)}
        </select>
      </label>
    </>
  );
}

export default Form;