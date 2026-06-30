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
      const header = this.querySelector('#header');
      const content = document.querySelector('.content');

      if (content) {
        content.addEventListener('scroll', () => {
          if (content.scrollTop === 0) {
            header.classList.remove('hidden');
          } else {
            header.classList.add('hidden');
          }
        });
      }
    }
}
class AppFooter extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
        <footer id="footer" class="hidden">
          <div class="footer-text">
            &copy; ${new Date().getFullYear()} Oliveriam. All rights reserved.
            </div>
        </footer>
        `;
      const footer = this.querySelector('#footer');
      const content = document.querySelector('.content');

      if (content) {
        content.addEventListener('scroll', () => {
          if (content.scrollTop + content.clientHeight >= content.scrollHeight - 2) {
            footer.classList.remove('hidden');
          } else {
            footer.classList.add('hidden');
          }
        });
      }
    }
}
window.customElements.define('app-header', AppHeader)
window.customElements.define('app-footer', AppFooter)
