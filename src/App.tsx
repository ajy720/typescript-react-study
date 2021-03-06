import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';
import SampleProvider from './SampleContext'

const App = () => {
  const onClick = (name: string) => {
    console.log(`${name} says hello`)
  }

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form)
  }

  return (
    <Fragment>
      <Greetings name="Hello" onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit}></MyForm>
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
    </Fragment>

  );
}

export default App;
