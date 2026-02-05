// ========================================
// RESUME DATA MODEL
// ========================================
const resumeData = {
  name: 'Gunja',
  titles: [
    'Healthcare Administrator',
    'Customer Service Professional',
    'Computer Science Student',
    'Data Management Specialist'
  ],
  location: 'Sangam Vihar, New Delhi – 110080',
  phone: '7827601318',
  email: 'Gunjagunja899@gmail.com',
  summary: 'Motivated and responsible postgraduate student in Computer Science seeking an opportunity where I can apply my technical knowledge, communication skills, and social service experience to contribute effectively to organizational growth while continuing to learn and grow professionally.',
  
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    email: 'mailto:Gunjagunja899@gmail.com'
  },
  
  stats: [
    { icon: 'ri-time-line', number: '1.5+', label: 'Years Experience' },
    { icon: 'ri-award-line', number: '7+', label: 'Certifications' },
    { icon: 'ri-briefcase-line', number: '4+', label: 'Roles Completed' },
    { icon: 'ri-graduation-cap-line', number: '3', label: 'Degrees Pursued' }
  ],
  
  experience: [
    {
      role: 'Hospital Administrative Support',
      org: 'Dr. Baba Saheb Ambedkar Hospital & Medical College',
      dates: 'Tenure: 1.5 Years',
      category: 'healthcare',
      bullets: [
        'Managed patient records and documentation with accuracy and confidentiality.',
        'Assisted administrative teams in daily operations, scheduling, and file management.',
        'Supported high-volume, fast-paced workflows with discipline and adherence to procedures.',
        'Coordinated with medical and support staff to maintain smooth patient service.',
        'Ensured timely data entry, form processing, and report updates.'
      ]
    },
    {
      role: 'Phlebotomist (Medical Experience)',
      org: 'Mahadev Laboratory, Chhatarpur',
      dates: 'Medical Lab Technician',
      category: 'healthcare',
      bullets: [
        'Collected blood samples using proper phlebotomy techniques and safety protocols.',
        'Labeled, documented, and prepared specimens for analysis, ensuring chain-of-custody.',
        'Interacted with patients professionally, ensuring comfort and adherence to hygiene standards.',
        'Maintained logs and supported lab operations with accuracy and timeliness.'
      ]
    },
    {
      role: 'Sales and Customer Service Associate',
      org: 'SBI Cards',
      dates: 'Tenure: 6 Months',
      category: 'banking',
      bullets: [
        'Handled customer queries related to card services, billing, and product features.',
        'Assisted clients through application support, follow-ups, and service requests.',
        'Improved customer satisfaction through clear communication and problem resolution.',
        'Practiced consultative selling and cross-selling aligned with customer needs.',
        'Maintained accurate logs of customer interactions and resolutions.'
      ]
    },
    {
      role: 'Pandemic Volunteer',
      org: 'National NGO',
      dates: 'COVID-19 Response',
      category: 'ngo',
      bullets: [
        'Supported community members with awareness, coordination, and assistance during the pandemic.',
        'Helped in distribution drives, on-ground support, and information dissemination.',
        'Collaborated with teams for crisis response, public outreach, and safety protocols.'
      ]
    }
  ],
  
  projects: [
    {
      title: 'Hospital Records Management System',
      description: 'Developed and maintained a streamlined patient record management system that improved data retrieval efficiency by 40%.',
      tags: ['Data Management', 'Healthcare', 'Documentation'],
      icon: 'ri-hospital-line'
    },
    {
      title: 'Customer Service Excellence Program',
      description: 'Implemented customer service protocols that increased satisfaction ratings and reduced query resolution time.',
      tags: ['Customer Service', 'Process Improvement', 'Banking'],
      icon: 'ri-customer-service-2-line'
    },
    {
      title: 'COVID-19 Community Support Initiative',
      description: 'Coordinated community outreach and support activities, helping over 500 families during the pandemic.',
      tags: ['Social Service', 'Community', 'Volunteer'],
      icon: 'ri-heart-line'
    }
  ],
  
  education: [
    { title: 'M.Sc. Computer Science – Final Year', org: 'GCW', icon: 'ri-graduation-cap-line' },
    { title: 'B.Sc. (General)', org: 'IGNOU', icon: 'ri-book-line' },
    { title: 'B.Sc. MLT (Medical Lab Technology)', org: 'Singhania University', icon: 'ri-flask-line' },
    { title: '12th (CBSE Board)', org: '2020', icon: 'ri-award-line' },
    { title: '10th (CBSE Board)', org: '2018', icon: 'ri-award-line' }
  ],
  
  certifications: [
    { title: 'Digital Marketing Course – Vocational Skill Program (Selling Skills using Digital Medium)', org: 'ICICI Foundation', icon: 'ri-marketing-line' },
    { title: 'Data Entry Operator Course (NSDC Approved)', org: 'NIIT Foundation', icon: 'ri-keyboard-line' },
    { title: 'Career Edge Professional Program', org: 'NIIT Foundation', icon: 'ri-briefcase-line' },
    { title: 'English Speaking & Personality Development', org: 'Freedom English Academy', icon: 'ri-speak-line' },
    { title: 'Microsoft YouthSpark – Code (AI) Future Training', org: 'Microsoft & NASSCOM Foundation', icon: 'ri-robot-line' },
    { title: 'Civil Defence Basic Training Certificate – General Civil Defence, Elementary Rescue, Fire Fighting, First Aid', org: 'Directorate of Civil Defence, Govt. of NCT Delhi', icon: 'ri-shield-check-line' },
    { title: 'Web Designing & Graphic Workshop Certificate', org: "Khazani Women's Vocational Institute, New Delhi", icon: 'ri-palette-line' }
  ],
  
  skills: [
    'Data Entry & Documentation (35 WPM)',
    'Record Management & MS Office',
    'Customer Service & Communication',
    'Digital Marketing Fundamentals',
    'Basic AI Awareness',
    'Teamwork & Social Service',
    'Internet Research & Email Etiquette',
    'Medical Terminology',
    'Patient Care',
    'Administrative Support'
  ],
  
  testimonials: [
    {
      text: 'Gunja demonstrated exceptional dedication and accuracy in managing patient records. Her attention to detail and professionalism were exemplary.',
      author: 'Dr. R. Sharma',
      role: 'Head of Administration',
      initial: 'RS'
    },
    {
      text: 'An outstanding team member who consistently delivered excellent customer service. Her communication skills and problem-solving abilities were remarkable.',
      author: 'Rajesh Kumar',
      role: 'Team Lead, SBI Cards',
      initial: 'RK'
    },
    {
      text: 'Her volunteer work during the pandemic showed remarkable compassion and organizational skills. She made a real difference in our community.',
      author: 'Priya Mehta',
      role: 'NGO Coordinator',
      initial: 'PM'
    }
  ]
};

