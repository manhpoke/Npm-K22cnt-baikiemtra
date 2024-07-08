import logo from './logo.svg';
import './App.css';
import NpmListUsers from './components/NpmListUsers';
import axios from './api/npmApi'
import { useEffect, useState } from 'react';
import NpmFromAddOrEdit from './components/NpmFormAddOrEdit';
function NpmApp() {
const [npmListUsers,setNpmListUsers] =useState ([]);

const npmGetAllUsers = async ()=>{
  const  npmResponse = await axios.get("npmUsers");
  console.log("Api Data:",npmResponse.data);
  setNpmListUsers(npmResponse.data)
}

useEffect (()=>{
  npmGetAllUsers
  console.log("State Data:",NpmListUsers);
})

const[npmAddOrEdit, setNpmAddOrEdit] = useState(false);
const npmInitUser ={
  NpmMasv: "2210900040",
    NpmHoSV: "Nguyễn",
    NpmTenSV: "Mạnh",
    NpmPhai: "Nam",
    NpmNgaySinh: "16082004",
    NpmNoiSinh: "Hà Nội",
    NpmMaKH:" 16",
    NPMHocBong: "NPMHocBong 1",
    NpmDiemTrungBinh: "NpmDiemTrungBinh 1",
    id: "1"
}
const[npmUser, setNpmUser] = useState(npmInitUser)
 const npmHandleAddNew =  ()=>{
      setNpmAddOrEdit(true)
 }

 const npmHandleClose=(param)=>{
  setNpmAddOrEdit(param);
 }
  let npmElementFrom = npmAddOrEdit===true?
      <NpmFromAddOrEdit renderUsers={npmUser}
                          onNpmClose={npmHandleClose}/>:"";
  return (
    <div className="container border my-3">
     <h1>Làm việc với MockApi</h1>
     <NpmListUsers renderNpmListUsers={npmListUsers} onNpmDelete={npmHandleDetele}/>
     <button className='btn btn-primary' name='btnNpmThemMoi' onClick={npmHandleAddNew}>Thêm mới</button>
     <hr/>
     {npmElementFrom}

    </div>
  );
}

export default NpmApp;