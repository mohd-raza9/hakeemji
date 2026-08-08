"use client";

import Image from "next/image";
import styles from "./page.module.css";
import {
  Award,
  ExternalLink,
  Star,
  Stethoscope,
  Calendar,
  Phone,
  ArrowRight,
} from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Advance Diploma in Cupping Therapy",
    institute: "Universal Institute of Healthcare Research & Training",
    year: "2025",
    image: "/certificates/certificate1.jpg",
  },
  {
    id: 2,
    title: "Diploma in Naturopathy & Yogic Sciences",
    institute: "Paramedical Council",
    year: "2022",
    image: "/certificates/certificate2.jpg",
  },
  {
    id: 3,
    title: "Hi-Tech Fitness Leaders Workshop",
    institute: "Institute of Dr. B.K. Yoga & Clinic of AYUSH Paramedics",
    year: "2014",
    image: "/certificates/certificate3.jpg",
  },
  {
    id: 4,
    title: "Facial Cupping Therapy Certificate",
    institute: "Cup Cure Academy",
    year: "2025",
    image: "/certificates/certificate4.jpg",
  },
  {
    id: 5,
    title: "Authorized Letter",
    institute: "SK Pharma",
    year: "2025",
    image: "/certificates/certificate5.jpg",
  },
  {
    id: 6,
    title: "Cupping Therapy Training Certificate",
    institute: "Cup Cure Academy",
    year: "2025",
    image: "/certificates/certificate6.jpg",
  },
];

