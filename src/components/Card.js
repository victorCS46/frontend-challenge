import React from 'react';
import { Route, Link} from 'react-router-dom';
import Contributors from './ConCard';

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
            <div key={item.id}>
                <a className="vc_a" href={item.html_url}>
                    <div className="div_capsule">
                        <div className="div_image">
                            <img src={item.owner.avatar_url} alt="No se encuentra imagen"></img>  
                        </div>
                        <div className="vcs-repo_name">{item.full_name}</div>  
                        <div><span className="vcs-language">{item.language}</span></div>  
                        <div className="vcs-description">{item.description}</div>
                        <br></br>
                        <div>
                        <span className="vcs-issues">Issues: {item.open_issues}</span>
                        <span className="vcs-stars">Stars: {item.stargazers_count}</span>
                        </div><br></br>
                        <Link to={{ pathname: 'components/contributors/', state: { repo: item.contributors_url } }} className="vcs-contributor">Top Contributors</Link>
                        <Route path="/components/contributors" component={Contributors} />
                    </div>
                </a>
            </div>);
       
        return (
            <div>
                <div className="div_container">{hey}</div>
            </div>
        )
    }
}