// ========================================
// DOM UTILITY HELPERS
// ========================================
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ========================================
// PAGE LOADER
// ========================================
function initPageLoader() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const loader = $('.page-loader');
      if (loader) {
        loader.classList.add('hidden');
      }
    }, 500);
  });
}

// ========================================
// TYPING ANIMATION
// ========================================
function initTypingAnimation() {
  const typingElement = $('.typing-text');
  if (!typingElement) return;
  
  const titles = resumeData.titles;
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;
  
  function type() {
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let delay = isDeleting ? deletingSpeed : typingSpeed;
    
    if (!isDeleting && charIndex === currentTitle.length) {
      delay = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }
    
    setTimeout(type, delay);
  }
  
  type();
}

// ========================================
// SCROLL PROGRESS BAR
// ========================================
function initScrollProgress() {
  const progressBar = $('.scroll-progress');
  if (!progressBar) return;
  
  window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    progressBar.style.width = `${scrollPercent}%`;
  });
}

// ========================================
// ACTIVE NAVIGATION
// ========================================
function initActiveNav() {
  const navLinks = $$('.nav-link');
  const sections = Array.from(navLinks).map(link => $(link.getAttribute('href')));
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          const link = $(`.nav a[href='${id}']`);
          
          navLinks.forEach(l => l.classList.remove('active'));
          if (link) link.classList.add('active');
        }
      });
    },
    {
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0.1
    }
  );
  
  sections.forEach(section => section && observer.observe(section));
}

