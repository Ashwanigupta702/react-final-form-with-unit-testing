import { render, screen } from '@testing-library/react';
import {jest} from '@jest/globals';
import App ,{validate} from './App';
import { Form, Field } from 'react-final-form'
import userEvent from '@testing-library/user-event';




describe('renders react Registration Page', () => {
  test('renders Registration Page', () => {
    render(<App />);
    const linkElement = screen.getByText(/Registration Page/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('render the registration with 1 button',async()=>{
    render(<App/>);
    const buttonList=await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1)
  })
  test('render the registration with label firstname',async ()=>{
    render(<App/>)
    const labelfirstname= screen.getAllByPlaceholderText("First Name")
    expect(labelfirstname).toBeTruthy()
    
  })
  test('render the registration with labellastname',async ()=>{
    render(<App/>)
    const labellastname= screen.getAllByPlaceholderText("Last Name")
    expect(labellastname).toBeTruthy()
    
  })
  test('render the registration with labelage',async ()=>{
    render(<App/>)
    const labelage= screen.getAllByPlaceholderText("Age")
    expect(labelage).toBeTruthy()
    
  })
  test("check valid firstname",()=>{
    render(<App/>);
    const e={
      firsName:"",
      lastName:"gupta",
      age:42,
    }
    
    const r={
      firstName: 'First Name is required',
      
    }
    expect(validate(e)).toEqual(r);
  })
});

test("check valid lastName",()=>{
  
  const e={
    firsName:"",
    lastName:"",
    age:42,
  }
  
  const r={
    firstName: 'First Name is required',
    lastName:'Last Name is required'
  }
  expect(validate(e)).toEqual(r);
});
test("check valid age",()=>{
  const e={
    firsName:"ashwani",
    lastName:"gupta",
    age:4,
  }
  console.log(validate(e));
  const r={
    firstName: 'First Name is required',
    age: 'Age must be greater than or equal to 18'
  }
  expect(validate(e)).toEqual(r);
})