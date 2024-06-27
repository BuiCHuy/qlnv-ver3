import React from 'react';

function Footer(props) {
    return (
        <div style={{display:'flex',justifyContent:'space-between',margin:'40px'}}>
            <div>
                Hiển thị {props.emp.length}/25 bản ghi
            </div>
            <div className={'pag'} style={{display: 'inline-block'}}>
                <a href="#">Trước</a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">Sau</a>
            </div>
        </div>
    );
}

export default Footer;