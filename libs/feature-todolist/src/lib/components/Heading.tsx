interface HeadingProps{
    headingText : string;
    className ?: string;
}
const Heading = (headingProps : HeadingProps) => {
  return (
    <h1 className={headingProps.className}>{headingProps.headingText}</h1>
  )
}

export default Heading;