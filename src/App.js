import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import {useState} from "react";
import data from './components/data.json'
import Footer from "./components/Footer";
import AddForm from "./components/AddForm";
function App() {
    const [emp, setEmp] = useState(data);
    const [hide, setHide] = useState(true);
    const addemp = (employee)=>{
        setEmp([...emp,employee])
    }
  return (
    <div className="App">
      <Header/>
      <Main emp={emp} hide={hide} setHide={setHide} />
        <Footer emp={emp}/>
        <AddForm emp={emp} hide={hide} setHide={setHide} addemp={addemp}/>
    </div>
  );
}

export default App;
