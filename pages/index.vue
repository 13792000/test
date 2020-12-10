<template>
  <b-container class="mt-4">
    <b-row class="d-flex justify-content-around">
      <b-col md="8">
        <b-card>
        <b-card-body>
          <b-row id="items" > 
            <b-col md="6" lg="4" class="product col-xs-12 p-0" v-for="item in items" :key="item.id">
              <products :item="item" />
            </b-col>
          </b-row>
        </b-card-body>
        </b-card>
      </b-col>
      <b-col md="4" id="filter">
      te
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import products from '@/components/products'
export default {
  computed: {
    items() { 
      return this.$store.getters.items
    }
  },
  components: {
    products
  },
}
</script>

<style scoped>
  
  #filter{
    background-color: #eee;
  }
</style>