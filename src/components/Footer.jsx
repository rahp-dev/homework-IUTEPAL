import React from "react";
import logoFooter from "/images/logo-footer.png";
import githubLogo from "/github-mark.svg";

function obtenerFecha() {
  const fechaActual = new Date();
  const añoActual = fechaActual.getFullYear();
  return añoActual;
}

const Footer = () => {
  const dateNow = obtenerFecha();

  return (
    <div className="container mx-auto footer max-w-full mt-14 py-28 text-white bg-slate-800">
      <div className="container mx-auto">
        <ul className="flex flex-row gap-x-8 font-bold text-xl">
          <li className="flex flex-row items-center">
            <img src={githubLogo} className="max-w-10 mr-3" alt="logo github" />
            <a href="">Github</a>
          </li>
        </ul>
      </div>

      <hr class="my-6 h-0.5 w-[80.7%] mx-auto border-t-0 bg-slate-100/20" />

      <div className="container mx-auto flex flex-row items-center">
        <div>
          <img src={logoFooter} alt="" className="max-w-36" />
        </div>
        <div className="ml-8">
          <p className="font-bold text-xl">©{dateNow} Robert Herrera</p>
          <small className="italic font-semibold">rahp-dev</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
