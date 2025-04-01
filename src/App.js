import React from 'react';
import './App.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Header from './components/Header.js';
import Section from './components/Section.js';
import Footer from './components/Footer.js';
import Service from './components/Service.js';



function App() {
    return (
    < >
    
        <Header />
        <Section id="inicio" title="Bienvenida | Welcome">
        <p>✨ Astrólogo y guía espiritual con enfoque en bienestar integral.

✨ Astrologer and spiritual guide with a focus on holistic well-being.

🌿 Sanador holístico especializado en astrología, energía y salud emocional.

🌿 Holistic healer specialized in astrology, energy, and emotional health.

🔮 Acompañamiento espiritual y astrológico para el desarrollo personal y el bienestar.

🔮 Spiritual and astrological guidance for personal growth and well-being.</p>
        </Section>
        
        <Section id="servicios" title="Servicios | services">
        <div className="services">
        <Service title="Rituales para el amor y union | Love and union rituals." description="Armonización de relaciones y fortalecimiento de la conexión espiritual.Harmonizing relationships and strengthening spiritual connections" />
        <Service title="Lecturas de tarot | Tarot readings " description="Descubre respuestas y guía para tu vida a traves del tarot.
        Find answers and guidance for your life through tarot readings." />
        <Service title="Limpiezas energeticas | Energy cleansings." description="Elimina bloqueos y energias negativas para restaurar el equilibrio.
        Remove blockages and negative energies to restore balance." />
        <Service title="Astrología y carta natal | Astrology and natal chart" description="explora tu destino y potencial a través de la astrología.
        Explore your destiny and potencial through astrology" />
        </div>
        </Section>
        <div className="overlay"></div>

        <section className="testimonials">
    <h2>Testimonios | testimonials</h2>
    <p>"Estaba pasando por una crisis en mi relación y nada parecía funcionar. Después de seguir las indicaciones del ritual para el amor, sentí un cambio en nuestra energía. Ahora, mi pareja y yo estamos más unidos que nunca. ¡Realmente transformador!"

    "I was going through a crisis in my relationship, and nothing seemed to work. After following the love ritual guidance, I felt a shift in our energy. Now, my partner and I are more connected than ever. Truly life-changing!"


    <br /> 
    - Satisfied customer.</p>
    <p>"Durante meses me sentí agotada y rodeada de negatividad. Después de mi sesión de limpieza energética, sentí un alivio inmediato, más positividad y una gran paz interior. ¡Era justo lo que necesitaba!"

    "For months, I felt drained and surrounded by negativity. After my energy cleansing session, I immediately felt lighter, more positive, and at peace. It was exactly what I needed!"" <br /> 
    - Lucky customer.</p>

    <p>"Comprender mi carta natal me ayudó a ver mis fortalezas, desafíos y propósito de vida de una manera completamente nueva. Fue una experiencia reveladora que me dio autoconocimiento y orientación para el futuro."

    "Understanding my birth chart helped me see my strengths, challenges, and life path in a whole new way. It was an eye-opening experience that gave me deep self-awareness and guidance for the future." <br /> 
    - Inspired customer.</p>

    <p>"Me sentía perdida y sin saber qué camino tomar. La lectura de tarot fue increíblemente precisa y me dio la claridad que necesitaba. ¡Era como si las cartas supieran exactamente lo que tenía en mi corazón!"

    "I was feeling lost and unsure about which path to take. The tarot reading was incredibly accurate and gave me the clarity I needed. It was  like the cards knew exactly what was in my heart!" <br /> 
    - Transformed customer.</p>
</section>

        <Section id="contacto" title="Contacto | Contact">
        <p>You can contact me through my social media or WhatsApp, click on the icons to get in touch with me.
          Puedes contactarme a través de mis redes sociales o WhatsApp. Haz clic en los íconos para comunicarte conmigo.</p>
        <div className="social-icons">
            <a href="https://www.facebook.com/share/193UHrXmiX/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
            </a>
          <a href="https://www.instagram.com/ile.ifa_aye?igsh=YzJjZ3N1cHBjaDBp&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://wa.me/+13369953585" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
          </a>
        </div>
      </Section>
      <Footer />
    </>
  );
}

export default App;
