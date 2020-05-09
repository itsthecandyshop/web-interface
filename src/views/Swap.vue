<template>
  <div>
    <form>
      <div>
        <label for="input">Input</label>
        <input type="number" name="input" />
        <select>
          <option v-for="curr in currencyList" :key="curr.id" :value="curr.id">
            {{ curr.symbol }}
          </option>
        </select>
      </div>
      <div>
        <label for="output">Output</label>
        <input type="number" name="output" />
        <select>
          <option v-for="curr in currencyList" :key="curr.id" :value="curr.id">
            {{ curr.symbol }}
          </option>
        </select>
      </div>
      <div>
        <button type="submit" @click.prevent="handleExchange">
          Exchange
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  name: "Swap"
})
export default class HelloWorld extends Vue {
  currencyList = [
    {
      id: "1",
      name: "Ether",
      symbol: "ETH"
    },
    {
      id: "2",
      name: "Dai Stablecoin",
      symbol: "DAI"
    }
  ];

  handleExchange() {}
}
</script>
