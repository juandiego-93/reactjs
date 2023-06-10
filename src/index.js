import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

function App(props) {
    return(
        <h1> {props.greeting}, {props.name}! </h1>
    )
}

function withSaludo(Wrappedcomponent) {
    return function  WrappedcomponentWithSaludo(saludo) {
        return function ComponenteDeVerdad(props) {
            return (
                <>
                    <Wrappedcomponent {...props} greeting={saludo} />
                    <p>Estamos acompañando al WrappedComponent</p>
                </>
            )
        }
        
    }
}

const AppWithSaludo = withSaludo(App)('Wenas')

const root = document.getElementById('root');
ReactDOM.render(
    <AppWithSaludo name='JD'/>,
    root
);
