import React from 'react'
import { IProduct } from '../../models/IProduct'
import { addSepetList } from '../../store/feature/productSlice'
import { useDispatch } from 'react-redux'
import { ProductDispatch } from '../../store'
interface IUrunCardProps{
    urun: IProduct
}
function UrunCard(props: IUrunCardProps) {
    const dispatch = useDispatch<ProductDispatch>();
    const urun = props.urun
  return (
    <div className="card" style={{width: '18rem'}}>
        <div className='p-5'>
            <img src={urun.thumbnail} className="card-img-top" alt="burda resim olcaktı salında"/>
        </div>
     
        <div className="card-body">
            <h5 className="card-title">{urun.category}</h5>
            <p className="card-text">{urun.title}</p>
            <p className="card-text">{urun.price}</p>
            <div className="d-grid">
                <input className='btn btn-outline-info' type="button" value="sepete ekle"  onClick={()=>dispatch(addSepetList(urun))}/>
             </div>
         </div>
    </div>
  )
}

export default UrunCard