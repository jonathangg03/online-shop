const changeCategory = ({ event, navigate }) => {
  if (event.target.parentNode.id) {
    //Click on <button>
    navigate(`/home/${event.target.parentNode.id}`)
  } else if (event.target.id) {
    //click on <p>
    navigate(`/home/${event.target.id}`)
  } else if (event.target.parentNode.parentNode.id) {
    //clic on icon
    navigate(`/home/${event.target.parentNode.parentNode.id}`)
  } else {
    navigate('/home')
  }
}

export default changeCategory
