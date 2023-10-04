import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/contact')
  }
  return (
    <>
      <h3>About Component</h3>
      <button onClick={handleClick}>Contact Page</button>
    </>

  )
}

export default About