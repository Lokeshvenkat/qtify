import React from "react";
import styles from "./Homepage.module.css";
import { useOutletContext } from "react-router-dom";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";
import { fetchFilters } from "../../Apidata/api";
import Accordian from "../../Components/Accordian/Accordian";
import Footer from "../../Components/Footer/Footer";

function HomePage() {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;

  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section
          title="Songs"
          data={songs}
          filterSource={fetchFilters}
          type="song"
        />
        <Accordian />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
