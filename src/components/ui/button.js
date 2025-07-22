// src/components/ui/button.js
export function Button({ children, ...props }) {
  return <button className="pdv-btn" {...props}>{children}</button>;
}