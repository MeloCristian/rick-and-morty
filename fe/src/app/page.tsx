import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className="main-section">
      <article>
        <h1>
          <strong>
            TODO AQUEL QUE NO ESTE EN LA LISTA BLANCA SERÁ DESTRUIDO
          </strong>
        </h1>
        <Image
          alt="logo"
          src={
            "https://w0.peakpx.com/wallpaper/881/12/HD-wallpaper-rick-sanchez-fight-in-rick-and-morty.jpg"
          }
          height={450}
          width={800}
        ></Image>
      </article>
    </section>
  );
}
