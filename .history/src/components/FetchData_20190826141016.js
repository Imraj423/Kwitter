import React, {Component} from 'react';

class Appy extends Component {
        
            state = {
            items:[],
            isLoaded: false,
        }



componentDidMount() {
    fetch('https://kwitter-api.herokuapp.com/users')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded:true,
                items: json,
            })
        });


}
render() {

    var { isLoaded, items} = this.state;
    console.log(this.state)
    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    else {

    }
    return (
        <div className="App">
            
                {items.map(item => (
                        <li> key={item.id}
                            UserName: {item.userName} | DisplayName: {item.displayName}
                        
                   </li> ))};
                
            
            </div>
    );
}

}

export default Appy;