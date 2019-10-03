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
        let hey = this.props.data.map((item) => 
            /*Datos de los repositorios*/
            <a className="vc_a" href={item.html_url} key={item.id}>
                <div className="div_capsule" key={item.id}>
                    <div className="div_image">
                        <img src={item.owner.avatar_url} alt="No se encuentra imagen"></img>  
                    </div>
                    <div>{item.full_name}</div>  
                    <div><span className="vcs-language">{item.language}</span></div>  
                    <div className="vcs-description">{item.description}</div>
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