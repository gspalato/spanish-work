import React from 'react';
import { MainPage } from './Pages/Main';
import './App.css';

export default class App extends React.Component
{
    public render()
    {
        return (
        	<div className="app">
        		<MainPage />
        	</div>
        )
    };
}