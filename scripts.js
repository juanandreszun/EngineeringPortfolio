// Nav is defined once here as a Web Component.
// Each page uses <nav-bar root="./"> or <nav-bar root="../">
// and this component renders the full navbar HTML at runtime.
class PortfolioNav extends HTMLElement {
  connectedCallback() {
    const r = this.getAttribute('root') || './';
    this.innerHTML = `
      <nav class="navbar" id="navbar">
        <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">&#9776;</button>
        <ul class="nav-links" id="navLinks">
          <li><a href="${r}index.html">Home</a></li>
          <li><a href="${r}about.html">About</a></li>
          <li><a href="https://drive.google.com/file/d/1_n2nPeVQZs2APde1yBxSuxEx4QXrYwNd/view?usp=sharing">Resume</a></li>
          <li class="has-dropdown">
            <a href="#">Class Work &#9660;</a>
            <ul class="dropdown-menu">
              <li><a href="${r}ClassWorkPages/SeniorDesign.html">Pitch Perfect</a></li>
              <li><a href="${r}ClassWorkPages/4BarLinkage.html">4 Bar Linkage</a></li>
              <li><a href="${r}ClassWorkPages/RoboticsStudio.html">Robotics Studio</a></li>
              <li><a href="${r}ClassWorkPages/ArduinoLabandJack.html">Arduino Lab / Scissor Jack</a></li>
            </ul>
          </li>
          <li class="has-dropdown">
            <a href="#">Digital Manufacturing &#9660;</a>
            <ul class="dropdown-menu">
              <li><a href="${r}DigitalManufacturingPages/Embroidery.html">Embroidery</a></li>
              <li><a href="${r}DigitalManufacturingPages/FoodPrinting.html">Food Printing</a></li>
              <li><a href="${r}DigitalManufacturingPages/LampshadeLattice.html">Lampshade Lattice</a></li>
              <li><a href="${r}DigitalManufacturingPages/LaserCut.html">Laser Cutting</a></li>
              <li><a href="${r}DigitalManufacturingPages/Topology.html">Topology Optimization</a></li>
            </ul>
          </li>
          <li class="has-dropdown">
            <a href="#">FSAE &#9660;</a>
            <ul class="dropdown-menu">
              <li><a href="${r}FSAEPages/AeroAnalysis.html">Aerodynamics Analysis</a></li>
              <li><a href="${r}FSAEPages/Chassis.html">EV Chassis Design</a></li>
              <li><a href="${r}FSAEPages/FullCar.html">Full Car CAD</a></li>
              <li><a href="${r}FSAEPages/Manufacturing.html">Manufacturing Projects</a></li>
            </ul>
          </li>
        </ul>
      </nav>`;

    const navbar   = this.querySelector('#navbar');
    const toggle   = this.querySelector('#navToggle');

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      navbar.classList.toggle('nav-open');
    });

    this.querySelectorAll('.has-dropdown > a').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const parent = link.parentElement;
        const wasOpen = parent.classList.contains('open');
        document.querySelectorAll('.has-dropdown.open').forEach(function (el) { el.classList.remove('open'); });
        if (!wasOpen) parent.classList.add('open');
      });
    });

    document.addEventListener('click', function () {
      document.querySelectorAll('.has-dropdown.open').forEach(function (el) { el.classList.remove('open'); });
      navbar.classList.remove('nav-open');
    });
  }
}

customElements.define('nav-bar', PortfolioNav);
