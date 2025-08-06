import { useState } from 'react';
import { supabase } from '../supabaseClient'; // Importa il client Supabase
import './RegistrationPage.css'; // Assicurati di avere questo file CSS


const sectionBackgroundStyle = {
      backgroundSize: 'cover',
      whidth: '100%', // Copertura completa dello sfondo
      padding: '60px 0',           // Padding interno sopra e sotto
      textAlign: 'center',        // Allineamento testo al centro
      backgroundColor: '#dd2f8a', // Il colore di sfondo della tua sezione
      
      // Cruciale per il posizionamento delle onde interne
      position: 'relative', 
      zIndex: '1', 
      overflow: 'hidden', 
    };
  // Stili per l'onda superiore

  const topWaveStyle = {
    position: 'relative',
    left: '0',

    width: '100%',
    height: '50px', /* AGGIORNATO: a 50px come AboutSection */
    backgroundRepeat: 'repeat-x',/* Ripetizione orizzontale */
    backgroundSize: '700px 100%',
    zIndex: '0', // Mettiamo le onde sotto il contenuto della sezione
    pointerEvents: 'none',
    top: '0',
    marginTop: '-51px',
    // L'SVG ha il 'dente' in basso. Il fill deve corrispondere al colore della sezione (#dd2f8a)
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath class='elementor-shape-fill' fill='%23dd2f8a' d='M0,0C166,5,333,100,500,100C667,100,833,5,1000,0L1000,100L0,100L0,0Z'/%3E%3C/svg%3E\")",
  };

function RegistrationPage() {
  // Stato per gestire i dati del modulo.
  // I nomi delle proprietà (es. 'nome', 'dataNascita') devono corrispondere agli
  // attributi 'name' degli input del form e verranno mappati alle colonne del DB.
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    codiceFiscale: '',
    email: '',
    telefono: '',
    dataNascita: '',
    genere: '',
    // 'terminiAccettati' rimosso dallo stato
  });

  // Stati per la gestione del feedback utente e dello stato di caricamento
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Gestore per l'aggiornamento dello stato del form quando gli input cambiano
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      // La gestione delle checkbox qui non è più strettamente necessaria se non ci sono altre checkbox,
      // ma è innocua lasciarla. Ho comunque rimosso 'terminiAccettati' dall'oggetto di stato.
      [name]: value, 
    }));
  };

  // Funzione che viene chiamata quando il form viene inviato
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impedisce il ricaricamento predefinito della pagina

    // Validazione per 'terminiAccettati' rimossa

    setLoading(true);
    setMessage('');

    try {
      const { data, error } = await supabase
        .from('registrations') // <--- NOME DELLA TUA TABELLA SUPABASE
        .insert([
          {
            nome: formData.nome,
            cognome: formData.cognome,
            codiceFiscale: formData.codiceFiscale,
            email: formData.email,
            telefono: formData.telefono,
            data_nascita: formData.dataNascita,
            genere: formData.genere,
            // 'termini_accettati' rimosso dall'inserimento
          },
        ]);

      if (error) {
        console.error('Errore durante l\'inserimento su Supabase:', error);
        let errorMessage = `Errore nell'iscrizione: ${error.message}.`;

        if (error.code === '23505') {
            errorMessage = 'Errore: Un utente con questa email è già iscritto.';
        }
        setMessage(errorMessage);

      } else {
        console.log('Iscrizione inviata con successo!', data);
        setMessage('Iscrizione completata con successo! Ora procederesti al pagamento.');
        // Resetta il form
        setFormData({
          nome: '',
          cognome: '',
          codiceFiscale: '',
          email: '',
          telefono: '',
          dataNascita: '',
          genere: '',
          // 'terminiAccettati' rimosso dal reset
        });
      }
    } catch (err) {
      console.error('Si è verificato un errore inaspettato:', err);
      setMessage('Si è verificato un errore inaspettato durante l\'invio. Riprova.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id= "spazioSotto">
    <div className="section-wave section-wave--top" style={topWaveStyle}></div>
    <div className="container section registration-page">
      <div id="SpaziatoreTitolo"><h2>Modulo di Iscrizione alla Corsa</h2></div>
      <p style={{ color: 'white'}} className="page-description">
        Compila il modulo sottostante per iscriverti alla nostra corsa (costo iscrizione 10 euro).
        <br /><br />
        <strong>Per validare l'iscrizione, è importante seguire questi passaggi:</strong>
        <br /><br />
        <ul style={{ textAlign: 'left'}}>
          <li>Invia una <strong>email</strong> a <strong style={{color: '#ffffff'}}>snail.trail10k@gmail.com</strong></li>
          <li>L'oggetto dell'email deve essere: <strong style={{color: '#ffffff'}}>"[iscrizione-2025-snailTrail10k]-nome.cognome"</strong></li>
          <li>Allega alla email la <strong>ricevuta del bonifico di 10 euro</strong></li>
          <li>Allega un <strong>eventuale certificato medico</strong> (se in possesso, non necessario per iscrizione)</li>
          <li>Effettua il bonifico di iscrizione di 10 euro al seguente IBAN: <strong style={{color: '#ffffff'}}>IT26A0817834340000024004861</strong> (intestato a "Filodrammatica El Lumac")</li>
        </ul>
        Seguire tutti i passaggi è fondamentale per completare e validare la tua iscrizione alla corsa, continua compilando il form sottostante.
      </p>
      {/* Messaggio di feedback all'utente (successo o errore) */}
      {message && <div className={`form-message ${message.includes('Errore') ? 'error' : 'success'}`}>{message}</div>}

      {/* Il form con tutti i campi e il pulsante di invio */}
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
            disabled={loading}
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
          <label htmlFor="codiceFiscale">Codice Fiscale:</label>
          <input
            type="text"
            id="codiceFiscale"
            name="codiceFiscale"
            value={formData.codiceFiscale}
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
          <label htmlFor="telefono">Numero di Telefono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            disabled={loading}
            pattern="[0-9]{10}"
            title="Inserisci un numero di telefono valido (es. 3331234567)"
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
            <option value="altro">Preferisco non specificare</option>
          </select>
        </div>

        {/* Checkbox per i termini e condizioni - RIMOSSO */}

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Invio in corso...' : 'Procedi al Pagamento'}
        </button>
      </form>
    </div>
    
    </div>
  );
}


export default RegistrationPage;