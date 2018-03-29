import React, { Component } from 'react';
import AdminLayout from '../../Layouts/containers/AdminLayout';

class Homepage extends Component {
  render() {
    return (
      <AdminLayout {...this.props}>
        <div className="AdminWellcome">
          <h1>Wellcome to Admin Zone.</h1>
          {
            // We could place a Notifications component here
          }
          <p>Como verán la mayoría está en inglés... Hay que aconstumbrarse :p</p>
          <p>
            En esta pantalla inicial planeo poner rankings y gráficos de la gente jugando cada juego
            en el momento. Esto me va a llevar un poquito de tiempo así que por ahora queda esperar.
            Vamos a usar el sistemita mientras lo voy haciendo, si encuentran bugs o comportamientos
            incómodos avisen!
          </p>
        </div>
      </AdminLayout>
    );
  }
}

export default Homepage;
