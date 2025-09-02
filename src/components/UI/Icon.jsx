const Icon = ({name , className , width , height }) => {
  return (
    <svg  width={width} height={height} className={className}>
        <use href={`./sprite/sprite.svg#${name}`} />
    </svg>
  )
}

export default Icon