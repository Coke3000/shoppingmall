export default {
    addCart(context,payload){
        return new Promise((resolve,reject)=>{
            let oldPayLoad=context.state.cartList.find(item => item.iid===payload.iid)
            if(oldPayLoad){
                context.commit("addCount",oldPayLoad)
                resolve("当前商品数量+1")
            }else{
                context.commit("addToCart",payload)
                resolve("添加商品成功!")
            }
        })
    }
}