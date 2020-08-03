import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/48459634?s=460&u=24c476eb3d2248c9757e121d20d8970803e18801&v=4" alt="Augusto Ostapechen"/>
        <div>
          <strong>Augusto Ostapechen</strong>
          <span>Prog1</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        <br /><br />
        Quia error corporis quae, quasi nostrum, laboriosam recusandae, itaque quo ullam a officiis adipisci et saepe perspiciatis reprehenderit blanditiis exercitationem labore dicta?
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp icon"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;