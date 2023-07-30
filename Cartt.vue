<template>
    <v-app>

        <Header></Header>
        <v-main>
    <v-row class="ma-16">
        <v-col cols="7" offset="1">
            <v-simple-table height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            price
          </th>
          <th class="text-left">
            quantity
          </th>
            <th class="text-left">
            subtotal
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in products"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.subtotal }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
        </v-col>
     
    </v-row>
</v-main>
        <Footer></Footer>
    </v-app>
</template>
<script>
import Header from "../components/Header.vue"
import Footer from "../components/footer.vue"
export default {
  name: "Detail",
 components:{Header,Footer},
  data: () => ({
    products: [
          {
            name: 'Frozen Yogurt',
            price: 159,
            quantity:'',
            subtotal:'',
          },
          {
            name: 'Frozen Yogurt',
            price: 159,
            quantity:'',
            subtotal:'',
          }, {
            name: 'Frozen Yogurt',
            price: 159,
            quantity:'',
            subtotal:'',
          },]
  }),}

</script>
<style></style>