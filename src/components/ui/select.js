// src/components/ui/select.js
export function Select({ children, ...props }) {
  return <select className="pdv-input" {...props}>{children}</select>;
}
