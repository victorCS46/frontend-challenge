import React from 'react'
class Contributors extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      repo: [],
    }
    //this.con = this.con.bind(this);
  }

  // async con(e) {
  //   e.preventDefault();
  //   this.props.data.map((item) => {
  //     // const response = await fetch(`https://api.github.com/repos/${item.owner.login}/${item.name}/contributors`);
  //     // const data = await response.json();
  //     // console.log(data);
  //     // this.setState({repo: data})
  //   });
  // }

  async componentDidMount() {
    console.log(this.props);
      const hey = async () => {
        const response = await fetch(`${this.props.location.state.repo}`);
        const data = await response.json();
        console.log(data)
        this.setState({ repo: data });
      }
      hey();
  }


  render() {
    console.log(this.state.repo);
    let x = this.state.repo.map((item)=>
        <div key ={item.id}>
          <div>
            <img className="vcs-con_img" src={item.avatar_url} alt="not found!!"/>
          </div>
          <div>{item.login}</div>
          <div>{item.contributions}</div>
        </div>,
    );
  // console.log(this.state.repo);
    return (
      <div>
        <div>{x}</div>
      </div>

    )
  }
}
export default Contributors;