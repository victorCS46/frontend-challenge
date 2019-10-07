import React from 'react'
class Contributors extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      repo: [],
      i: 10,
    }
    this.loadMore = this.loadMore.bind(this);
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

  loadMore(e){
    e.preventDefault();
    this.setState((actual)=>{
      return {i: actual.i + 5};
    })
    if(this.state.i>=25){
      document.getElementById("contributor_load").style.display = "none";
  }
    console.log(this.state.i);
  }

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
    let x = this.state.repo.slice(0,this.state.i).map((item)=>
        <center key ={item.id}><div key ={item.id} className="vcs-contributor_div">
          <div>
            <img className="vcs-con_img" src={item.avatar_url} alt="not found!!"/>
          </div>
          <div className="vcs-con_name">{item.login}</div>
          <div className="vcs-con_name">{item.contributions}</div>
        </div>
        </center>
    );
  // console.log(this.state.repo);
    return (
      <div>
        <div>{x}</div>
        <form onSubmit={this.loadMore}> 
            <button id="contributor_load" className="vcs-btn">Load more</button>
        </form>
      </div>

    )
  }
}
export default Contributors;