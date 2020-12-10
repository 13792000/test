import Vuex from 'vuex'

const createStore = () => {
  return  new Vuex.Store({
    state: {
      items : [
        { id: 1, title: ' میهن شیر کم چرب', price: 8200, imgUrl: '~/img/mihan.jpg', brandId: 1, off: 15 },
        { id: 2, title: ' میهن شیر کم چرب', price: 3900, imgUrl: '~/img/1.jpg', brandId: 1, off: 4 },
        { id: 3, title: 'پنیر سفید پگاه', price: 9000, imgUrl: '~/img/x.jpg', brandId: 4, off: 6 },
        { id: 4, title: ' ماست موسیرپرچرب صباح 100 گرمی', price: 4300, imgUrl: '~/img/2.jpg', brandId: 3, off: 23 },
        { id: 5, title: ' کره گیاهی میهن 100 گرمی', price: 7500, imgUrl: '~/img/6.jpg', brandId: 1, off: 12 },
        { id: 6, title: ' شیر بطری پرچرب میهن 235 سی سی ', price: 4000, imgUrl: '~/img/3.jpg', brandId: 1, off: 67 },
        { id: 7, title: ' شیر پرچرب ساده میهن 200 سی سی ', price: 7600, imgUrl: '~/img/4.jpg', brandId: 1, off: 2 },
        { id: 8, title: ' شیر کم چرب  پگاه 200 سی سی', price: 3200, imgUrl: '~/img/1.jpg', brandId: 4, off: 0 },
        { id: 9, title: ' شیر بطری  کم چرب دنت 235 سی سی', price: 4500, imgUrl: '~/img/5.jpg', brandId: 2, off: 4 },
        { id: 10, title: ' شیر طعم دار توت فرنگی دنت 125 میلی گرمی', price: 9800, imgUrl: '~/img/1.jpg', brandId: 2, off: 34 },
        { id: 17, title: ' شیر توت فرنگی استریل پگاه 200 سی سی ', price: 4900, imgUrl: '~/img/1.jpg', brandId: 4, off: 23 },
        { id: 11, title: ' شیر طعم دار شکلاتی دنت 125 میلی گرمی', price: 5800, imgUrl: '~/img/5.jpg', brandId: 2, off: 20 },
        { id: 13, title: ' شیر عسل استریل پگاه 200 سی سی', price: 3400, imgUrl: '~/img/x.jpg', brandId: 4, off: 44 },
        { id: 14, title: ' شیر کاکائو استریل پگاه 200 سی سی', price: 7050, imgUrl: '~/img/4.jpg', brandId: 4, off: 12 },
        { id: 15, title: ' شیر قهوه میهن 200 سی سی', price: 8200, imgUrl: '~/img/6.jpg', brandId: 1, off: 8 },
        { id: 16, title: ' پنیر سفیدصباح 100 گرمی ', price: 9000, imgUrl: '~/img/3.jpg', brandId: 3, off: 34 },
        { id: 12, title: ' شیر موز دنت 125 میلی گرمی', price: 7650, imgUrl: '~/img/1.jpg', brandId: 2, off: 15 },
        { id: 18, title: ' شیر کاکائو میهن 200 سی سی ', price: 3500, imgUrl: '~/img/5.jpg', brandId: 1, off: 12 },
      ]
    },
    getters: {
      items(state){
        return state.items
      }
    }
  })
}

export default createStore