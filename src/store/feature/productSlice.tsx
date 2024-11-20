import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProduct } from "../../models/IProduct"

interface IProductState{
    productList: IProduct[],
    isProductListLoading: boolean,
    sepetListesi: IProduct[]
}
const initialProductState: IProductState = {
    productList: [], // ürün listesini temsil eder
    isProductListLoading: false, // ürün listesi yükleniyor mu?
    sepetListesi: []
}

export const fetchGetAllProducts = createAsyncThunk(
    'product/fetchGetAllProducts',
    async ()=>{
        return await fetch('https://dummyjson.com/products').then(res=> res.json()).then(data=>data)
     }
    )

const productSlice = createSlice({
    name: 'product',
    initialState: initialProductState,
    reducers: {
        addSepetList(state, action: PayloadAction<IProduct>){
            const list: IProduct[] = state.sepetListesi;
            list.push(action.payload);
            state.sepetListesi = list;
        }
    },
    extraReducers: (build)=>{
        build.addCase(fetchGetAllProducts.pending, (state)=>{
            state.isProductListLoading = true
        });
        build.addCase(fetchGetAllProducts.fulfilled, (state, action)=>{
            state.isProductListLoading = false;
            state.productList = action.payload.products;
        })
    }
})
export const {
    addSepetList
} = productSlice.actions;
export default productSlice.reducer;