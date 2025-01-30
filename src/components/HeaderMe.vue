<template>
  <header class="header">
    <h1 class="logo">
      Air
      <img src="@/assets/icon.png" alt="Plane Icon" class="logo-icon" />
    </h1>
    <nav class="navbar">
      <span class="hamburger-menu" @click="toggleMenu">&#9776;</span>
      <ul :class="['nav-links', { active: isMenuOpen }]">
        <li><router-link to="/homeSection" style="color: #ffffff;">Main</router-link></li>
        <li><router-link to="/about" style="color: #ffffff;">About Us</router-link></li>
        <li><router-link to="/popularTours" style="color: #ffffff;">Tours</router-link></li>
 <li><router-link to="/gallery" style="color: #ffffff;">Gallery</router-link></li>
        <li><router-link to="/reviews" style="color: #ffffff;">Reviews</router-link></li>
        <li><router-link to="/contact" class="contact-button-link" style="color: #000;">Contacts</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderMe",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>



<style scoped>
/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Calibri', sans-serif; /* Set Calibri as the default font */
}

/* Header Styling */
/* Header Styling */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: none; /* Removed background */
  border-bottom: 1px solid #ffffff98; /* Added underline with white color */
}


/* Logo Styling */
.logo {
  font-size: 28px;
  font-weight: bold;
  color: #ffcc00;
  display: flex;
  align-items: center;
}

.logo-icon {
  width: 30px; /* Adjust size of the plane icon */
  height: auto;

  margin-right: 10px; /* Space between icon and text */
}

/* Navbar Styling */
.navbar .nav-links {
  list-style: none;
  display: flex;
  gap: 25px;
}

.navbar .nav-links a {
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

.navbar .nav-links a:hover {
  color: inherit; /* Removed hover color */
}

/* Mobile Navigation */
@media (max-width: 768px) {
  .navbar .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 0;
    background: rgba(0, 0, 0, 0.9); /* Kept for mobile menu */
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }

  .navbar .nav-links.active {
    display: flex;
  }

  .hamburger-menu {
    display: block;
    font-size: 24px;
    cursor: pointer;
    color: #fff; /* Keep white color for hamburger menu */
  }
}

/* Hide Hamburger Menu by Default */
.hamburger-menu {
  display: none;
}
/* Navbar Styling */
.navbar .nav-links {
  list-style: none;
  display: flex;
  gap: 25px;
  align-items: center; /* Ensure all links are vertically centered */
}

.navbar .nav-links a {
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
  padding: 10px 0; /* Add vertical padding to align links better */
  line-height: 1; /* Ensure consistent line spacing */
  display: inline-flex; /* Align content within the link */
  justify-content: center;
  align-items: center;
}

.contact-button-link {
  display: inline-flex; /* Ensure alignment with other links */
  justify-content: center;
  align-items: center;
  padding: 10px 20px; /* Adjust the padding for better control over the button size */
  width: 150%; /* Let the width be based on content */
  margin-left: auto; /* Push Contacts button to the far right */
  background: linear-gradient(45deg, #ffffff, #dae0f3); /* Gradient background */
  color: #fff;
  font-size: 16px; /* Set a readable font size */
  font-weight: bold;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Initial shadow */
}


/* Effet au survol du bouton */
.contact-button-link:hover {
  transform: translateY(-3px); /* Légère élévation */
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4); /* Accentuation de l'ombre */
  background: linear-gradient(45deg, #ffffff, #9ba3ed); /* Inversion du dégradé */
}

/* Effet de focus pour une meilleure accessibilité */
.contact-button-link:focus {
  outline: none;
  box-shadow: 0 0 5px 2px rgba(255, 126, 95, 0.7); /* Halo autour du bouton */
}

/* Texte et contenu du bouton */
.contact-button-link span {
  position: relative;
  z-index: 2;
}

/* Suppression des effets visuels sous-jacents */
.contact-button-link::before {
  display: none; /* Pas nécessaire pour ce design */
}

</style>
