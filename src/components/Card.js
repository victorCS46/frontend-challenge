import React from 'react';
import Buscar from './search';


export default class Perfiles extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            usuarios: '',
        };



    }

    /*
    async componentDidMount() {
        const response = await fetch(`https://api.github.com/users/victorcs46`);
        const data = await response.json();
        console.log(data);
        this.setState({ usuarios: data });
    }
    */

    render() {
        const hey = this.props.data.map((item) => 
            //*************Datos de los repositorios******************//
            <li key={item.id}>
                <img src={item.owner.avatar_url}></img>,  
                {item.full_name},  
                {item.language},  
                {item.description},  
                <a href={item.html_url}>Entrar al repositorio</a>
            </li>);
            //********************************//
        return (
            <div>
                <div>{hey}</div>
            </div>
        )
    }
}