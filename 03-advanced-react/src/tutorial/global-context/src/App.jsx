import { useGobalContext  } from "./context"
function App() {
  const {user, setUser} = useGobalContext(); 
  console.log(setUser);
  return (
    <div className="App">
      <h1 className="App-header">App</h1>
      <p>{user.name}</p>
      <p>{user.breed}</p>

      </div>
  )
}
export default App
