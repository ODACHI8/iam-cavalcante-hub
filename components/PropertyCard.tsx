"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export type Property = {
  photo: string;
  kicker: string;
  title: string;
  specs: string;
  price: string;
  neighborhood: string;
  details: string[];
  description: string;
};

export default function PropertyCard({ item }: { item: Property }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="prop-card"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        <div className="prop-photo">
          <Image
            src={item.photo}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="prop-body">
          <span className="prop-kicker">{item.kicker}</span>
          <h3 className="prop-title">{item.title}</h3>
          <span className="prop-specs">{item.specs}</span>
          <span className="prop-price">{item.price}</span>
        </div>
      </button>

      {open &&
        mounted &&
        createPortal(
          <div
            className="prop-modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={item.title}
            onClick={() => setOpen(false)}
          >
            <div className="prop-modal" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="prop-modal-close"
                onClick={() => setOpen(false)}
                aria-label="Fechar"
              >
                ×
              </button>
              <div className="prop-modal-photo">
                <Image
                  src={item.photo}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="prop-modal-body">
                <span className="prop-kicker">{item.kicker}</span>
                <h3 className="prop-modal-title">{item.title}</h3>
                <span className="prop-specs">{item.specs}</span>
                <p className="prop-modal-desc">{item.description}</p>
                <ul className="prop-modal-details">
                  {item.details.map((detail) => (
                    <li key={detail}>
                      <span className="dash">—</span> {detail}
                    </li>
                  ))}
                </ul>
                <span className="prop-price">{item.price}</span>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
