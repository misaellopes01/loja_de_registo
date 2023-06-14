import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { LoginContainer } from './styles';
import { AuthContext } from '../../../contexts/Auth';

export function Login() {
  // State for email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { signIn } = useContext(AuthContext)

  // Function to handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    signIn(email, password)
  };

  return (
    <LoginContainer>
      {/* Logo placeholder */}
      <div className="logo-container">
        <img src={'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'} alt="" />
      </div>
      {/* Login form */}
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Administrador</h2>
        <input
          type="email"
          placeholder="Digite o seu email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <button type="submit">Login</button>
      </form>
    </LoginContainer>
  );
};

