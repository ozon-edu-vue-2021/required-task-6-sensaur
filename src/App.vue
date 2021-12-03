<template>
  <div>
<!--    <Base />-->
    <Sorting />
    <Pagination />
    <VirtalScrollWrapper />
  </div>
</template>

<script>
// import Base from "./components/base";
import VirtalScrollWrapper from '@/components/virtual-scroll';
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
