interface IButton {
  title: string
  onClick: () => void
}

function Button(props: IButton) {
  const { title, onClick } = props
  const handelClick = () => {
    onClick()
  }
  return (
    <div>
      <button onClick={handelClick}>{title}</button>
    </div>
  )
}

export default Button
