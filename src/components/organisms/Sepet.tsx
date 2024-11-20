import React from 'react'
import UrunItem from '../molecules/UrunItem'
import { IProduct } from '../../models/IProduct'
import { useAppSelector } from '../../store'
interface ISepetProps{
  sepetList: IProduct[]
}
function Sepet() {
  const sepetList: IProduct[] = useAppSelector(state=> state.product.sepetListesi)
  return (
    <div className='row p-3 rounded-3 ms-2' style={{boxShadow: '0px 0px 1px 1px rgba(0,0,0,0.46)'}}>
      <div className="col">
        <div className="row">
          <div className="col">
            <label className='form-label'>Sepet</label>
          </div>
          <div className="col text-end">
            <label className='form-label'>5 adet ürün</label>
          </div>
        </div>
        <div className="row">
            {
              sepetList.map((urun, index)=>{
                return <UrunItem key={index} image={urun.thumbnail} title={urun.title} price={urun.price}/>
              })
            }
            <hr/>
            <label className='form-label'>Toplam: 312₺</label>
            <label className='form-label'>Kdv: 323₺</label>
            <label className='form-label'>G. Toplam: 513₺</label>
        </div>
        <div className="row d-grid">
          <input type="button" value="satın al" className='btn btn-success' />
        </div>
      </div>
    </div>
  )
}

export default Sepet