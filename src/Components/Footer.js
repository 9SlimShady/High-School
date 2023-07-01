import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer class="bg-dark text-center text-white">
      <div class="container p-4 pb-0">
        <section class="mb-4">
          <a
            href={"https://www.facebook.com/thepchighschool/"}
            class="btn btn-outline-light btn-floating m-1"
            target="_blank"
            role="button"
          >
            <BsFacebook />
          </a>
          <a
            class="btn btn-outline-light btn-floating m-1"
            href={
              "https://www.instagram.com/thepchighschooltphs/"
            }
            role="button"
            target="_blank"
          >
            <BsInstagram />
          </a>
        </section>
      </div>

      <div
        class="text-center p-3"
        style={{ backgroundColor: `rgba(${0}, ${0}, ${0}, ${0.2})` }}
      >
        © 2020 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}
