import axios from "axios";
import React from "react"

export default function NpmListUsers({renderNpmListUsers}){
    console.log("NpmListUsers:",renderNpmListUsers);
    let npmElementUser = renderNpmListUsers.map((npmUser,index)=>{
        return(
            <tr>
            <th>{npmUser.NpmMasv}</th>
            <th>{npmUser.NpmHoSv}</th>
            <th>{npmUser.NpmNgaySinh}</th>
            <th>{npmUser.NpmNoiSinh}</th>
            <th>{npmUser.NpmMaKH}</th>
            <th>{npmUser.NPMHocBong}</th>
            <th>{npmUser.NpmDiemTrungBinh}</th>
            <th>{npmUser.id}</th>
            <th>
                <button className="btn btn-danger" onClick={npmHandleDelete} > Delete </button>
            </th>
    </tr>
        )


    })

    const npmHandleDelete = async (param)=>{
        if(window.confirm('Bạn có muốn xóa thật không?')){
            const npmRes = await axios.delete("npmUsers",param.id);
        }
        onNpmDelete();
    }

    return (
        <div className="row">
                 <table className='table table-borderd'>
                  <thead>
                      <tr>
                              <th>NpmMasv</th>
                              <th>NpmHoSV</th>
                              <th>NpmPhai</th>
                              <th>NpmNgaySinh</th>
                              <th>NpmNoiSinh</th>
                              <th>NpmMaKH</th>
                              <th>NPMHocBong</th>
                              <th>NpmDiemTrungBinh</th>
                              <th>id</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr></tr>
                      <tr></tr>
                      <tr></tr>
                      <tr></tr>
                      <tr></tr>
                      <tr></tr>
                      <tr></tr>
                      <tr></tr>
                      <tr></tr>
                  </tbody>
          </table>
  
  
        </div>
    )
}