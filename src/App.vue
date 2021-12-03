<template>
  <div>
<!--    <Base />-->
    <Sorting />
    <VirtalScrollWrapper />
    <Pagination />
  </div>
</template>

<script>
// import Base from "./components/base";
import VirtalScrollWrapper from '../src/components/virtual-scroll';
import Pagination from '@/components/with-paging';
import Sorting from '@/components/with-sort';

export default {
  name: "App",

  components: {
    // Base,
    VirtalScrollWrapper,
    Pagination,
    Sorting
  },

};
</script>
