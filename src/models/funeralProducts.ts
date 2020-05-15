import { products } from "@/models/funeralproductmodel";

const DataProvider = {
  props: ["type"],
  data: () => ({
    products: products,
    loaded: false,
  }),
  render() {
    return this.$scopedSlots.default({
      loading: this.loaded,
      products: this.products,
    });
  },
};

export default DataProvider;

//export default { funeralProducts };
