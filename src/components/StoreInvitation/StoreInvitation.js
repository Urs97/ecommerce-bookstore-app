import React from "react";
import "./StoreInvitation.scss";

import { Link } from "react-router-dom";

import photo_1920_webp from "../../assets/images/store-invitation-photo-1920.webp";
import photo_1600_webp from "../../assets/images/store-invitation-photo-1600.webp";
import photo_1366_webp from "../../assets/images/store-invitation-photo-1366.webp";
import photo_1024_webp from "../../assets/images/store-invitation-photo-1024.webp";
import photo_768_webp from "../../assets/images/store-invitation-photo-768.webp";
import photo_1920_jpg from "../../assets/images/store-invitation-photo-1920.jpg";
import photo_1600_jpg from "../../assets/images/store-invitation-photo-1600.jpg";
import photo_1366_jpg from "../../assets/images/store-invitation-photo-1366.jpg";
import photo_1024_jpg from "../../assets/images/store-invitation-photo-1024.jpg";
import photo_768_jpg from "../../assets/images/store-invitation-photo-768.jpg";

import photo_768_portrait_webp from "../../assets/images/store-invitation-photo-768-portrait.webp";
import photo_768_portrait_jpg from "../../assets/images/store-invitation-photo-768-portrait.jpg";

const StoreInvitation = () => {
  return (
    <section className="store-invitation">
      <picture>
        <source
          media="(orientation: portrait)"
          type="image/webp"
          srcSet={`${photo_768_portrait_webp} 320w`}
        />
        <source
          media="(orientation: portrait)"
          type="image/jpg"
          srcSet={`${photo_768_portrait_jpg} 320w`}
        />
        <source
          type="image/webp"
          srcSet={`${photo_768_webp} 320w,
                        ${photo_1024_webp} 1024w,
                        ${photo_1366_webp} 1366w,
                        ${photo_1600_webp} 1600w,
                        ${photo_1920_webp} 1920w`}
        />
        <source
          type="image/jpg"
          srcSet={`${photo_768_jpg} 320w,
                        ${photo_1024_jpg} 1024w,
                        ${photo_1366_jpg} 1366w,
                        ${photo_1600_jpg} 1600w,
                        ${photo_1920_jpg} 1920w`}
        />
        <img
          src={photo_1920_jpg}
          alt="Beautiful library interior by Benjamin Ashton/Stephanie Leblanc on Unsplash"
        />
      </picture>
      <h1 className="title">Browse Through Our Complete Library</h1>
      <Link to="/store" className="button">
        View More
      </Link>
    </section>
  );
};

export default StoreInvitation;
