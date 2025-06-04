import React, { useState } from 'react';
import './RegistrationPage.css'; // Assicurati di avere questo file CSS
import { supabase } from '../supabaseClient'; // Importa il client Supabase

function RegistrationPage() {
  // Stato per gestire i dati del modulo.
  // I nomi delle proprietà (es. 'nome', 'dataNascita') devono corrispondere agli
  // attributi 'name' degli input del form e verranno mappati alle colonne del DB.
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    email: '',
    dataNascita: '', // Formato "YYYY-MM-DD" per input[type="date"]
    genere: '',
    percorso: '',
    terminiAccettati: false,
  });

  // Stati per la gestione del feedback utente e dello stato di caricamento
  const [loading, setLoading] = useState(false); // Vero quando l'invio è in corso
  const [message, setMessage] = useState(''); // Messaggio di feedback (successo/errore)

  // Gestore per l'aggiornamento dello stato del form quando gli input cambiano
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value, // Gestisce le checkbox in modo specifico
    }));
  };

  // Funzione che viene chiamata quando il form viene inviato
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impedisce il ricaricamento predefinito della pagina

    // Validazione lato client: verifica che i termini siano accettati
    if (!formData.terminiAccettati) {
      setMessage('Devi accettare i termini e le condizioni per procedere.');
      return; // Ferma l'esecuzione se i termini non sono accettati
    }

    setLoading(true); // Attiva lo stato di caricamento
    setMessage(''); // Azzera eventuali messaggi precedenti

    try {
      // Invia i dati alla tabella 'registrations' su Supabase
      // Il nome della tabella qui (es. 'registrations') DEVE corrispondere
      // al nome della tabella che hai creato nella dashboard di Supabase.
      const { data, error } = await supabase
        .from('registrations') // <--- NOME DELLA TUA TABELLA SUPABASE
        .insert([
          {
            // Mappa le proprietà dello stato 'formData' ai nomi delle colonne
            // nella tua tabella Supabase. I nomi delle chiavi qui (es. 'nome', 'data_nascita')
            // devono corrispondere ESATTAMENTE ai nomi delle colonne del tuo database.
            nome: formData.nome,
            cognome: formData.cognome,
            email: formData.email,
            data_nascita: formData.dataNascita, // Colonna nel DB con underscore
            genere: formData.genere,
            percorso: formData.percorso,
            termini_accettati: formData.terminiAccettati,
            // 'id' e 'created_at' non vanno inclusi qui, Supabase li gestisce automaticamente
          },
        ]);

      if (error) {
        // Gestione degli errori restituiti dall'API Supabase
        console.error('Errore durante l\'inserimento su Supabase:', error);
        let errorMessage = `Errore nell'iscrizione: ${error.message}.`;

        // Se l'errore è dovuto a una violazione di unicità (es. email duplicata),
        // fornisci un messaggio più specifico all'utente.
        if (error.code === '23505') { // Codice SQLSTATE per unique_violation
            errorMessage = 'Errore: Un utente con questa email è già iscritto.';
        }
        setMessage(errorMessage);

      } else {
        // Se l'inserimento ha successo
        console.log('Iscrizione inviata con successo!', data);
        setMessage('Iscrizione completata con successo! Ora procederesti al pagamento.');
        // Resetta il form per permettere una nuova iscrizione o per pulizia
        setFormData({
          nome: '',
          cognome: '',
          email: '',
          dataNascita: '',
          genere: '',
          percorso: '',
          terminiAccettati: false,
        });
      }
    } catch (err) {
      // Gestione di errori JavaScript generici (es. problemi di rete, errori di codice)
      console.error('Si è verificato un errore inaspettato:', err);
      setMessage('Si è verificato un errore inaspettato durante l\'invio. Riprova.');
    } finally {
      setLoading(false); // Disattiva lo stato di caricamento, sia in caso di successo che di errore
    }
  };

  return (
    <div className="container section registration-page">
      <h2>Modulo di Iscrizione alla Corsa</h2>
      <p className="page-description">Compila il modulo sottostante per iscriverti alla Grande Corsa della Città. Assicurati di inserire tutti i dati richiesti.</p>

      {/* Messaggio di feedback all'utente (successo o errore) */}
      {message && <div className={`form-message ${message.includes('Errore') ? 'error' : 'success'}`}>{message}</div>}

      {/* Il form con tutti i campi e il pulsante di invio */}
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome" // L'attributo 'name' DEVE corrispondere alla proprietà in 'formData'
            value={formData.nome}
            onChange={handleChange}
            required
            disabled={loading} // Disabilita input durante l'invio
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
          />
          <label htmlFor="terminiAccettati">Accetto i <a href="#termini" onClick={(e) => e.preventDefault()}>termini e condizioni</a></label>
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Invio in corso...' : 'Procedi al Pagamento'}
        </button>
      </form>
    </div>
  );
}

export default RegistrationPage;