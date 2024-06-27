import React from 'react';
import ETable from "./ETable";

function Main(props) {
    const showform = ()=>{
        props.setHide(false)
    }
    return (
        <div>
            <div
                style={{backgroundColor: 'darkblue', display: 'flex', justifyContent: 'space-between', color: 'white'}}>
                <h1>Quản lý nhân viên</h1>
                <div style={{display: 'flex', margin: 'auto 20px auto auto', gap: '10px 20px'}}>
                    <button style={{backgroundColor:'black',color:'white',padding:'10px 20px'}}>- Xóa</button>
                    <button style={{backgroundColor:'black',color:'white'}} onClick={showform}>+ Thêm nhân viên</button>
                </div>
            </div>
            <div>
                <ETable emp={props.emp}/>
            </div>
        </div>
    );
}

export default Main;