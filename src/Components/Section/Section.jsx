import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filter";
import { CircularProgress } from "@mui/material";
import styles from "./Section.module.css";

export default function Section({ title, data, filterSource, type }) {
  // State for filter tabs
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  // Toggle between carousel and grid view
  const [carouselToggle, setCarouselToggle] = useState(true);

  // Flip carouselToggle state on user action
  const handleToggle = () => {
    setCarouselToggle((prev) => !prev);
  };

  // Fetch filter data on mount (if a filter source is provided)
  useEffect(() => {
    if (filterSource) {
      filterSource().then((res) => {
        if (res?.data) {
          setFilters((prevFilters) => [...prevFilters, ...res.data]);
        }
      });
    }
  }, [filterSource]);

  // If filters exist beyond the default, show the filter bar
  const showFilters = filters.length > 1;

  // Filter data based on selected filter index
  const cardsToRender = data.filter((item) =>
    showFilters && selectedFilterIndex !== 0
      ? item.genre.key === filters[selectedFilterIndex].key
      : true
  );

  return (
    <div>
      {/* Section header */}
      <div className={styles.header}>
        <h3>{title}</h3>
        {!showFilters && (
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {carouselToggle ? "Show All" : "Collapse All"}
          </h4>
        )}
      </div>

      {/* Filters tabs */}
      {showFilters && (
        <div className={styles.filterWrapper}>
          <Filters
            filters={filters}
            selectedFilterIndex={selectedFilterIndex}
            setSelectedFilterIndex={setSelectedFilterIndex}
          />
        </div>
      )}

      {/* Show loading indicator if no data */}
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {/* Render cards in grid or carousel view */}
          {carouselToggle ? (
            <Carousel
              data={cardsToRender}
              renderComponent={(item) => <Card data={item} type={type} />}
            />
          ) : (
            <div className={styles.wrapper}>
              {cardsToRender.map((item, idx) => (
                <Card key={idx} data={item} type={type} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