export default function ExpertHakeemPage() {
  return (
    <main className={styles.container}>
      {/* ================= Hero Section ================= */}

      <section className={styles.hero}>

        <div className={styles.heroContent}>

          {/* Left */}

          <div className={styles.left}>

            <span className={styles.badge}>
              <Award size={18} />
              Certified Unani Specialist
            </span>

            <h1 className={styles.title}>
              Hakeem
              <br />
              <span>Mohd Shadab</span>
            </h1>

            <p className={styles.subtitle}>
              Experienced Unani physician dedicated to
              providing natural and holistic healthcare.
              Specialized in chronic diseases, Hijama
              Therapy, digestive disorders, lifestyle
              diseases and personalized herbal treatment.
            </p>

            {/* Rating */}

            <div className={styles.ratingContainer}>

              <div className={styles.ratingBox}>
                <div className={styles.stars}>
                  <Star fill="#f4c430" color="#f4c430" size={18} />
                  <Star fill="#f4c430" color="#f4c430" size={18} />
                  <Star fill="#f4c430" color="#f4c430" size={18} />
                  <Star fill="#f4c430" color="#f4c430" size={18} />
                  <Star fill="#f4c430" color="#f4c430" size={18} />
                </div>

                <span>4.9/5 Patient Rating</span>
              </div>

              <div className={styles.ratingBox}>
                <Stethoscope size={18} />
                <span>1000+ Patients Treated</span>
              </div>

              <div className={styles.ratingBox}>
                <Calendar size={18} />
                <span>10+ Years Experience</span>
              </div>

            </div>

            {/* Buttons */}

            <div className={styles.buttonGroup}>

              <button className={styles.primaryBtn}>
                Book Consultation
                <ArrowRight size={18} />
              </button>

              <button className={styles.secondaryBtn}>
                <Phone size={18} />
                Contact Now
              </button>

            </div>

          </div>

          {/* Right */}

          <div className={styles.right}>

            <div className={styles.imageCard}>

              <Image
                src="/doctor/hakeem.png"
                alt="Hakeem Mohd Shadab"
                width={550}
                height={700}
                className={styles.doctorImage}
                priority
              />

            </div>

            {/* Floating Card */}

            <div className={styles.floatingCard}>

              <h3>Quick Information</h3>

              <ul>

                <li>
                  <strong>Qualification:</strong>
                  <span>B.U.M.S.</span>
                </li>

                <li>
                  <strong>Speciality:</strong>
                  <span>Unani Medicine</span>
                </li>

                <li>
                  <strong>Consultation:</strong>
                  <span>Online & Offline</span>
                </li>

                <li>
                  <strong>Languages:</strong>
                  <span>Hindi, Urdu, English</span>
                </li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section className={styles.aboutSection}>

        <div className={styles.sectionHeader}>

          <span className={styles.sectionTag}>
            ABOUT THE DOCTOR
          </span>

          <h2 className={styles.sectionTitle}>
            Meet Hakeem Mohd Shadab
          </h2>

          <p className={styles.sectionDescription}>
            Hakeem Mohd Shadab is a highly dedicated Unani
            physician committed to providing natural,
            evidence-based and holistic healthcare. His
            treatment philosophy combines traditional
            Unani medicine with modern patient care to
            deliver long-lasting health benefits.
          </p>

        </div>

        <div className={styles.aboutGrid}>

          {/* Left */}

          <div className={styles.aboutContent}>

            <h3>
              Trusted Healthcare with
              <span> Natural Healing</span>
            </h3>

            <p>

              With years of clinical experience,
              Hakeem Mohd Shadab has successfully
              treated patients suffering from piles,
              kidney stones, digestive disorders,
              skin diseases, thyroid problems,
              obesity, diabetes and many chronic
              lifestyle diseases.

            </p>

            <p>

              His treatment focuses on identifying
              the root cause instead of merely
              controlling symptoms. Every patient
              receives a personalized treatment plan,
              herbal medicines and dietary guidance.

            </p>

            <ul className={styles.featureList}>

              <li>
                ✔ Personalized Treatment Plans
              </li>

              <li>
                ✔ Authentic Unani Medicines
              </li>

              <li>
                ✔ Hijama (Cupping Therapy)
              </li>

              <li>
                ✔ Lifestyle & Diet Counselling
              </li>

              <li>
                ✔ Digital Prescription
              </li>

              <li>
                ✔ Online & Offline Consultation
              </li>

            </ul>

          </div>

          {/* Right */}

          <div className={styles.statsContainer}>

            <div className={styles.statCard}>

              <div className={styles.statNumber}>
                10+
              </div>

              <div className={styles.statLabel}>
                Years of Experience
              </div>

            </div>

            <div className={styles.statCard}>

              <div className={styles.statNumber}>
                1000+
              </div>

              <div className={styles.statLabel}>
                Happy Patients
              </div>

            </div>

            <div className={styles.statCard}>

              <div className={styles.statNumber}>
                6+
              </div>

              <div className={styles.statLabel}>
                Professional Certifications
              </div>

            </div>

            <div className={styles.statCard}>

              <div className={styles.statNumber}>
                15+
              </div>

              <div className={styles.statLabel}>
                Diseases Treated
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= QUALIFICATIONS ================= */}

      <section className={styles.qualificationSection}>

        <div className={styles.sectionHeader}>

          <span className={styles.sectionTag}>
            QUALIFICATIONS
          </span>

          <h2 className={styles.sectionTitle}>
            Education & Professional Certifications
          </h2>

          <p className={styles.sectionDescription}>
            A strong academic background with professional
            certifications in Unani medicine, naturopathy,
            cupping therapy and holistic healthcare.
          </p>

        </div>

        <div className={styles.qualificationGrid}>

          <div className={styles.qualificationCard}>

            <div className={styles.iconBox}>
              🎓
            </div>

            <h3>Bachelor of Unani Medicine & Surgery</h3>

            <span>B.U.M.S.</span>

            <p>
              Professional degree in Unani Medicine
              focusing on diagnosis, herbal treatment,
              preventive healthcare and holistic healing.
            </p>

          </div>

          <div className={styles.qualificationCard}>

            <div className={styles.iconBox}>
              🌿
            </div>

            <h3>
              Diploma in Naturopathy &
              Yogic Sciences
            </h3>

            <span>Certified</span>

            <p>
              Specialized training in natural healing,
              yoga therapy, detoxification and
              lifestyle management.
            </p>

          </div>

          <div className={styles.qualificationCard}>

            <div className={styles.iconBox}>
              🩺
            </div>

            <h3>
              Advanced Diploma in
              Cupping Therapy
            </h3>

            <span>Hijama Specialist</span>

            <p>
              Certified practitioner of traditional
              Hijama therapy for pain relief,
              detoxification and wellness.
            </p>

          </div>

          <div className={styles.qualificationCard}>

            <div className={styles.iconBox}>
              💆
            </div>

            <h3>
              Facial Cupping Therapy
            </h3>

            <span>Certified Course</span>

            <p>
              Professional training in facial
              cupping therapy for skin rejuvenation,
              circulation improvement and wellness.
            </p>

          </div>

          <div className={styles.qualificationCard}>

            <div className={styles.iconBox}>
              🏆
            </div>

            <h3>
              Cupping Therapy Training Certificate
            </h3>

            <span>Cup Cure Academy</span>

            <p>
              Advanced hands-on training in traditional
              and modern cupping therapy techniques for
              pain relief and wellness treatment.
            </p>

          </div>

          <div className={styles.qualificationCard}>

            <div className={styles.iconBox}>
              📜
            </div>

            <h3>
              Authorized Letter
            </h3>

            <span>SK Pharma</span>

            <p>
              Official authorization certifying professional
              practice and authenticity of herbal medicine
              dispensation and treatment.
            </p>

          </div>

        </div>

      </section>

      {/* ================= SPECIALIZATIONS ================= */}

      <section className={styles.specializationSection}>

        <div className={styles.sectionHeader}>

          <span className={styles.sectionTag}>
            SPECIALIZATIONS
          </span>

          <h2 className={styles.sectionTitle}>
            Diseases & Treatments
          </h2>

        </div>

        <div className={styles.specializationGrid}>

          <div className={styles.specialCard}>Piles</div>

          <div className={styles.specialCard}>Kidney Stone</div>

          <div className={styles.specialCard}>Diabetes</div>

          <div className={styles.specialCard}>Thyroid</div>

          <div className={styles.specialCard}>Skin Diseases</div>

          <div className={styles.specialCard}>Hair Problems</div>

          <div className={styles.specialCard}>Obesity</div>

          <div className={styles.specialCard}>Joint Pain</div>

          <div className={styles.specialCard}>Digestive Disorders</div>

          <div className={styles.specialCard}>Acidity</div>

          <div className={styles.specialCard}>Fatty Liver</div>

          <div className={styles.specialCard}>PCOD / PCOS</div>

          <div className={styles.specialCard}>Sexual Wellness</div>

          <div className={styles.specialCard}>Hijama Therapy</div>

          <div className={styles.specialCard}>Diet Consultation</div>

          <div className={styles.specialCard}>Natural Healing</div>

        </div>

      </section>

      {/* ================= CERTIFICATES ================= */}

      <section className={styles.certificateSection}>

        <div className={styles.sectionHeader}>

          <span className={styles.sectionTag}>
            CERTIFICATES
          </span>

          <h2 className={styles.sectionTitle}>
            Professional Certifications
          </h2>

          <p className={styles.sectionDescription}>
            Professional certifications earned through
            recognized healthcare institutions and
            specialized training programmes.
          </p>

        </div>

        <div className={styles.certificateGrid}>

          {certificates.map((certificate) => (

            <div
              key={certificate.id}
              className={styles.certificateCard}
            >

              <div className={styles.certificateImage}>

                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  width={600}
                  height={850}
                />

                <div className={styles.overlay}>

                  <button
                    className={styles.viewButton}
                  >
                    <ExternalLink size={18} />

                    View Certificate
                  </button>

                </div>

              </div>

              <div className={styles.certificateContent}>

                <div className={styles.certificateYear}>

                  <Award size={16} />

                  {certificate.year}

                </div>

                <h3>

                  {certificate.title}

                </h3>

                <p>

                  {certificate.institute}

                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= EXPERIENCE TIMELINE ================= */}

      <section className={styles.timelineSection}>

        <div className={styles.sectionHeader}>

          <span className={styles.sectionTag}>
            PROFESSIONAL JOURNEY
          </span>

          <h2 className={styles.sectionTitle}>
            Experience Timeline
          </h2>

          <p className={styles.sectionDescription}>
            A journey of continuous learning, professional
            growth and dedication towards holistic patient care.
          </p>

        </div>

        <div className={styles.timeline}>

          <div className={styles.timelineItem}>

            <div className={styles.timelineDot}></div>

            <div className={styles.timelineContent}>

              <span className={styles.timelineYear}>
                2014
              </span>

              <h3>
                Hi-Tech Fitness Leaders Workshop
              </h3>

              <p>
                Successfully completed professional
                healthcare & fitness leadership workshop
                at the Institute of Dr. B.K. Yoga & Clinic
                of AYUSH Paramedics to understand preventive
                healthcare, wellness and rehabilitation.
              </p>

            </div>

          </div>

          <div className={styles.timelineItem}>

            <div className={styles.timelineDot}></div>

            <div className={styles.timelineContent}>

              <span className={styles.timelineYear}>
                2022
              </span>

              <h3>
                Diploma in Naturopathy & Yogic Sciences
              </h3>

              <p>
                Earned certification from the Paramedical
                Council, expanding expertise in natural
                healing, detoxification, yoga therapy and
                lifestyle management.
              </p>

            </div>

          </div>

          <div className={styles.timelineItem}>

            <div className={styles.timelineDot}></div>

            <div className={styles.timelineContent}>

              <span className={styles.timelineYear}>
                2025
              </span>

              <h3>
                Advanced Diploma in Cupping Therapy
              </h3>

              <p>
                Specialized certification from the Universal
                Institute of Healthcare Research & Training
                in Hijama Therapy for pain management,
                detoxification and wellness treatment.
              </p>

            </div>

          </div>

          <div className={styles.timelineItem}>

            <div className={styles.timelineDot}></div>

            <div className={styles.timelineContent}>

              <span className={styles.timelineYear}>
                2025
              </span>

              <h3>
                Facial Cupping Therapy Certificate
              </h3>

              <p>
                Certified by Cup Cure Academy in modern
                facial cupping techniques for skin
                rejuvenation, circulation improvement
                and wellness.
              </p>

            </div>

          </div>

          <div className={styles.timelineItem}>

            <div className={styles.timelineDot}></div>

            <div className={styles.timelineContent}>

              <span className={styles.timelineYear}>
                2025
              </span>

              <h3>
                Cupping Therapy Training Certificate
              </h3>

              <p>
                Completed advanced hands-on training at
                Cup Cure Academy, strengthening practical
                expertise in traditional and modern
                cupping therapy techniques.
              </p>

            </div>

          </div>

          <div className={styles.timelineItem}>

            <div className={styles.timelineDot}></div>

            <div className={styles.timelineContent}>

              <span className={styles.timelineYear}>
                2025
              </span>

              <h3>
                Authorized Letter - SK Pharma
              </h3>

              <p>
                Received official authorization from
                SK Pharma, certifying professional practice
                and authenticity of herbal medicine
                dispensation and treatment.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= ACHIEVEMENTS ================= */}

      <section className={styles.achievementSection}>

        <div className={styles.sectionHeader}>

          <span className={styles.sectionTag}>
            ACHIEVEMENTS
          </span>

          <h2 className={styles.sectionTitle}>
            Milestones & Recognition
          </h2>

        </div>

        <div className={styles.achievementGrid}>

          <div className={styles.achievementCard}>

            <h3>1000+</h3>

            <p>
              Happy Patients Treated
            </p>

          </div>

          <div className={styles.achievementCard}>

            <h3>10+</h3>

            <p>
              Years of Clinical Experience
            </p>

          </div>

          <div className={styles.achievementCard}>

            <h3>6+</h3>

            <p>
              Professional Certifications
            </p>

          </div>

          <div className={styles.achievementCard}>

            <h3>15+</h3>

            <p>
              Disease Categories Treated
            </p>

          </div>

          <div className={styles.achievementCard}>

            <h3>100%</h3>

            <p>
              Natural Treatment Approach
            </p>

          </div>

          <div className={styles.achievementCard}>

            <h3>24×7</h3>

            <p>
              Online Consultation Support
            </p>

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE ================= */}

      <section className={styles.whySection}>

        <div className={styles.sectionHeader}>

          <span className={styles.sectionTag}>
            WHY CHOOSE US
          </span>

          <h2 className={styles.sectionTitle}>
            Why Patients Trust Hakeem Mohd Shadab
          </h2>

          <p className={styles.sectionDescription}>
            Our commitment is to provide ethical,
            natural and patient-centered healthcare
            with complete transparency and compassion.
          </p>

        </div>

        <div className={styles.whyGrid}>

          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>🌿</div>
            <h3>Natural Treatment</h3>
            <p>
              Safe and authentic Unani medicines
              without unnecessary medications.
            </p>
          </div>

          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>🩺</div>
            <h3>Personal Consultation</h3>
            <p>
              Every patient receives an individual
              diagnosis and treatment plan.
            </p>
          </div>

          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>📋</div>
            <h3>Digital Prescription</h3>
            <p>
              Receive prescriptions digitally after
              consultation.
            </p>
          </div>

          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>💬</div>
            <h3>Online Consultation</h3>
            <p>
              Easily consult from anywhere through
              secure online appointments.
            </p>
          </div>

          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>❤️</div>
            <h3>Patient Care</h3>
            <p>
              Compassionate healthcare focused on
              long-term wellness.
            </p>
          </div>

          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>⭐</div>
            <h3>Trusted Experience</h3>
            <p>
              Years of successful treatment with
              thousands of satisfied patients.
            </p>
          </div>

        </div>

      </section>

      {/* ================= LANGUAGES ================= */}

      <section className={styles.languageSection}>

        <div className={styles.sectionHeader}>

          <span className={styles.sectionTag}>
            LANGUAGES
          </span>

          <h2 className={styles.sectionTitle}>
            Languages Spoken
          </h2>

        </div>

        <div className={styles.languageGrid}>

          <div className={styles.languageCard}>
            🇮🇳 Hindi
          </div>

          <div className={styles.languageCard}>
            🇵🇰 Urdu
          </div>

          <div className={styles.languageCard}>
            🇬🇧 English
          </div>

        </div>

      </section>

      {/* ================= CONSULTATION HOURS ================= */}

      <section className={styles.scheduleSection}>

        <div className={styles.sectionHeader}>

          <span className={styles.sectionTag}>
            CONSULTATION HOURS
          </span>

          <h2 className={styles.sectionTitle}>
            Clinic Timing
          </h2>

        </div>

        <div className={styles.scheduleTable}>

          <div className={styles.scheduleRow}>
            <span>Monday - Saturday</span>
            <strong>10:00 AM - 8:00 PM</strong>
          </div>

          <div className={styles.scheduleRow}>
            <span>Sunday</span>
            <strong>Emergency Consultation</strong>
          </div>

          <div className={styles.scheduleRow}>
            <span>Online Consultation</span>
            <strong>By Appointment</strong>
          </div>

        </div>

      </section>

      {/* ================= REVIEWS ================= */}

      <section className={styles.reviewSection}>

        <div className={styles.sectionHeader}>

          <span className={styles.sectionTag}>
            PATIENT REVIEWS
          </span>

          <h2 className={styles.sectionTitle}>
            What Our Patients Say
          </h2>

        </div>

        <div className={styles.reviewGrid}>

          <div className={styles.reviewCard}>

            <h4>★★★★★</h4>

            <p>
              Excellent treatment. The doctor explained
              everything clearly and the medicines
              were very effective.
            </p>

            <span>- Abdul Rahman</span>

          </div>

          <div className={styles.reviewCard}>

            <h4>★★★★★</h4>

            <p>
              Very humble doctor. My digestive issues
              improved significantly after treatment.
            </p>

            <span>- Ayesha Khan</span>

          </div>

          <div className={styles.reviewCard}>

            <h4>★★★★★</h4>

            <p>
              Professional consultation and genuine
              Unani treatment. Highly recommended.
            </p>

            <span>- Imran Ali</span>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className={styles.ctaSection}>

        <div className={styles.ctaBox}>

          <h2>
            Start Your Natural Healing Journey Today
          </h2>

          <p>
            Book an online consultation with
            Hakeem Mohd Shadab and receive
            personalized Unani treatment from
            the comfort of your home.
          </p>

          <div className={styles.ctaButtons}>

            <button className={styles.bookBtn}>
              Book Consultation
            </button>

            <button className={styles.callBtn}>
              Call Now
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}