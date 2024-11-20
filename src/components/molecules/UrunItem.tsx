import React from 'react'
interface UrunItem{
    image: string,
    title: string,
    price: number
}
function UrunItem(props: UrunItem) {
    const {image, title, price} = props
  return (
    <div className="row m-2 border p-2 rounded-3" style={{width: '95%'}}>
        <div className="col-2">
            <img src={image} alt="picsum" style={{width: '40px', height: '40px', borderRadius: '40px'}} />
        </div>
        <div className="col-7 align-content-center">
            <label className='form-label'>
                {title}
            </label>
        </div>
        <div className="col-3 align-content-center">
            <label className='form-label'>{price}₺</label>
        </div>
    </div>
  )
}

export default UrunItem