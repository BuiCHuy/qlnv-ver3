import React from 'react';

function Header(props) {
    return (
        <div style={{padding:'10px',marginBottom:'50px',display:'flex',justifyContent:'space-between',boxShadow:'0 10px 5px rgba(0,0,0,0.3'}}>
            <div className ={'h-left'} style ={{display:'flex',gap:'20px',}}>
                <h1><a href="">TLU</a></h1>
                <a href=""> TRANG CHỦ</a>
                <a href="">QUẢN LÝ NHÂN VIÊN</a>
            </div>
            <div style={{display:'flex',gap:'10px',margin:'auto 20px auto auto'}}>
                <input type="text" placeholder={'Nhập nội dung tìm kiếm'}/>
                <button>Tìm</button>
            </div>


        </div>
    );
}

export default Header;