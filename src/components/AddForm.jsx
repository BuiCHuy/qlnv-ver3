import React from 'react';
import {useState} from "react";

function AddForm(props) {
    const [newname, setNewname] = React.useState('');
    const [newemail, setNewemail] = React.useState('');
    const [newphone, setNewphone] = React.useState('');
    const [newaddress, setNewaddress] = React.useState('');
    const [nalert,setNalert]=useState('');
    const [malert,setMalert]=useState('');
    const [palert,setPalert]=useState('');
    const [aalert,setAalert]=useState('');
    const cancel=()=>{
        props.setHide(true)
        setNewname('')
        setNewemail('')
        setNewaddress('')
        setNewphone('')
        setNalert('')
        setMalert('')
        setPalert('')
        setAalert('')
    }
    const namec =(e)=>{
        setNewname(e.target.value)
    }
    const mailc =(e)=>{
        setNewemail(e.target.value)
    }
    const addressc =(e)=>{
        setNewaddress(e.target.value)
    }
    const phonec =(e)=>{
        setNewphone(e.target.value)
    }
    const onadd = ()=>{
        if(newname===""||newemail===""||newphone===""||newaddress===""||isNaN(newphone)||!newphone.startsWith("0")||newphone.length!==10){
            if(newname===""){
                setNalert("Vui lòng nhập tên")
            }

            if(newemail===""){
                setMalert("Vui lòng nhập Email")
            }



            if(newaddress===""){
                setAalert("Vui lòng nhập địa chỉ")
            }

            if(newphone.length===10||isNaN(newphone)||!newphone.startsWith("0")){
                setPalert("Vui lòng nhập đúng số điện thoại")
            }
            else if(newphone.length!==10){
                setPalert("Vui lòng nhập đủ 10 chữ số")
            }
        }
        else {
            const newemp = {
                id:props.emp.length+1,
                name:newname,
                email:newemail,
                address:newaddress,
                phone:newphone,
            }
            props.addemp(newemp)
            cancel()
        }
    }
    return (
        <div style={props.hide ?
            {display:'none'}
            :
            {
                width:'510px',
                position:'absolute',
                top:'50%',
                left:'50%',
                transform: 'translate(-50%,-50%)',
                backgroundColor:'white',
                border:'1px solid black'
            }
        }>
            <div style={{display:'flex',justifyContent:'space-between',padding:'10px',borderBottom:'1px solid black'}}>
                <h1>Add Employee</h1>
                <button onClick={cancel} style={{margin:'auto 10px auto auto'}}>x</button>
            </div>
            <div className={'input'} style={{
                margin:'10px auto'
            }}>
                <div style={{display:'flex',flexDirection:'column',width:'80%',margin:'auto'}}>
                    Name
                    <input type="text" value={newname} onChange={namec} style={{}}/>
                    <p>{nalert}</p>
                </div>
                <div style={{display:'flex',flexDirection:'column',width:'80%',margin:'auto'}}>
                    Email
                    <input type="text" value={newemail} onChange={mailc}/>
                    <p>{malert}</p>
                </div>
                <div style={{display:'flex',flexDirection:'column',width:'80%',margin:'auto'}}>
                    Address
                    <textarea onChange={addressc} value={newaddress} name="" id="" cols="30" rows="5"></textarea>
                    <p>{aalert}</p>
                </div>
                <div style={{display:'flex',flexDirection:'column',width:'80%',margin:'auto'}}>
                    Phone
                    <input type="text" value={newphone} onChange={phonec}/>
                    <p>{palert}</p>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'end',gap:'10px',marginBottom:'30px'}}>
                <button onClick={cancel}>Cancel</button>
                <button onClick={onadd} style={{marginRight:'20px'}}>Add</button>
            </div>
        </div>
    );
}

export default AddForm;