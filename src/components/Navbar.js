//this is how I would consume the context if I did not want to create the useLanguage custom hook from LanguageContext.js
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { language, english, french } = useContext(LanguageContext);
  const { user, setUser } = useContext(UserContext);
  const { languageWord } = language === 'english' ? english : french;

  return (
    <nav>
      <button onClick={() => setUser(!user)}>
        {user ? 'Logout' : 'Login'}
      </button>
      <span>{languageWord}</span>
    </nav>
  );
};

export default Navbar;
