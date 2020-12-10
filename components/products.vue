<template>
  <div class="d-flex-column" img-src= img-top id="card">
    <div class="d-flex-column px-2">
      <a>
        <img class="w-100 p-0 mb-2"  height="300" :src="`https://picsum.photos/600/300/?image=${item.id}`" alt="">
        <div class="text-right">fasdasdsadsad</div>
      </a>
    </div>
    <p>tttt</p>

    <!-- <div class="d-flex flex-column">
      <a class="text-right">{{item.title}}</a>
      <b-row>
        <b-col class="mt-auto">
          <div class="d-flex flex-column">
            <span>wewe</span>
            <span class="mt-auto">ewwe</span>
          </div>
        </b-col>
        <b-col class="text-right mt-auto">
          <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-basket3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
          </svg>
        </b-col>
      </b-row>
    </div> -->
  </div>  
</template>

<script>
export default {
  props: ['item'],
  methods: {
    calculatePrice(off, price){
      return (price - ((off / 100) * price))
    }
  },
}
</script>

<style>
  
  #card{
   background-color: #fff;
   border-radius: 0;
   border-color: #eeeeee75;
  }
  #card:hover{
    box-shadow: 2px 2px 6px #585858,-2px -2px 4px #585858;
  }
  #card img{
    height: 250px;
    padding: 0 1rem;
  }
</style>