export default {
    addCount(state,payload){
        payload.count++;
    },
    addToCart(state,payload){
        payload.count=1;
        payload.isCheck=true;
        state.cartList.push(payload)
    },
    changeCheck(state,payload){
        for(let item of state.cartList){
            if(item.iid==payload){
                item.isCheck=!item.isCheck
                break;
            }
        }
    },
    checkToFalse(state,payload){
        for(let i of state.cartList){
            i.isCheck=false
        }
    },
    checkToTrue(state,payload){
        for(let i of state.cartList){
            i.isCheck=true
        }
    }
    
}