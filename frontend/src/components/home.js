import Sidebar from "./Sidebar"

const Home = () => {
    return (
        <div className="fuera">
            <Sidebar/>
            <div className="dentro">
                <h1>Bienvenidos</h1>
                <br></br>
                <p>Bienvenido al nuevo portal del estudiante de la Universidad Católica de Temuco</p>
            </div>
        </div>
    )
}
export default Home