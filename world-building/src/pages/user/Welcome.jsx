import { Link } from 'react-router-dom';


import '../../App.css'

const Welcome = ({ email }) => {
  return (
    <div>
      <h1>Bem-vindo!</h1>
      <p>Olá, {email}</p>

      <Link to="/CreateWorld">
        <button>Clique aqui para criar um mundo</button>
      </Link>
    </div>
  );
};

export default Welcome;