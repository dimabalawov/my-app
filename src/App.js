import './App.css';
import { ClubInfo } from './Components/ClubInfo/ClubInfo';
import { ClubAchiev } from './Components/ClubAchiev/ClubAchiev';
import { ClubMembers } from './Components/ClubMembers/ClubMembers';
import { Header } from './Biography/Header/Header';
import { Body } from './Biography/Body/Body';


 function App() {
  return (
    <div className="App">
      <ClubInfo/>
      <ClubAchiev/>
      <ClubMembers/>
      
      <Header/>
      <Body/>
    </div>
  );
}

export default App;