import { request } from "./request";
export function getGoodsDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

//商品推荐
export function getRecommend(){
  return request({
    url:"/recommend"
  })
}

//基本信息
export class GetDetailBaseData{
    constructor(itemInfo,columns,shopInfo){
        this.title = itemInfo.title
        this.price = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discountDesc = itemInfo.discountDesc
        this.discountBgColor = itemInfo.discountBgColor
        this.columns = columns
        this.services = shopInfo.services
        this.desc = itemInfo.desc
        this.lowNowPrice = itemInfo.lowNowPrice
      }
}

//获取店铺信息
export class GetDetailShopInfo {
    constructor(shopInfo) {
      this.shopLogo = shopInfo.shopLogo
      this.name = shopInfo.name
      this.cSells = shopInfo.cSells
      this.cGoods = shopInfo.cGoods
      this.score = shopInfo.score
    }
  }

  //获取商品尺码参数
  export class GetItemParams{
    constructor(itemParams) {
        // 注: images可能没有值(某些商品有值, 某些没有值),有值只取第一张图片
        this.image = itemParams.info.images ? itemParams.info.images[0] : "";
        this.info = itemParams.info.set
        this.rule = itemParams.rule.tables
        this.productParameters=itemParams.info.key
        this.sizeParameters= itemParams.rule.key
      }
  }