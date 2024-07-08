import React from "react";

export default function NpmFromAddOrEdit(onNpmClose){

const npmHandleClose = ()=>{
    onNpmClose(false)
}
    return(
      
        <div className="">
        <from>
        <div class="input-group mb-3">
        <span class="input-group-text" id="NpmMasv">NpmMasv</span>
         <input type="text" class="form-control"
            name='NpmMasv' value={''}
          placeholder="iNpmMasv" aria-label="NpmMasv" aria-describedby="NpmMasv"/>
        </div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="NpmHoSV">NpmHoSV</span>
         <input type="text" class="form-control"
            name='NpmHoSV' value={''}
          placeholder="NpmHoSV" aria-label="NpmHoSV" aria-describedby="NpmHoSV"/>
        </div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="NpmTenSV">NpmTenSV</span>
         <input type="text" class="form-control"
            name='NpmTenSV' value={''}
          placeholder="NpmTenSV" aria-label="NpmTenSV" aria-describedby="NpmTenSV"/>
        </div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="NpmPhai">NpmPhai</span>
         <input type="text" class="form-control"
            name='NpmPhai' value={''}
          placeholder="NpmPhai" aria-label="NpmPhai" aria-describedby="NpmPhai"/>
        </div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="NpmNgaySinh">NpmNgaySinh</span>
         <input type="text" class="form-control"
            name='NpmNgaySinh' value={''}
          placeholder="NpmNgaySinh" aria-label="NpmNgaySinh" aria-describedby="NpmNgaySinh"/>
        </div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="NpmNoiSinh">NpmNoiSinh</span>
         <input type="text" class="form-control"
            name='NpmNoiSinh' value={''}
          placeholder="NpmNoiSinh" aria-label="NpmNoiSinh" aria-describedby="NpmNoiSinh"/>
        </div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="NpmMaKH">NpmMaKH</span>
         <input type="text" class="form-control"
            name='NpmMaKH' value={''}
          placeholder="NpmMaKH" aria-label="NpmMaKH" aria-describedby="NpmMaKH"/>
        </div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="NPMHocBong">NPMHocBong</span>
         <input type="text" class="form-control"
            name='NPMHocBong' value={''}
          placeholder="NPMHocBong" aria-label="NPMHocBong" aria-describedby="NPMHocBong"/>
        </div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="NpmDiemTrungBinh">NpmDiemTrungBinh</span>
         <input type="text" class="form-control"
            name='NpmDiemTrungBinh' value={''}
          placeholder="NpmDiemTrungBinh" aria-label="NpmDiemTrungBinh" aria-describedby="NpmDiemTrungBinh"/>
        </div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="id">id</span>
         <input type="text" class="form-control"
            name='id' value={''}
          placeholder="id" aria-label="id" aria-describedby="id"/>
        </div>
        <button className="btn btn-primary" name="btnNpmSave"> Ghi Lại</button>
        <button className="btn btn-danger" onClick={npmHandleClose}>Đóng</button>
        </from>
        </div>
        
    )
}