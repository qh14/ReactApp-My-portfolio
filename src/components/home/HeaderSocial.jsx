import React from "react";
function HeaderSocials() {
  return (
    <div className="home__socials">
      <a
        href="https://www.linkedin.com/in/quanghuy14/"
        className="home__social-link"
        target="blank"
      >
        <i class="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a
        href="https://www.facebook.com/nqh148/"
        className="home__social-link"
        target="blank"
      >
        <i className="fa-brands fa-facebook"></i>
      </a>
      <a
        href="https://github.com/qh14"
        className="home__social-link"
        target="blank"
      >
        <i class="fa-brands fa-github"></i>
      </a>
    </div>
  );
}

export default HeaderSocials;
