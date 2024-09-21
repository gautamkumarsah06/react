import About from "./component/About";
import Home from "./component/Home"
import Nav from "./component/Nav"

function App() {
   return(
   <div>   
     <Home />
     <About />
     <Nav />
  </div>
)
  
}

export default App;

// const App=()=>{
//   let data = "data from the server";
//   let subject=["math","English","science"];
//   let profile={
//     name:"John Doe",
//     age:25,
//     email:"john@doe.com",
//   };
//   return(
//        <div>
//         <h1> {data} </h1>
//         <h2> {subject} </h2>
//         <h3> {profile.name} </h3>
//         <h4> {profile.age} </h4>
//         <h5> {profile.email} </h5>
//        </div>
//   )
// }
//  export default App;