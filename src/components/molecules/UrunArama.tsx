import React from 'react'

function UrunArama() {
  return (
    <div className="col p-3 rounded-3" style={{boxShadow: '0px 0px 1px 1px rgba(0,0,0,0.46)'}}>
      <label className='form-label'>
        Ürün Arama
      </label>
      <div className="row">
        <div className="col-10">
        <input type='text' className='form-control'/>
        </div>
        <div className="col-2 d-grid">
        <input type="button" className='btn btn-warning' value='ara' />
          </div>
      </div>
      
      
    </div>
  )
}

export default UrunArama