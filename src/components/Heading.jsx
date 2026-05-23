function Heading({ level = 2, className, children }) {
  const Tag = `h${level}`;
  return <Tag className={className}>{children}</Tag>;
}

export default Heading;
