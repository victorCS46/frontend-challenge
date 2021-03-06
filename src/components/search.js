import React from 'react';
import Card from './Card';
// import Contributors from './ConCard';

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
        // console.log(this.state);
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        this.i = this.i;
        if(this.i > 6){
            this.i = 6;
        }
        const response = await fetch(`https://api.github.com/search/repositories?q=${this.state.buscar}&per_page=`+this.i);
        const data = await response.json();
        //console.log(data);
        this.setState({ items: data, isSubmit: true});
        document.getElementById("load").style.display = "block";
        // console.log('i =',this.i);
    }

    async loadMore(e){
        e.preventDefault();
        this.i = this.i + 3; 
        if(this.i>=30){
            this.i = 30;
            document.getElementById("load").style.display = "none";
        }
        const response = await fetch(`https://api.github.com/search/repositories?q=${this.state.buscar}&per_page=`+this.i);
        const data = await response.json();
        // console.log(data);
        this.setState({ items: data, isSubmit: true});
        window.scrollTo(0,document.body.scrollHeight);
        // console.log('i =',this.i);
    }
    
    render() {
        const { isSubmit } = this.state;
        return (
            <div>
                <div className="header">
                    <img id="react_icon" src="logo192.png" alt="React?"></img>
                    <h1>VACS</h1>
                    <span>Github repositories search bar</span>
                </div>
                <form onSubmit={this.handleSubmit} style={{paddingTop: '15px'}}>
                    <input type="text" placeholder="Repository name" name="buscar" onChange={this.handleChange} />
                    <button style={this.state.buscar ? {display:''} : {display: 'none'}} id="src_btn" className="vcs-btn" type="submit">Buscar</button>
                </form>
                {/* {console.log('hey',isSubmit)}    */}
                {isSubmit ?  <Card data={this.state.items.items} /> : ''}
                {/* {isSubmit ?  <Contributors data={this.state.items.items} /> : ''} */}
                <form onSubmit={this.loadMore}>
                    <center><button className="vcs-btn" id="load" type="submit">Load More...</button></center>    
                </form>
            </div>)
    }
}