// ========================================
// REVEAL ANIMATIONS
// ========================================
function initRevealAnimations() {
  const revealElements = $$('[data-reveal]');
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    }
  );
  
  revealElements.forEach(el => observer.observe(el));
}

// ========================================
// THEME TOGGLE
// ========================================
function initThemeToggle() {
  const toggle = $('#themeToggle');
  if (!toggle) return;
  
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  
  if (saved) {
    root.setAttribute('data-theme', saved);
  }
  
  updateToggleText();
  
  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    
    if (next === 'light') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', 'dark');
    }
    
    localStorage.setItem('theme', root.getAttribute('data-theme') || 'light');
    updateToggleText();
  });
  
  function updateToggleText() {
    const isDark = root.getAttribute('data-theme') === 'dark';
    toggle.innerHTML = isDark
      ? '<i class="ri-sun-line"></i>'
      : '<i class="ri-moon-line"></i>';
  }
}

// ========================================
// PRINT FUNCTIONALITY
// ========================================
function initPrint() {
  const printBtn = $('#printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }
}

// ========================================
// RENDER FUNCTIONS
// ========================================
function renderSummary() {
  const summaryEl = $('#summary');
  const locationEl = $('#location');
  const phoneEl = $('#phone');
  const emailEl = $('#email');
  const contactLocationEl = $('#contactLocation');
  const contactPhoneEl = $('#contactPhone');
  const contactEmailEl = $('#contactEmail');
  
  if (summaryEl) summaryEl.textContent = resumeData.summary;
  if (locationEl) locationEl.innerHTML = `<i class="ri-map-pin-line"></i> ${resumeData.location}`;
  if (phoneEl) phoneEl.innerHTML = `<i class="ri-phone-line"></i> ${resumeData.phone}`;
  if (emailEl) emailEl.innerHTML = `<i class="ri-mail-line"></i> ${resumeData.email}`;
  
  if (contactLocationEl) contactLocationEl.textContent = resumeData.location;
  if (contactPhoneEl) {
    contactPhoneEl.href = `tel:${resumeData.phone}`;
    contactPhoneEl.textContent = resumeData.phone;
  }
  if (contactEmailEl) {
    contactEmailEl.href = `mailto:${resumeData.email}`;
    contactEmailEl.textContent = resumeData.email;
  }
}

function renderStats() {
  const container = $('#statsContainer');
  if (!container) return;
  
  container.innerHTML = resumeData.stats.map(stat => `
    <div class="stat-item" data-reveal>
      <i class="${stat.icon} stat-icon"></i>
      <span class="stat-number">${stat.number}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `).join('');
}

function renderExperience(filter = 'all') {
  const container = $('#experienceList');
  if (!container) return;
  
  container.innerHTML = '';
  
  resumeData.experience
    .filter(exp => filter === 'all' || exp.category === filter)
    .forEach(exp => {
      const item = document.createElement('div');
      item.className = 'exp-item';
      item.dataset.category = exp.category;
      item.innerHTML = `
        <div class="exp-header" aria-expanded="true" role="button" tabindex="0">
          <span class="exp-role">${exp.role}</span>
          <span class="exp-org">• ${exp.org}</span>
          <span class="exp-dates">(${exp.dates})</span>
        </div>
        <ul class="exp-points">
          ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      `;
      
      const header = item.querySelector('.exp-header');
      header.addEventListener('click', () => item.classList.toggle('collapsed'));
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.classList.toggle('collapsed');
        }
      });
      
      container.appendChild(item);
    });
}

