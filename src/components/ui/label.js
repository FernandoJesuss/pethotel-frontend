// src/components/ui/label.js
export function Label({ htmlFor, children }) {
  return <label htmlFor={htmlFor} className="pdv-label">{children}</label>;
}