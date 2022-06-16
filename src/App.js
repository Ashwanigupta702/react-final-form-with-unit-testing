import {React} from 'react'
import './App.css';
import { Form, Field } from 'react-final-form'



function App() {
 
   const onSubmit=(e)=>{
     console.log(e);
     window.alert(JSON.stringify(e, 0, 2));
   };
   
  
  return (
    <div className="App">
      <header className='App-header'>
          <Form
           onSubmit={onSubmit}
           validate={validate}
           render={({ handleSubmit }) => (
             <form onSubmit={handleSubmit}>
                <h2>Registration Page</h2>
                <div >
                 
                  <Field name="firstName" >
            {({ input, meta }) => (
              <div>
                <label>First Name</label>
                <input {...input} type="text" placeholder="First Name" />
                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
                
              </div>
            )}
          </Field>
                </div>
                <div>
            
                <Field name="lastName" >
            {({ input, meta }) => (
              <div>
                <label>LastName</label>
                <input {...input} type="text" placeholder="Last Name" />
                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name ="age">
          {({ input, meta }) => (
              <div>
                <label>Age</label>
                <input {...input} type="number" placeholder="Age" />
                {meta.error && meta.touched && <span className='error'>{meta.error}</span>}
              </div>
            )}
          </Field>
          </div>
          <div>
          <label>Country</label>
            <Field name="Country" component="select">
            <option />
              <option >India</option>
              <option>America</option>
              <option>Bangladesh</option>
            <div></div>
                   
            </Field>
          </div>
                <button type="submit">Submit</button>
             </form>
           )}
          />
      </header>
    </div>
  );
}
export const validate=(e)=>{
  const error= {};
  console.log(e);
  if(!e.firstName)
  {
   error.firstName= "First Name is required";
  }
  if(!e.lastName)
  {
   error.lastName= "Last Name is required";
  }
   if(e.firstName && e.firstName.length<=5)
   {
     error.firstName="Must be at least 5 character";
   }
   if(e.lastName && e.lastName.length>=20)
   {
     error.lastName=" must be 20 character or less";
   }
   if(!e.age)
   {
     error.age="Age is required";
   }
   if(e.age && e.age<=18)
   {
     error.age="Age must be greater than or equal to 18";
   }
   
  return error;
};
export default App;
