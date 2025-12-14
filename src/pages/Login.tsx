import { useState, type FormEvent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext.js';

const Login = () =>{

  const { setIsAuthenticated, setUser} = useAppContext()
  const navigate = useNavigate();
  const location = useLocation();
 
  const [form, setForm] = useState({ name: '', email: '' });


  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.name && form.email) {
      setIsAuthenticated(true);
      setUser(form);
     
      if (location.state?.carrito) {
        navigate('/pagar', /* { state: { carrito: ubicacion.state.carrito } } */);
      } else {
        navigate('/productos');
      }
    } else {
      alert('Completa todos los datos');
    }
  };

  return (
    <div>
      <h1>Inicia sesión para continuar</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({...form, email: e.target.value})}
          required
        />
        <button type="submit">Iniciar Sesión</button>
        <button type="button" onClick={() => navigate('/productos')}>
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default Login;