class AppHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header id="header">
            <div class="AboutMe">
                <a href="index.html">
                    <h1>About Me</h1>
                </a>
            </div>

            <div class="Projects">
                <a href="project.html">
                    <h1>Projects</h1>
                </a>
            </div>

            <div class="header-socials">
                <a
                    href="https://github.com/Oliveriam1"
                    target="_blank"
                    class="social-link"
                    aria-label="Github"
                >
                    <img src="icons/github.svg" alt="GitHub Icon" class="clickable-image">
                </a>
                <a
                    href="https://www.linkedin.com/in/oliver-hurych-6136a040a/"
                    target="_blank"
                    class="social-link"
                    aria-label="Linkedin"
                >
                    <img src="icons/linkedin.svg" alt="Linkedin Icon" class="clickable-image">
                </a>
                <a
                    href="https://profile.hackthebox.com/profile/019ee414-21a9-7025-9892-d214a3bc4a5e"
                    target="_blank"
                    class="social-link"
                    aria-label="Hack The Box"
                >
                    <img src="icons/hackthebox.svg" alt="hackthebox Icon" class="clickable-image">
                </a>
            </div>
        </header>
        `;
    }
}
class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer id="footer">
        <div class="footer-text">
          &copy; ${new Date().getFullYear()} Oliveriam. All rights reserved.
        </div>
      </footer>
      `;
  }
}
window.customElements.define('app-header', AppHeader)
window.customElements.define('app-footer', AppFooter)
