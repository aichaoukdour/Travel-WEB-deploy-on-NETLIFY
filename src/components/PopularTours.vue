<template>
  <section class="popularTours">
    <h2 class="sectionTitle">POPULAR TOURS</h2>
    <p class="sectionSubtitle">There will be a small title here.</p>

    <!-- Tour Cards -->
    <div class="tourCards">
      <div
        v-for="(tour, index) in tours"
        :key="index"
        class="tourCard"
        @click="toggleTour(tour)"
      >
        <div v-if="selectedTour === tour" class="tourInfo">
          <h3 class="tourTitle">{{ tour.title }}</h3>
          <p class="tourDescription">{{ tour.description }}</p>
        </div>
        <img v-else :src="tour.image" :alt="tour.title" class="tourImage" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedTour: null,
      tours: [
        {
          title: "TOUR 1",
          description: "There will be a small description here.",
          image: require("@/assets/tr1.jpeg"),
        },
        {
          title: "TOUR 2",
          description: "There will be a small description here.",
          image: require("@/assets/sah.jpeg"),
        },
        {
          title: "TOUR 3",
          description: "There will be a small description here.",
          image: require("@/assets/chef.jpeg"),
        },
        {
          title: "TOUR 4",
          description: "There will be a small description here.",
          image: require("@/assets/fes.jpeg"),
        },
        {
          title: "TOUR 5",
          description: "There will be a small description here.",
          image: require("@/assets/tin.jpeg"),
        },
        {
          title: "TOUR 6",
          description: "There will be a small description here.",
          image: require("@/assets/ouz2.jpeg"),
        },
       
      ],
    };
  },
  methods: {
    toggleTour(tour) {
      this.selectedTour = this.selectedTour === tour ? null : tour;
    },
  },
};
</script>

<style scoped>
.popularTours {
  font-family: "Calibri", sans-serif;
  background-color: #000000;
  padding: 40px 0;
  text-align: center;
  color: white;
}

.sectionTitle {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.sectionSubtitle {
  color: #ffcc00;
  font-size: 1rem;
  margin-bottom: 70px;
}

.tourCards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 90%;
  margin-left: 5%;
  margin-bottom: 150px;
}

.tourCard {
  width: 170px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tourCard:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(164, 164, 164, 0.911);
}

.tourImage {
  width: 100%;
  height: 250px; /* Ajuste la hauteur selon tes besoins */
  display: block;
}

.tourInfo {
  padding: 20px;
  color: white;
  text-align: center;
}

.tourTitle {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.tourDescription {
  font-size: 1rem;
}
</style>
