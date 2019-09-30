import React from 'react';
import Perfiles from './Card';

export default class Buscar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buscar: '',
            items: [],
            isSubmit: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }
    handleChange(e) {
        e.preventDefault();

        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        })
        console.log(this.state);
    }
    async handleSubmit(e) {
        e.preventDefault();
        const response = await fetch(`https://api.github.com/search/repositories?q=${this.state.buscar}&per_page=6`);
        const data = await response.json();
        console.log(data);
        this.setState({ items: data, isSubmit: true });
    }


    render() {
        const { isSubmit } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="repository name" name="buscar" onChange={this.handleChange} />
                    <button type="submit">Buscar</button>
                </form>

                {console.log('hey', isSubmit)}   
                {isSubmit ?  <Perfiles data={this.state.items.items} /> : ''}  
                
            </div>
    

        )
    }
}