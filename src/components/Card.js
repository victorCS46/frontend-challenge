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
        let contributor = this.props.data.map((item) => `https://api.github.com/repos/${item.owner.login}/${item.name}/stats/contributors`);
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
                    <div>
                        <span className="vcs-issues">Issues: {item.open_issues}</span>
                        <span className="vcs-stars">Stars: {item.stargazers_count}</span>
                    </div><br></br>

                        <a href= {`${item.html_url}/graphs/contributors`} className="vcs-contributor">Top Contributors</a>

                </div>
            </a>);
       
        return (
            <div>
                <div className="div_container">{hey}</div>
            </div>
        )
    }
}