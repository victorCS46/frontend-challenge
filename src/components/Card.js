import React from 'react';


export default class Card extends React.Component {

    /*
    async componentDidMount() {
        const response = await fetch(`https://api.github.com/users/victorcs46`);
        const data = await response.json();
        console.log(data);
        this.setState({ usuarios: data });
    }
    */

    render() {
        var hey = this.props.data.map((item) => 
            /*Datos de los repositorios*/
            <a className="vc_a" href={item.html_url}>
                <div className="div_capsule" key={item.id}>
                    <img src={item.owner.avatar_url} alt="No se encuentra imagen"></img>  
                    <div>{item.full_name}</div>  
                    <div>{item.language}</div>  
                    <div>{item.description}</div>
                    <div>Issues: {item.open_issues}</div>
                    <div>Stars: {item.stargazers_count}</div><br></br>
                </div>
            </a>);
       
        return (
            <div>
                <div className="div_container">{hey}</div>
            </div>
        )
    }
}