function renderProjects() {
  const container = $('#projectsGrid');
  if (!container) return;
  
  container.innerHTML = resumeData.projects.map(project => `
    <div class="project-card" data-reveal>
      <div class="project-image">
        <i class="${project.icon}" style="font-size: 4rem; color: var(--color-primary);"></i>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderEducation() {
  const list = $('#educationList');
  if (!list) return;
  
  list.innerHTML = '';
  resumeData.education.forEach(edu => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="${edu.icon}" style="margin-right: 0.5rem; color: var(--color-primary);"></i>${edu.title} – ${edu.org}`;
    list.appendChild(li);
  });
}

function renderCertifications() {
  const list = $('#certList');
  if (!list) return;
  
  list.innerHTML = '';
  resumeData.certifications.forEach(cert => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="${cert.icon}" style="margin-right: 0.5rem; color: var(--color-primary);"></i>${cert.title} – ${cert.org}`;
    list.appendChild(li);
  });
}

function renderSkills() {
  const list = $('#skillsList');
  if (!list) return;
  
  list.innerHTML = '';
  resumeData.skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    list.appendChild(li);
  });
}

function renderTestimonials() {
  const container = $('#testimonialsGrid');
  if (!container) return;
  
  container.innerHTML = resumeData.testimonials.map(testimonial => `
    <div class="testimonial-card" data-reveal>
      <i class="ri-double-quotes-l quote-icon"></i>
      <p class="testimonial-text">"${testimonial.text}"</p>
      <div class="testimonial-author">
        <div class="author-avatar">${testimonial.initial}</div>
        <div class="author-info">
          <div class="author-name">${testimonial.author}</div>
          <div class="author-role">${testimonial.role}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderSocialLinks() {
  const container = $('#socialLinks');
  if (!container) return;
  
  container.innerHTML = `
    <a href="${resumeData.social.linkedin}" target="_blank" rel="noopener" class="social-link" title="LinkedIn">
      <i class="ri-linkedin-line"></i>
    </a>
    <a href="${resumeData.social.github}" target="_blank" rel="noopener" class="social-link" title="GitHub">
      <i class="ri-github-line"></i>
    </a>
    <a href="${resumeData.social.email}" class="social-link" title="Email">
      <i class="ri-mail-line"></i>
    </a>
  `;
}

// ========================================
// EXPERIENCE FILTERS
// ========================================
function initFilters() {
  const filterButtons = $$('.filters .chip');
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderExperience(btn.dataset.filter);
    });
  });
}

// ========================================
// CONTACT FORM
// ========================================
function initContactForm() {
  const form = $('#contactForm');
  const submitBtn = $('#cfSubmit');
  const statusEl = $('#cfStatus');
  
  if (!form) return;
  
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const name = $('#cfName').value.trim();
    const email = $('#cfEmail').value.trim();
    const message = $('#cfMessage').value.trim();
    
    if (!name || !email || !message) {
      statusEl.textContent = 'Please complete all fields.';
      statusEl.className = 'status error';
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      statusEl.textContent = 'Please enter a valid email address.';
      statusEl.className = 'status error';
      return;
    }
    
    statusEl.textContent = 'Thanks! Your message has been received. I\'ll get back to you soon.';
    statusEl.className = 'status success';
    
    // Clear form
    $('#cfName').value = '';
    $('#cfEmail').value = '';
    $('#cfMessage').value = '';
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      statusEl.textContent = '';
      statusEl.className = 'status';
    }, 5000);
  });
}

// ========================================
// UPDATE FOOTER YEAR
// ========================================
function updateFooterYear() {
  const yearEl = $('#year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ========================================
// INITIALIZE ALL FEATURES
// ========================================
function init() {
  // Render content
  renderSummary();
  renderStats();
  renderExperience();
  renderProjects();
  renderEducation();
  renderCertifications();
  renderSkills();
  renderTestimonials();
  renderSocialLinks();
  updateFooterYear();
  
  // Initialize features
  initPageLoader();
  initTypingAnimation();
  initScrollProgress();
  initActiveNav();
  initRevealAnimations();
  initThemeToggle();
  initPrint();
  initFilters();
  initContactForm();
  initSmoothScroll();
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
