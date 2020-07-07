<template>

  <div class="page">

    <h2>水果商店<br/></h2>

    <table>

      <thead>

        <tr class="title1">

          <td>种类</td>

          <td>剩余数量</td>

          <td>单价</td>

          <td>购买数量</td>

        </tr>

      </thead>

      <tbody>

        <tr v-for="(item,index) in fruitList" v-bind:key="item.name">

         

          <td>{{item.name}}</td>

          <td>{{item.number}}</td>

          <td>{{item.price}}</td>

          <td>

            <button v-bind:disabled="item.buynum == 0" @click="decrease(index)">-</button>

            {{item.buynum}}

            <button v-bind:disabled="item.number == 0" @click="increase(index)">+</button>

            

          </td>

        </tr>

      </tbody>

    </table>

    <h3>合计：{{sum}}元
    

    <button  @click="routerTo">结算</button>
    <button  @click="routerTo1">会员支付</button>

    </h3>

  </div>

</template>



<script>

export default {

  data() {

    return {

      fruitList: [

        {

          name: "香蕉",

          number: 10,

          price: 1,

          buynum: 0

        },

        {

          name: "苹果",

          number: 10,

          price: 3,

          buynum: 0

        },

        {

          name: "橘子",

          number: 10,

          price: 2,

          buynum: 0

        },

        {

          name: "芒果",

          number: 10,

          price: 4,

          buynum: 0

        }

      ],

      sum:0

    };

  },

  computed: {},

  methods: {

    routerTo() {

      this.$router.push({ path: "/purchase", query: { total: this.sum } });

    },
    routerTo1() {

      this.$router.push({ path: "/apple", query: { total: this.sum } });

    },


    increase: function(index) {

      var buy_num = this.fruitList[index].buynum;

      this.fruitList[index].buynum++;

      this.fruitList[index].number--;

      this.sum +=  this.fruitList[index].price;

    },

    decrease: function(index) {

      var buy_num = this.fruitList[index].buynum;

      if (buy_num < 1) return;

      this.fruitList[index].buynum--;

      this.fruitList[index].number++;

      this.sum -= this.fruitList[index].price;

    }

  }

};

</script>



<style>

table {

    position: relative;

    left: 25%;

    width:50%;

  }

tr.title1{

  font-size: 120%;

  text-align:center;

  vertical-align:bottom;

  }

td{

  font-size: 100%;

  text-align:center;

  vertical-align:bottom;

  }



th {

    position: relative;

    height:100px;

  }

h3{

    position: relative;

    left: 15%;

    

}



</style>