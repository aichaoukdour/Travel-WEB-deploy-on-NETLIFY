<template>
  <header class="heroSection">
    <div class="imageContainer">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="image"
        :style="{ backgroundImage: `url(${image})`, opacity: currentImageIndex === index ? 1 : 0 }"
      ></div>
    </div>

    <!-- Numéros de navigation -->
    <div class="numberNav">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="numberItem"
        :class="{ active: currentImageIndex === index }"
        @click="changeImage(index)"
      >
        {{ String(index + 1).padStart(2, '0') }}
      </div>
    </div>

    <h1 class="heroTitle">
      <span class="travel">TRAVEL<i class="time">TIME</i></span>
    </h1>

    <p class="heroSubtitle">
      <span>Don't let the loud noise scare you.</span><br />
      <span>the rhythms of dance amuse you.</span>
    </p>

    <div class="imageFooter">
      <div class="footerContent">
        <img src="@/assets/co.png" alt="GPS Icon" class="icon" />
        <p>There will be a small title here.<br />A couple of sentences of text.</p>
      </div>
      <div class="footerContent">
        <img src="@/assets/co1.png" alt="Extra Icon" class="icon" />
        <p>Here is another paragraph.<br />With some additional text.</p>
      </div>
      <a href="#">MORE DETAILED →</a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require("@/assets/tra1.png"), // Première image
        require("@/assets/tra2.jpg"), // Deuxième image
        require("@/assets/tra3.jpg"), // Troisième image
        require("@/assets/tra4.jpg"), // Quatrième image
        require("@/assets/tra5.jpg"), // Cinquième image
      ],
      currentImageIndex: 0,
    };
  },
  mounted() {
    this.startImageSlideshow();
  },
  methods: {
    startImageSlideshow() {
      setInterval(() => {
        this.currentImageIndex =
          (this.currentImageIndex + 1) % this.images.length;
      }, 5000);
    },
    changeImage(index) {
      this.currentImageIndex = index;
    },
  },
};
</script>

<style scoped>
/* Section principale */
.heroSection {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  color: white;
  overflow: hidden;
}

/* Images */
.imageContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 1s ease-in-out;
}

.image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at top left,
      rgba(0, 0, 0, 0.5),
      transparent 50%
    ),
    radial-gradient(
      circle at top right,
      rgba(0, 0, 0, 0.5),
      transparent 50%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(0, 0, 0, 0.5),
      transparent 50%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(0, 0, 0, 0.5),
      transparent 50%
    );
  z-index: 1;
  pointer-events: none;
}

.image::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.96), transparent);
  pointer-events: none;
  z-index: 2;
}

.heroSection {
  position: relative;
  z-index: 3;
  color: white;
  text-align: center;
  z-index: 4;
}

.numberNav {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.numberItem {
  margin-left: -50%;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
  font-family: "Calibri", sans-serif;
}

.numberItem.active {
  color: white;
  font-size: 2rem;
  font-weight: bold;
  transform: translateX(10px);
}

.heroTitle {
  font-size: 4rem;
  font-weight: bold;
  margin-left: 10%;
  text-transform: uppercase;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  font-family: "Arial", sans-serif;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.travel {
  font-size: 3.5rem;
}

.time {
  font-size: 4.5rem;
  color: #ffcc00;
}

.heroSubtitle span {
  display: block;
  margin-top: -20px;
}

.heroSubtitle {
  max-width: 600px;
  color: #a4a3a3;
  margin: 200px 20% 5% 10%;
  margin-left: -30.5%;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
  font-family: "Calibri", sans-serif;
  z-index: 5;
  text-align: center;
}

@media (max-width: 768px) {
  .heroTitle {
    font-size: 2.5rem;
  }

  .heroSubtitle {
    font-size: 10px;
  }

  .numberItem {
    font-size: 1rem;
  }

  .numberItem.active {
    font-size: 1.5rem;
  }
}

.imageFooter {
  position: absolute;
  bottom: 20px; /* Adjust position as needed */
  left: 10%;
  margin-left: 10%;
  transform: translateX(-50%);
  color: rgb(223, 222, 222);
  text-align: left;
  z-index: 6; /* Ensure it's above the images */
}

.imageFooter .icon {
  font-size: 3rem;
  margin-left: -20%;
  margin-bottom: -20%;
  font-family: "Calibri", sans-serif; /* Set Calibri for subtitle */
}

.imageFooter p {
  font-size: 11px;
  margin: 5px 0;
  font-family: "Calibri", sans-serif; /* Set Calibri for subtitle */
  
}

.imageFooter a {
  font-size: 0.5rem;
  color: #ab8a06; /* Highlighted link color */
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: "Calibri", sans-serif; /* Set Calibri for subtitle */
}


  
</style>
