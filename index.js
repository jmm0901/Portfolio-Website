const defaultConfig = {
  name: "Your Name",
  tagline: "Data Science Intern",
  intro_text:
    "Passionate about transforming data into actionable insights. Experienced in machine learning, statistical analysis, and data visualization.",
  about_description:
    "I'm a data science enthusiast with a strong foundation in statistical analysis, machine learning, and data visualization. Currently pursuing opportunities to apply my skills in real-world scenarios and contribute to data-driven decision making.",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "City, Country",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  footer_text: "© 2024 Your Name. All rights reserved.",
  background_color: "#667eea",
  primary_color: "#764ba2",
};

async function onConfigChange(config) {
  document.getElementById("nameDisplay").textContent =
    config.name || defaultConfig.name;
  document.getElementById("taglineDisplay").textContent =
    config.tagline || defaultConfig.tagline;
  document.getElementById("introDisplay").textContent =
    config.intro_text || defaultConfig.intro_text;
  document.getElementById("aboutDisplay").textContent =
    config.about_description || defaultConfig.about_description;
  document.getElementById("emailDisplay").textContent =
    config.email || defaultConfig.email;
  document.getElementById("phoneDisplay").textContent =
    config.phone || defaultConfig.phone;
  document.getElementById("locationDisplay").textContent =
    config.location || defaultConfig.location;
  document.getElementById("footerDisplay").textContent =
    config.footer_text || defaultConfig.footer_text;

  const linkedinLink = document.getElementById("linkedinLink");
  linkedinLink.href = config.linkedin || defaultConfig.linkedin;

  const githubLink = document.getElementById("githubLink");
  githubLink.href = config.github || defaultConfig.github;

  // Apply colors
  const bgColor = config.background_color || defaultConfig.background_color;
  const primaryColor = config.primary_color || defaultConfig.primary_color;

  document.querySelector(
    "#home"
  ).style.background = `linear-gradient(135deg, ${bgColor} 0%, ${primaryColor} 100%)`;
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
          config.background_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ background_color: value });
          }
        },
      },
      {
        get: () => config.primary_color || defaultConfig.primary_color,
        set: (value) => {
          config.primary_color = value;
          if (window.elementSdk) {
            window.elementSdk.setConfig({ primary_color: value });
          }
        },
      },
    ],
    borderables: [],
    fontEditable: undefined,
    fontSizeable: undefined,
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ["name", config.name || defaultConfig.name],
    ["tagline", config.tagline || defaultConfig.tagline],
    ["intro_text", config.intro_text || defaultConfig.intro_text],
    [
      "about_description",
      config.about_description || defaultConfig.about_description,
    ],
    ["email", config.email || defaultConfig.email],
    ["phone", config.phone || defaultConfig.phone],
    ["location", config.location || defaultConfig.location],
    ["linkedin", config.linkedin || defaultConfig.linkedin],
    ["github", config.github || defaultConfig.github],
    ["footer_text", config.footer_text || defaultConfig.footer_text],
  ]);
}

// Create animated background particles
function createParticles() {
  const container = document.querySelector(".animated-bg");
  const particleCount = 50;

  if (!container) return;

  // optional emoji/icons for visual variety
  const icons = [""];

  // Pokemon sprite URLs (from PokeAPI sprites repository)
  const pokemonSprites = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", // Bulbasaur
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", // Charmander
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", // Squirtle
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", // Pikachu
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png", // Jigglypuff
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png", // Meowth
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png", // Eevee
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png", // Mewtwo
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png", // Mew
  ];
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    // decide whether this particle is an icon (emoji or pokemon) or a dot
    const useIcon = Math.random() < 0.45; // ~45% icons
    if (useIcon) {
      const usePokemon = Math.random() < 0.6; // ~60% of icon particles are Pokemon
      if (usePokemon) {
        const src = pokemonSprites[Math.floor(Math.random() * pokemonSprites.length)];
        const img = document.createElement("img");
        img.src = src;
        img.alt = "";
        img.loading = "lazy";
        img.style.width = "100px";
        img.style.height = "auto";
        img.style.display = "block";
        particle.appendChild(img);
        particle.style.background = "transparent";
        particle.style.boxShadow = "none";
        particle.style.width = "auto";
        particle.style.height = "auto";
        particle.style.padding = "0";
      } else {
        const icon = icons[Math.floor(Math.random() * icons.length)];
        particle.textContent = icon;
        particle.setAttribute("aria-hidden", "true");
        particle.style.fontSize = `${Math.floor(Math.random() * 16) + 12}px`;
        particle.style.background = "transparent";
        particle.style.boxShadow = "none";
        particle.style.width = "auto";
        particle.style.height = "auto";
        particle.style.padding = "0.1rem";
      }
    } else {
      // dot particle
      particle.style.width = "8px";
      particle.style.height = "8px";
      particle.style.background = "rgba(255,255,255,0.95)";
      particle.style.borderRadius = "50%";
    }

    // start at a random horizontal position
    particle.style.left = Math.random() * 100 + "%";
    // start slightly below the container
    particle.style.bottom = "-10px";
    particle.style.opacity = (Math.random() * 0.6 + 0.4).toString();
    particle.style.animationDuration = Math.random() * 8 + 6 + "s";
    particle.style.animationDelay = Math.random() * 3 + "s";
    container.appendChild(particle);
  }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Mobile nav toggle - Removed duplicate code (see DOMContentLoaded handler below)

// Initialize
createParticles();

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues,
  });
}

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'9b2786b5f14f043d',t:'MTc2NjQ4OTQxOS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener) document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState && ((document.onreadystatechange = e), c());
      };
    }
  }
})();

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');

  if (!menuBtn || !navLinks) {
    console.error('Menu button or nav links not found');
    return;
  }

  // Toggle menu on button click
  menuBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    navLinks.classList.toggle('hidden');
    console.log('Menu toggled, hidden:', navLinks.classList.contains('hidden'));
  });

  // Close menu when any nav item is clicked (links and buttons)
  const navItems = navLinks.querySelectorAll('a, button');
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.stopPropagation();
      navLinks.classList.add('hidden');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    // Check if click is outside navLinks and not on menuBtn
    if (!navLinks.contains(e.target) && e.target !== menuBtn && !menuBtn.contains(e.target)) {
      navLinks.classList.add('hidden');
    }
  });
});

// Handle resume button click - show preview modal
function handleResumeClick() {
  const resumeModal = document.getElementById('resumeModal');
  resumeModal.classList.remove('hidden');
}

// Close resume modal
function closeResumeModal() {
  const resumeModal = document.getElementById('resumeModal');
  resumeModal.classList.add('hidden');
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
  const resumeModal = document.getElementById('resumeModal');
  if (e.target === resumeModal) {
    closeResumeModal();
  }
});
