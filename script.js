<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sayed Arshad - Future Tech Entrepreneur</title>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
        /* ==========================================================================
           CSS Variables - Minimal & Futuristic Palette
           ========================================================================== */
        :root {
            --bg-primary: #07070a;       /* Deep space black */
            --bg-secondary: #121218;     /* Slightly lighter dark background */
            --text-primary: #f0f0f5;     /* Crisp off-white */
            --text-secondary: #9a9cae;   /* Muted futuristic gray */
            --accent-primary: #00f0ff;   /* Neon cyan */
            --accent-secondary: #7000ff; /* Electric purple */
            --glass-bg: rgba(18, 18, 24, 0.7);
            --glass-border: rgba(0, 240, 255, 0.1);
            --glow-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
            --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        /* ==========================================================================
           Base Reset & Typography
           ========================================================================== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
            overflow-x: hidden;
        }

        a {
            text-decoration: none;
            transition: var(--transition);
        }

        ul {
            list-style: none;
        }

        /* ==========================================================================
           Layout Utilities
           ========================================================================== */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        section {
            padding: 100px 0;
        }

        .section-title {
            font-size: 2.5rem;
            font-weight: 600;
            text-align: center;
            margin-bottom: 3rem;
            color: var(--text-primary);
            position: relative;
            display: inline-block;
            left: 50%;
            transform: translateX(-50%);
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--accent-primary), transparent);
        }

        /* ==========================================================================
           Navigation (Light Header Theme)
           ========================================================================== */
        .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.9); /* Light background */
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1); /* Subtle dark border */
            z-index: 1000;
            transition: var(--transition);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem 2rem;
        }

        .nav-menu {
            display: flex;
            gap: 2rem;
        }

        .nav-menu a {
            font-size: 0.9rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #121218; /* Dark text for contrast against light background */
        }

        .nav-menu a:hover {
            color: var(--accent-secondary); /* Electric purple hover */
        }

        .hamburger {
            display: none;
            cursor: pointer;
        }

        .hamburger span {
            display: block;
            width: 25px;
            height: 2px;
            margin: 5px;
            background-color: #121218; /* Dark lines for hamburger menu */
            transition: var(--transition);
        }

        /* ==========================================================================
           Buttons
           ========================================================================== */
        .btn {
            display: inline-block;
            padding: 0.8rem 2rem;
            border-radius: 30px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: var(--transition);
        }

        .btn-primary {
            background: transparent;
            color: var(--accent-primary);
            border: 1px solid var(--accent-primary);
            box-shadow: 0 0 10px rgba(0, 240, 255, 0.1);
        }

        .btn-primary:hover {
            background: var(--accent-primary);
            color: var(--bg-primary);
            box-shadow: var(--glow-shadow);
        }

        .btn-secondary {
            background: transparent;
            color: var(--text-primary);
            border: 1px solid var(--text-secondary);
        }

        .btn-secondary:hover {
            border-color: var(--text-primary);
            background: rgba(255, 255, 255, 0.05);
        }

        /* ==========================================================================
           Hero Section
           ========================================================================== */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding-top: 80px;
            background: radial-gradient(circle at top right, rgba(112, 0, 255, 0.05), transparent 50%),
                        radial-gradient(circle at bottom left, rgba(0, 240, 255, 0.05), transparent 50%);
        }

        .hero-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .hero-content h1 {
            font-size: 3.5rem;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 1rem;
        }

        .highlight {
            background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero-content h2 {
            font-size: 1.5rem;
            color: var(--text-secondary);
            font-weight: 400;
            margin-bottom: 1.5rem;
        }

        .hero-content p {
            color: var(--text-secondary);
            margin-bottom: 2rem;
            font-size: 1rem;
        }

        .hero-buttons {
            display: flex;
            gap: 1rem;
        }

        .profile-image img {
            width: 100%;
            max-width: 400px;
            border-radius: 20px;
            border: 1px solid var(--glass-border);
            box-shadow: var(--glow-shadow);
            filter: grayscale(20%) contrast(110%);
            transition: var(--transition);
        }

        .profile-image img:hover {
            filter: grayscale(0%) contrast(100%);
            transform: translateY(-5px);
        }

        /* ==========================================================================
           About Section
           ========================================================================== */
        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .about-text h3 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
            color: var(--text-primary);
        }

        .about-text p {
            color: var(--text-secondary);
            margin-bottom: 1rem;
        }

        .about-text strong {
            color: var(--accent-primary);
        }

        .about-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
            margin-top: 2rem;
        }

        .stat {
            background: var(--bg-secondary);
            padding: 1.5rem 1rem;
            border-radius: 12px;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: var(--transition);
        }

        .stat:hover {
            border-color: var(--accent-primary);
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0, 240, 255, 0.1);
        }

        .stat h4 {
            font-size: 1.5rem;
            color: var(--accent-primary);
            margin-bottom: 0.5rem;
        }

        .stat p {
            font-size: 0.8rem;
            margin: 0;
        }

        .about-image img {
            width: 100%;
            border-radius: 20px;
            border: 1px solid rgba(112, 0, 255, 0.3);
        }

        /* ==========================================================================
           Skills Section
           ========================================================================== */
        .skills {
            background-color: var(--bg-secondary);
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        .skill-category {
            background: var(--bg-primary);
            padding: 2rem;
            border-radius: 16px;
            border: 1px solid var(--glass-border);
        }

        .skill-category h3 {
            margin-bottom: 1.5rem;
            font-size: 1.2rem;
            color: var(--text-primary);
        }

        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;
        }

        .skill-tags span {
            background: rgba(0, 240, 255, 0.05);
            color: var(--accent-primary);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.85rem;
            border: 1px solid rgba(0, 240, 255, 0.2);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: var(--transition);
        }

        .skill-tags span:hover {
            background: var(--accent-primary);
            color: var(--bg-primary);
            box-shadow: var(--glow-shadow);
        }

        /* ==========================================================================
           Education Timeline
           ========================================================================== */
        .timeline {
            position: relative;
            max-width: 800px;
            margin: 0 auto;
        }

        .timeline::before {
            content: '';
            position: absolute;
            top: 0;
            left: 20px;
            height: 100%;
            width: 2px;
            background: rgba(0, 240, 255, 0.2);
        }

        .timeline-item {
            position: relative;
            margin-bottom: 3rem;
            padding-left: 60px;
        }

        .timeline-icon {
            position: absolute;
            left: 0;
            top: 0;
            width: 42px;
            height: 42px;
            background: var(--bg-primary);
            border: 2px solid var(--accent-primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent-primary);
            box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
        }

        .timeline-content {
            background: var(--bg-secondary);
            padding: 1.5rem;
            border-radius: 12px;
            border: 1px solid var(--glass-border);
        }

        .timeline-content h3 {
            color: var(--accent-primary);
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }

        .timeline-content h4 {
            color: var(--text-primary);
            font-size: 1rem;
            margin-bottom: 0.5rem;
        }

        .timeline-content p {
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        /* ==========================================================================
           Family Business Section
           ========================================================================== */
        .family-business {
            background: var(--bg-secondary);
        }

        .family-content {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 4rem;
            align-items: center;
        }

        .family-image img {
            width: 100%;
            max-width: 300px;
            display: block;
            margin: 0 auto;
            filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.1));
        }

        .family-text h3 {
            font-size: 2rem;
            margin-bottom: 1rem;
            background: linear-gradient(45deg, #ffffff, #9a9cae);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .family-text p {
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
        }

        .owners h4 {
            color: var(--accent-secondary);
            margin-bottom: 1rem;
        }

        .owners ul li {
            margin-bottom: 0.8rem;
            color: var(--text-primary);
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .owners i {
            color: var(--accent-primary);
        }

        blockquote {
            border-left: 3px solid var(--accent-secondary);
            padding-left: 1.5rem;
            margin: 2rem 0;
            font-style: italic;
            color: var(--text-secondary);
            background: rgba(112, 0, 255, 0.05);
            padding: 1.5rem;
            border-radius: 0 12px 12px 0;
        }

        /* ==========================================================================
           Contact Section
           ========================================================================== */
        .contact-content {
            max-width: 600px;
            margin: 0 auto;
            text-align: center;
        }

        .contact-info h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .contact-info p {
            color: var(--text-secondary);
            margin-bottom: 2rem;
        }

        .contact-details {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            background: var(--bg-secondary);
            padding: 1rem 2rem;
            border-radius: 30px;
            width: 100%;
            border: 1px solid var(--glass-border);
        }

        .contact-item i {
            color: var(--accent-primary);
            font-size: 1.2rem;
        }

        /* ==========================================================================
           Footer
           ========================================================================== */
        .footer {
            background: #040406;
            text-align: center;
            padding: 2rem 0;
            border-top: 1px solid var(--glass-border);
        }

        .footer p {
            color: var(--text-secondary);
            font-size: 0.9rem;
        }

        /* ==========================================================================
           Responsive Design (Media Queries)
           ========================================================================== */
        @media (max-width: 992px) {
            .hero-container, .about-content, .family-content {
                grid-template-columns: 1fr;
                text-align: center;
            }
            
            .hero-buttons {
                justify-content: center;
            }
            
            .profile-image, .about-image {
                margin: 0 auto;
            }

            .section-title::after {
                left: 50%;
                transform: translateX(-50%);
            }
        }

        @media (max-width: 768px) {
            .nav-menu {
                display: none; 
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: rgba(255, 255, 255, 0.98); /* Light mobile menu background */
                padding: 2rem;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }
            
            .nav-menu.active {
                display: flex;
            }
            
            .hamburger {
                display: block;
            }
            
            .hero-content h1 {
                font-size: 2.5rem;
            }
            
            .about-stats {
                grid-template-columns: 1fr;
            }
            
            .contact-item {
                flex-direction: column;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <img href="#home" src="SAlogo.png" alt="SA logo" width="auto" height="80px">
            </div>
            <ul class="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#family">Family Business</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-container">
            <div class="hero-content">
                <h1>Hi, I'm <span class="highlight">Sayed Arshad</span></h1>
                <h2>Class 11 Student | Aspiring Tech Entrepreneur</h2>
                <p>Currently studying in Class 11 at Vedic International, Sambalpur. Passionate about coding and determined to expand my family business empire using modern technology.</p>
                <div class="hero-buttons">
                    <a href="#skills" class="btn btn-primary">My Skills</a>
                    <a href="#contact" class="btn btn-secondary">Connect With Me</a>
                </div>
            </div>
            <div class="hero-image">
                <div class="profile-image">
                    <img src="arshad2.JPG" alt="Sayed Arshad">
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <h3>Student Developer with Big Dreams</h3>
                    <p>I'm a dedicated Class 11 student from Sambalpur, Odisha. Recently passed Class 10 from <strong>St. Joseph's Convent Higher Secondary School</strong> with excellent grades. Currently pursuing Class 11 at <strong>Vedic International, Sambalpur</strong>.</p>
                    <p>At just 16, I'm already proficient in modern web development and programming. My ultimate goal is to expand the family business empire created by my father using cutting-edge technology solutions.</p>
                    <div class="about-stats">
                        <div class="stat">
                            <h4>Class 11</h4>
                            <p>Current Studies</p>
                        </div>
                        <div class="stat">
                            <h4>3+</h4>
                            <p>Programming Languages</p>
                        </div>
                        <div class="stat">
                            <h4>1st Gen</h4>
                            <p>Tech Entrepreneur</p>
                        </div>
                    </div>
                </div>
                <div class="about-image">
                    <img src="arshad1.jpg" alt="Sayed Arshad">
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills">
        <div class="container">
            <h2 class="section-title">My Skills</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>Web Development</h3>
                    <div class="skill-tags">
                        <span><i class="fab fa-html5"></i> HTML5</span>
                        <span><i class="fab fa-css3-alt"></i> CSS3</span>
                        <span><i class="fab fa-js-square"></i> JavaScript</span>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>Programming</h3>
                    <div class="skill-tags">
                        <span><i class="fab fa-python"></i> Python</span>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>Tools</h3>
                    <div class="skill-tags">
                        <span>VS Code</span>
                        <span>Pycharm</span>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>Learning</h3>
                    <div class="skill-tags">
                        <span>Database</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="education">
        <div class="container">
            <h2 class="section-title">Education Journey</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div class="timeline-content">
                        <h3>Class 11 (2026 - Present)</h3>
                        <h4>Vedic International, Sambalpur</h4>
                        <p>Currently pursuing higher secondary education with focus on Science & Technology</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-icon">
                        <i class="fas fa-school"></i>
                    </div>
                    <div class="timeline-content">
                        <h3>Class 10 (Passed 2026)</h3>
                        <h4>St. Joseph's Convent Higher Secondary School, Sambalpur</h4>
                        <p>ICSE Board - Excellent Academic Performance</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Family Business Section -->
    <section id="family" class="family-business">
        <div class="container">
            <h2 class="section-title">Family Legacy</h2>
            <div class="family-content">
                <div class="family-image">
                    <img src="saslogo.png" alt="SAS Construction">
                </div>
                <div class="family-text">
                    <h3>SAS CONSTRUCTION PVT. LTD.</h3>
                    <p>My father, <strong>Mr. Sayed Sanaulla</strong>, is the <strong>CEO</strong> of SAS Construction Pvt. Ltd. - a leading construction company in the region.</p>
                    <div class="owners">
                        <h4>Proud Owners:</h4>
                        <ul>
                            <li><i class="fas fa-user-tie"></i> <strong>Sayed Abdul Siraj (CEO & Co-Founder)</strong></li>
                            <li><i class="fas fa-user-tie"></i> <strong>Sayed Sanaulla (CEO & Co-Founder)</strong></li>
                            <li><i class="fas fa-user-tie"></i> <strong>Sayed Abdul Samiullah (CEO & Co-Founder)</strong></li>
                        </ul>
                    </div>
                    <blockquote>
                        "My aim is to expand this empire using modern technology solutions and take it to new heights."
                    </blockquote>
                    <a href="#contact" class="btn btn-primary">Let's Build Together</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <h3>Ready to collaborate on amazing projects?</h3>
                    <p>Whether it's coding projects, business ideas, or expanding the family empire - I'm all ears!</p>
                    <div class="contact-details">
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>sayedarshadmail@gmail.com</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <span>+91 907812 5825</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>SAS Manzil, Gauntiya para, Sambalpur, Odisha</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Sayed Arshad. Class 11 Student | Future Entrepreneur | Made with ❤️ from Sambalpur</p>
        </div>
    </footer>

    <script>
        // Hamburger Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    </script>
</body>
</html>
