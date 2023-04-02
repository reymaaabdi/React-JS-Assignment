const Home = (props) => {
  return (
    <div className="container-1">
        <div className="menus">
            <h1 className="title-1">CA204</h1>
            <div className="underline"></div>
            <ul className="links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Find Work</a></li>
                <li><a href="#">Career Opp</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
        <div className="body">
            <h2>I have Completed My Assignments(✔)</h2>
        </div>
        <footer>
            <h2>Welcome to our class of 2021😍</h2>
            <span>Information About the Class</span>
            <p>{props.par}</p>
            <p>{props.par}</p>
        </footer>
    </div>
  )
}
export default Home