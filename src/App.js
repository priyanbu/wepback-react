import React from 'react';

import MyDramaFav from './ben.png';
import UserList from './components/User';

class App extends React.Component{

constructor(props){
super(props);

this.state = {

    employee: [
        {name:'Suresh',age:28,role:'UI developer'},
        {name:'Priyanka',age:27,role:'Frontend developer'},
        {name:'Vignesh',age:28,}
    ]

}
}

render(){

    return <div>
<h3>hi this is class component</h3>
<p>{this.props.name}</p>
<img src={MyDramaFav} title="dd" alt="sss" />
<UserList employeeObj={this.state.employee} />
    </div>



}

}


export default App;