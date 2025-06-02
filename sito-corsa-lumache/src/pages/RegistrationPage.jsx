import React, { useState } from 'react';
import './RegistrationPage.css'; // Creeremo questo file CSS

function RegistrationPage() {
  // Stati per memorizzare i valori del form
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    dataNascita: '',
    genere: '',
    percorso: '',
    terminiAccettati: false,
  });

  // Gestore per l'aggiornamento dei campi del form
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Gestore per l'invio del form
  const handleSubmit = (e) => {
    e.preventDefault(); // Impedisce il ricaricamento della pagina
    console.log('Dati di iscrizione:', formData);

    // Qui potresti inviare i dati a un backend o fare validazioni più complesse

    if (formData.terminiAccettati) {
      alert('Iscrizione simulata completata! Ora procederesti al pagamento.');
      // In un'applicazione reale, qui reindirizzeresti a una pagina di pagamento
      // o attiveresti un'integrazione con un gateway di pagamento.
    } else {
      alert('Devi accettare i termini e le condizioni per procedere.');
    }
  };

  return (
    <div className="container section registration-page">
      <h2>Modulo di Iscrizione alla Corsa</h2>
      <p className="page-description">Compila il modulo sottostante per iscriverti alla Grande Corsa della Città. Assicurati di inserire tutti i dati richiesti.</p>

      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cognome">Cognome:</label>
          <input
            type="text"
            id="cognome"
            name="cognome"
            value={formData.cognome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dataNascita">Data di Nascita:</label>
          <input
            type="date"
            id="dataNascita"
            name="dataNascita"
            value={formData.dataNascita}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="genere">Genere:</label>
          <select
            id="genere"
            name="genere"
            value={formData.genere}
            onChange={handleChange}
            required
          >
            <option value="">Seleziona</option>
            <option value="uomo">Uomo</option>
            <option value="donna">Donna</option>
            <option value="altro">Altro</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="percorso">Percorso:</label>
          <select
            id="percorso"
            name="percorso"
            value={formData.percorso}
            onChange={handleChange}
            required
          >
            <option value="">Seleziona il percorso</option>
            <option value="10km">10 km (Agonistica/Non Agonistica)</option>
            <option value="5km">5 km (Ludico-Motoria)</option>
          </select>
        </div>

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            id="terminiAccettati"
            name="terminiAccettati"
            checked={formData.terminiAccettati}
            onChange={handleChange}
          />
          <label htmlFor="terminiAccettati">Accetto i <a href="#termini" onClick={(e) => e.preventDefault()}>termini e condizioni</a></label>
        </div>

        <button type="submit" className="submit-button">Procedi al Pagamento</button>
      </form>
    </div>
  );
}

export default RegistrationPage;