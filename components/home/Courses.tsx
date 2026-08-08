"use client";

import "./Courses.css";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShoppingCart,
  Eye,
  Star,
  Clock,
  Pill,
  X,
} from "lucide-react";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import {
  treatments,
  TreatmentPackage,
} from "@/data/treatments";

export default function Courses() {
  const [selectedTreatment, setSelectedTreatment] =
    useState<TreatmentPackage | null>(null);

  return (
    <section id="courses" className="courses-section">
      <Container>
        <SectionTitle
          title="Complete"
          highlight="Treatment Packages"
          subtitle="Choose from our doctor-recommended Unani treatment packages specially designed for different health concerns."
        />

        <div className="courses-grid">
          {treatments.map((item) => (
            <div className="course-card" key={item.id}>
              {/* Badge */}
              {item.badge && (
                <span className="course-badge">{item.badge}</span>
              )}

              {/* Wishlist */}
              <button className="wishlist-btn">
                <Heart size={20} />
              </button>

              {/* Image */}
              <div className="course-image">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="course-content">
                <h3>{item.title}</h3>

                <p>{item.shortDescription}</p>

                {/* Rating */}
                <div className="rating-row">
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={15}
                        fill="#C9A227"
                        color="#C9A227"
                      />
                    ))}
                  </div>

                  <span>{item.rating}</span>
                </div>

                {/* Price */}
                <div className="price-row">
                  <h2>₹{item.price}</h2>

                  {item.oldPrice && <span>₹{item.oldPrice}</span>}
                </div>

                {/* Chips */}
                <div className="chips">
                  <div className="chip">
                    <Clock size={15} />
                    {item.duration}
                  </div>

                  <div className="chip">
                    <Pill size={15} />
                    {item.medicines.length} Medicines
                  </div>
                </div>

                {/* Buttons */}
                <div className="button-row">
                  <button className="cart-btn">
                    <ShoppingCart size={18} />
                    Add Cart
                  </button>

                  <button className="buy-btn">Buy Now</button>
                </div>

                <Link
  href={`/treatments/${item.slug}`}
  target="_blank"
  className="details-btn"
>
  <Eye size={18} />
  View Details
</Link>
              </div>
            </div>
          ))}
        </div>

        {/* ==========================
            DETAILS MODAL
        =========================== */}

        {selectedTreatment && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedTreatment(null)}
          >
            <div
              className="treatment-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                className="close-btn"
                onClick={() => setSelectedTreatment(null)}
              >
                <X size={22} />
              </button>

              {/* Image */}
              <div className="modal-image">
                <Image
                  src={selectedTreatment.image}
                  alt={selectedTreatment.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="modal-content">
                <span className="modal-badge">
                  {selectedTreatment.badge}
                </span>

                <h2>{selectedTreatment.title}</h2>

                <div className="modal-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      fill="#C9A227"
                      color="#C9A227"
                    />
                  ))}

                  <span>{selectedTreatment.rating}</span>
                </div>

                <div className="modal-price">
                  <h3>₹{selectedTreatment.price}</h3>

                  {selectedTreatment.oldPrice && (
                    <span>₹{selectedTreatment.oldPrice}</span>
                  )}
                </div>

                <div className="duration-box">
                  <Clock size={18} />
                  <span>
                    Treatment Duration :
                    <strong> {selectedTreatment.duration}</strong>
                  </span>
                </div>

                <p className="modal-description">
                  {selectedTreatment.details}
                </p>

                {/* Symptoms */}
                <div className="modal-section">
                  <h4>Recommended For</h4>

                  <ul>
                    {selectedTreatment.symptoms.map((symptom, index) => (
                      <li key={index}>✓ {symptom}</li>
                    ))}
                  </ul>
                </div>

                {/* Medicines */}
                <div className="modal-section">
                  <h4>Package Includes</h4>

                  <ul>
                    {selectedTreatment.medicines.map((medicine, index) => (
                      <li key={index}>💊 {medicine}</li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="modal-buttons">
                  <button className="cart-btn">
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>

                  <button className="buy-btn">Buy Now</button>
                </div>

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
