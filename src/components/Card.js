import React from 'react';




export default class Perfiles extends React.Component{
    
    state = {
        usuarios: [],
    };

    async componentDidMount(){
        const response = await fetch(`https://api.github.com/users/victorcs46`);
        const data = await response.json();
        console.log(data);
        this.setState({ usuarios: data });
    }

    render(){
        return(
            <div>
                <div>{this.state.usuarios.login}</div>
                <div>{this.state.usuarios.followers}</div>
                <div>{this.state.usuarios.following}</div>
                <div>{this.state.usuarios.public_repos}</div>
                <img src={this.state.usuarios.avatar_url} alt="No se encontro el usuario"></img>
            </div>
        )
    }
}