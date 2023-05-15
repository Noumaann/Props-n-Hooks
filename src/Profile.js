import  React from'react'

// function Profile(props){
//     const red=()=>{
//         alert("red rcb")
//     }

//     return(
//     <div>
//         <h1 onClick={red}>{props.text.name}</h1>
//         <h1 onClick={red}>{props.data}</h1>
//     </div>
//     )
// }
// export default Profile;



//class components and props

class Profile extends React.Component
{
    render(){
        return(
            <div>
                <h1>{this.props.data}</h1>
                <h1>{this.props.text.name}</h1>
            </div>
        )

    }
}
export default Profile