<template>
  <div>
<!--    <VuetifyDatatable :posts="posts" />-->
<!--    <VirtalScrollWrapper />-->
<!--    <Pagination />-->
    <Sorting />
  </div>
</template>

<script>
// import VuetifyDatatable from "./components/VuetifyDatatable";
// import VirtalScrollWrapper from '@/components/virtual-scroll';
// import Pagination from '@/components/with-paging';
import Sorting from '@/components/with-sort';

export default {
  name: "App",

  components: {
    // VuetifyDatatable,
    // VirtalScrollWrapper,
    // Pagination,
    Sorting
  },

  data: () => ({
    posts: [
      {
        userId: 1,
        id: 1,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      },
      {
        userId: 1,
        id: 4,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      },
      {
        userId: 1,
        id: 5,
        title: "qui est esse",
      },
      {
        userId: 1,
        id: 6,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      },
      {
        userId: 1,
        id: 7,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      },
      {
        userId: 1,
        id: 8,
        title: "qui est esse",
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      },
      {
        userId: 1,
        id: 1,
        title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      }

    ],
  }),
};
</script>
