import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Ahmed Salman. All rights reserved.
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:your@email.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
