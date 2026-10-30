export default function RichText({ html, className = '' }) {
  if (!html) return null
  return (
    <div
      className={`prose-global ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
