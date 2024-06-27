import React from 'react';

function ETable(props) {
    return (
        <div >
            <table style={{
                width:'98%',
                padding:'20px',
                borderCollapse:'collapse',
                margin:'auto'
            }}>
                <thead>
                <tr>
                    <th><input type="checkbox"/></th>
                    <th>Họ và tên</th>
                    <th>Thư điện tử</th>
                    <th>Địa chỉ</th>
                    <th>Số điện thoại</th>
                    <th>Hành động</th>
                </tr>
                </thead>
                <tbody>
                {props.emp.map(employee=>(
                    <tr key={employee.id}>
                        <td><input type="checkbox"/></td>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.address}</td>
                        <td>{employee.phone}</td>
                        <td>
                            <button style={{background:'transparent',border:'none'}}><img src="pen.svg" alt=""/></button>
                            <button style={{background:'transparent',border:'none'}}><img src="trash.svg" alt=""/></button>
                        </td>
                    </tr>
                    )

                )}
                </tbody>

            </table>
        </div>
    );
}

export default ETable;