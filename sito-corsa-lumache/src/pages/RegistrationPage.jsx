import liberatoriaPdf from '../assets/LiberatoriaPerPartecipanti.pdf'; // AGGIUNTO: import del PDF
import './RegistrationPage.css'; // Assicurati di avere questo file CSS

// COMMENTATO: Stili di sfondo
/*
const sectionBackgroundStyle = {
      backgroundSize: 'cover',
      whidth: '100%', 
      padding: '60px 0',           
      textAlign: 'center',        
      backgroundColor: '#dd2f8a', 
      position: 'relative', 
      zIndex: '1', 
      overflow: 'hidden', 
    };
*/

const topWaveStyle = {
    position: 'relative',
    left: '0',
    width: '100%',
    height: '50px',
    backgroundRepeat: 'repeat-x',
    backgroundSize: '700px 100%',
    zIndex: '0',
    pointerEvents: 'none',
    top: '0',
    marginTop: '-51px',
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath class='elementor-shape-fill' fill='%23dd2f8a' d='M0,0C166,5,333,100,500,100C667,100,833,5,1000,0L1000,100L0,100L0,0Z'/%3E%3C/svg%3E\")",
  };

function RegistrationPage() {
  // COMMENTATO: Hook per location
  // const location = useLocation();

  // COMMENTATO: Stati del form
  /*
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
    codiceFiscale: '',
    email: '',
    telefono: '',
    dataNascita: '',
    genere: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  */

  // COMMENTATO: Gestori del form
  /*
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const { data, error } = await supabase
        .from('registrations')
        .insert([
          {
            nome: formData.nome,
            cognome: formData.cognome,
            codiceFiscale: formData.codiceFiscale,
            email: formData.email,
            telefono: formData.telefono,
            data_nascita: formData.dataNascita,
            genere: formData.genere,
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
        setMessage('Iscrizione completata con successo!');
        setFormData({
          nome: '',
          cognome: '',
          codiceFiscale: '',
          email: '',
          telefono: '',
          dataNascita: '',
          genere: '',
        });
      }
    } catch (err) {
      console.error('Si è verificato un errore inaspettato:', err);
      setMessage('Si è verificato un errore inaspettato durante l\'invio. Riprova.');
    } finally {
      setLoading(false);
    }
  };

  const handleTitleClick = () => {
    const element = document.getElementById('SpaziatoreTitolo');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    if (location.hash === '#modulo-iscrizione') {
      setTimeout(() => {
        const element = document.getElementById('SpaziatoreTitolo');
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 500);
    }
  }, [location]);
  */

  return (
    <div id="spazioSotto">
      <div className="section-wave section-wave--top" style={topWaveStyle}></div>
      <div className="container section registration-page">
        
        {/* Messaggio principale "See you in 2026" */}
        <div style={{
          textAlign: 'center',
          color: 'white',
          padding: '60px 20px',
          marginBottom: '40px'
        }}>
          <h1 style={{ 
            fontSize: '3.5em', 
            marginBottom: '20px',
            fontFamily: 'Mandarin, cursive',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            color: '#ffffff'
          }}>
            🐌 SnailTrail 10K 🐌
          </h1>
          
          <h2 style={{ 
            fontSize: '2.2em', 
            marginBottom: '20px',
            color: '#f0afcf'
          }}>
            See You in 2026! 
          </h2>
          
          <p style={{ 
            fontSize: '1.2em', 
            maxWidth: '600px',
            margin: '0 auto 30px auto',
            lineHeight: '1.6',
            opacity: '0.9'
          }}>
            Le iscrizioni per l'edizione 2025 sono chiuse.<br />
            Ci vediamo il prossimo anno per una nuova avventura!
          </p>
          
          <div style={{
            fontSize: '2em',
            marginBottom: '20px'
          }}>
            🏃‍♂️🏃‍♀️🎯
          </div>
        </div>

        {/* Sezione download liberatoria */}
        <div className="liberatoria-download" style={{
          margin: '40px auto',
          padding: '30px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(5px)',
          textAlign: 'center',
          maxWidth: '600px'
        }}>
          <h3 style={{ 
            color: 'white', 
            marginBottom: '15px',
            fontSize: '1.4em' 
          }}>
            📄 Documenti Utili
          </h3>
          
          <a 
            href={liberatoriaPdf} 
            download="LiberatoriaPerPartecipanti.pdf"
            className="download-link"
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
              color: '#dd2f8a',
              padding: '15px 25px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.1em',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
              border: '2px solid transparent'
            }}
          >
            📥 Scarica la Liberatoria per Partecipanti (PDF)
          </a>
          
          <p style={{ 
            color: '#e0e0e0', 
            fontSize: '0.9em', 
            marginTop: '15px', 
            fontStyle: 'italic' 
          }}>
            Documento utile per le future edizioni della corsa.
          </p>
        </div>

        {/* COMMENTATO: Tutto il contenuto del form e delle istruzioni */}
        {/*
        <div id="SpaziatoreTitolo">
          <h2 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
            Modulo di Iscrizione alla Corsa
          </h2>
        </div>

        <p style={{ color: 'white'}} className="page-description">
          Compila il modulo sottostante per iscriverti alla nostra corsa (costo iscrizione 10 euro).
          <br /><br />
          <strong>Per validare l'iscrizione, è importante seguire questi passaggi:</strong>
          <br /><br />
          <ul style={{ textAlign: 'left'}}>
            <li>Effettua il bonifico di iscrizione di 10 euro al seguente IBAN...</li>
            <li>Invia una email...</li>
            <li>L'oggetto dell'email deve essere...</li>
            <li>Allega alla email la ricevuta del bonifico...</li>
            <li>Allega alla email la Liberatoria...</li>
            <li>Allega un eventuale certificato medico...</li>
          </ul>
          Seguire tutti i passaggi per ogni singolo partecipante...
        </p>

        {message && <div className={`form-message ${message.includes('Errore') ? 'error' : 'success'}`}>{message}</div>}

        <form onSubmit={handleSubmit} className="registration-form">
          [... tutto il form commentato ...]
        </form>
        */}

      </div>
    </div>
  );
}

export default RegistrationPage;