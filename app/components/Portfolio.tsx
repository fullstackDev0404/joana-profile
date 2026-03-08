"use client";

import { useState } from "react";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import { projectDetails } from "../data/projectDetails";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered =
    filter === "all"
      ? projectDetails
      : projectDetails.filter((p) => p.category === filter);

  const openGallery = (images: string[]) => {
    setSelectedImages(images);
    setCurrentIndex(0);
  };

  const closeGallery = () => {
    setSelectedImages(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    if (!selectedImages) return;
    setCurrentIndex((prev) =>
      prev === selectedImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedImages) return;
    setCurrentIndex((prev) =>
      prev === 0 ? selectedImages.length - 1 : prev - 1
    );
  };

  return (
    <section id="portfolio" className="portfolio">
      <h2 className="section-title">Portfolio</h2>

      {/* GRID */}
      <div className="portfolio-grid">
        {filtered.map((item) => (
          <div className="portfolio-card" key={item.id}>
            <span className="badge">
              {item.category === "mobile" ? "Mobile App" : "Web"}
            </span>

            <Image
              src={item.images[0]}
              alt={item.title}
              width={800}
              height={500}
              className="portfolio-img"
            />

            <div className="overlay-portfolio">
              <div className="overlay-portfolio-icons">
                <div
                  className="icon-btn"
                  onClick={() => openGallery(item.images)}
                >
                  <Search size={17} />
                </div>


                <Link href={`/portfolio/${item.id}`} style = {{textDecoration: "none"}}>
                  <div className="icon-btn">
                    🔗
                  </div>
                </Link>
              </div>

              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* GALLERY MODAL */}
      {selectedImages && (
        <div className="modal" onClick={closeGallery}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <X className="close-btn" size={30} onClick={closeGallery} />

            <ChevronLeft
              className="nav-btn left"
              size={40}
              onClick={prevImage}
            />

            <Image
              src={selectedImages[currentIndex]}
              alt="Preview"
              width={1200}
              height={800}
              className="modal-img"
            />

            <ChevronRight
              className="nav-btn right"
              size={40}
              onClick={nextImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}