<template>
  <div>
    <HeaderMe />
    <HeroSection />
    <PopularTours />
    <FotterSection/>
  </div>
</template>

<script>
import HeaderMe from './components/HeaderMe.vue';
import HeroSection from './components/HeroSection.vue';
import PopularTours from './components/PopularTours.vue';
import FotterSection from "./components/FotterSection.vue";


export default {
  components: {
    HeaderMe,
    HeroSection,
    PopularTours,
    FotterSection,
   
  },
};
</script>
