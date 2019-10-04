import React from 'react'
class Contact extends React.Component {
 
  constructor(props){
       super(props);
       this.state = {
          repo: [],
       }
       this.con = this.con.bind(this);
  }

  async con(e){
    e.preventDefault();
    let wey = this.props.data.map(async(item) =>{
      const response = await fetch(`https://api.github.com/repos/${item.owner.login}/${item.name}/contributors`);
      const data = await response.json();
      console.log(data);
      this.setState({repo: data})
      });
    }
    
  
  render(){
    return (
     <div>
      <a onClick={this.con}>contact</a>

      </div>

    )
  }
}
export default Contact;