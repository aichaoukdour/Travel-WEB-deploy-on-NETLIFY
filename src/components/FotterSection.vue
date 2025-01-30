<template>
  <section class="fotter-section">
    <div class="content">
      <div class="text-container">
        <h1>DISCOVER THE<br>WORLD IN <br>A NEW WAY</h1>

        <button class="watch-video">
          WATCH THE VIDEO
        </button>
        <p class="quote">
          "Attachment to things and comfort is the main obstacle to an interesting life. 
          People, as a rule, do not realize that at any time they can throw anything out of their lives. Anytime. Instantly."
        </p>
        <p class="author">© Ao</p>
      </div>

      <!-- Video Cards -->
      <div class="video-cards">
        <div class="video-card">
          <div class="thumbnail">
            <video src="@/assets/video1.mp4" controls></video>
          </div>
         
        </div>

        <div class="video-card">
          <div class="thumbnail">
            <video src="@/assets/video2.mp4" controls></video>
          </div>
          
        </div>
      </div>
    </div>

    <!-- Social Icons -->
    <div class="social-icons">
      <img src="@/assets/youtube.png" alt="YouTube" class="social-icon" />
      <img src="@/assets/instagram.png" alt="Instagram" class="social-icon" />
      <img src="@/assets/twitter.png" alt="Twitter" class="social-icon" />
      <img src="@/assets/facebook.png" alt="Facebook" class="social-icon" />
    </div>
  </section>
</template>

<script>
export default {
  name: "FotterSection",
};
</script>

<style scoped>
.fotter-section {
  background: 
    radial-gradient(circle at top left, rgba(0, 0, 0, 0.5), transparent 50%),
    radial-gradient(circle at top right, rgba(0, 0, 0, 0.5), transparent 50%),
    radial-gradient(circle at bottom left, rgba(0, 0, 0, 0.5), transparent 50%),
    radial-gradient(circle at bottom right, rgba(0, 0, 0, 0.5), transparent 50%),
    url('@/assets/back.png') center/cover no-repeat;
  color: white;
  text-align: left;
  padding: 80px 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}

.text-container {
  max-width: 600px;
}

h1 {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 70px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.watch-video {
  background: transparent;
  border: 2px solid #ffcc00;
  color: #ffcc00;
  padding: 12px 24px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
}

.watch-video:hover {
  background: #ffcc00;
  color: black;
}

.quote {
  font-style: italic;
  margin: 20px 0;
}

.author {
  font-size: 14px;
  opacity: 0.8;
}

/* Video Cards */
.video-cards {
  display: flex;
  gap: 20px;
  margin-top: 200px;
  justify-content: flex-start;
  align-items: flex-start;
}

.video-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  width: 300px;
  height: auto;
  text-align: center;
}

.thumbnail {
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
}

.thumbnail video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: 0.3s;
}

.thumbnail:hover video {
  opacity: 0.8;
}

.video-title {
  font-size: 16px;
  margin-top: 10px;
}

/* Social Icons */
.social-icons {
  display: flex;
  gap: 10px; /* Espacement entre les icônes */
  margin-top: 30px;
}

.social-icon {
  width: 30px;  /* Taille réduite */
  height: 30px; /* Taille réduite */
  transition: transform 0.3s ease-in-out;
}

.social-icon:hover {
  transform: scale(1.1); /* Effet de zoom au survol */
}

</style>
