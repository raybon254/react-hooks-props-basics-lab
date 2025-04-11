import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";



function App() {
  return (
    <div>
      console.log(user.links);
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About links={user.links} bio={user.bio}/>
    </div>
  );
}

export default App;
