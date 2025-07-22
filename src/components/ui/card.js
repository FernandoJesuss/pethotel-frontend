// src/components/ui/card.js
export function Card({ children }) {
  return <div className="pdv-card">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="pdv-card-content">{children}</div>;
}
