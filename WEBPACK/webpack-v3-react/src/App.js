import img1 from './images/1.jpg';

const App = ({name}) => {
    return <div>
        <h1>Hey mr {name} how are you </h1>
        <img src={img1} width="25%" alt="" />
    </div>
}

export default App;


