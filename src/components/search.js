import React from 'react';
import Card from './Card';

export default class Buscar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buscar: '',
            items: [],
            isSubmit: false,

        };
        this.i = 6;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loadMore = this.loadMore.bind(this);
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
        this.i = this.i;
        const response = await fetch(`https://api.github.com/search/repositories?q=${this.state.buscar}&per_page=`+this.i);
        const data = await response.json();
        console.log(data);
        this.setState({ items: data, isSubmit: true});
    }

    async loadMore(e){
        e.preventDefault();
        this.i = this.i + 3; 
        if(this.i>=60){
            this.i = 60;
        }
        const response = await fetch(`https://api.github.com/search/repositories?q=${this.state.buscar}&per_page=`+this.i);
        const data = await response.json();
        console.log(data);
        this.setState({ items: data, isSubmit: true});
        window.scrollTo(0,document.body.scrollHeight);
    }

    

    render() {
        const { isSubmit } = this.state;
        return (
            
            <div>
                <div className="header">
                    <img id="react_icon" src="logo192.png"></img>
                    <h1>VACS</h1>
                    <span>Github repositories search bar</span>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <input type="text" placeholder="     repository name" name="buscar" onChange={this.handleChange} />
                    <button type="submit">Buscar</button>
                </form>


                {console.log('hey', isSubmit)}   
                {isSubmit ?  <Card data={this.state.items.items} /> : ''} 
                    <br></br>
                    <br></br>
                    <br></br> 
                <form onSubmit={this.loadMore}>
                    <button id="load" type="submit">Load More...</button>
                </form>
                {this.i>=60 ? document.getElementById("load").disable=true : ''}
                


            </div>
        )
    }
}