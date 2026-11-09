'use client';
import { useState } from 'react';
import { useLang } from '../LanguageContext';
import { CLUB, PAGE_PHOTOS } from '../data';

const T = {
  pl: {
    subtitle: 'Jesteśmy tu dla Ciebie',
    title: 'KONTAKT',
    infoLabel: 'Dane kontaktowe',
    infoTitle: 'ODEZWIJ SIĘ DO NAS',
    details: [
      [null, 'Adres klubu', CLUB.address + '\n' + CLUB.postcode],
      [null, 'Stadion', CLUB.stadiumAddress],
      [null, 'Telefon', CLUB.phone],
      [null, 'E-mail', CLUB.email],
    ],
    social: 'Media społecznościowe',
    formTitle: 'NAPISZ DO NAS',
    soonTitle: 'Formularz wkrótce',
    soon: 'Formularz kontaktowy zostanie uruchomiony wkrótce. Do tego czasu zadzwoń do nas lub napisz na Facebooku.',
    fields: [['Imię i nazwisko', 'name', 'text'], ['Adres e-mail', 'from', 'email'], ['Temat', 'subject', 'text']],
    message: 'Wiadomość',
    send: 'Otwórz w programie pocztowym →',
  },
  en: {
    subtitle: 'We’re here for you',
    title: 'CONTACT',
    infoLabel: 'Contact details',
    infoTitle: 'GET IN TOUCH',
    details: [
      [null, 'Club address', CLUB.address + '\n' + CLUB.postcode + ', Poland'],
      [null, 'Stadium', CLUB.stadiumAddress],
      [null, 'Phone', CLUB.phone],
      [null, 'Email', CLUB.email],
    ],
    social: 'Social media',
    formTitle: 'SEND US A MESSAGE',
    soonTitle: 'Contact form coming soon',
    soon: 'The contact form will be switched on soon. Until then, please call us or message us on Facebook.',
    fields: [['Full name', 'name', 'text'], ['Email address', 'from', 'email'], ['Subject', 'subject', 'text']],
    message: 'Message',
    send: 'Open in your email app →',
  },
};

const inputStyle = { width: '100%', padding: '0.85rem 1rem', background: 'var(--dark-3)', border: '1px solid var(--dark-3)', color: 'var(--white)', fontFamily: 'var(--font-body)', fontSize: '0.95rem', outline: 'none' };
const labelStyle = { display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: 2, textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--grey)' };

export default function ContactPage() {
  const { lang } = useLang();
  const c = T[lang];
  const [f, setF] = useState({ name: '', from: '', subject: '', body: '' });
  const set = k => e => setF({ ...f, [k]: e.target.value });

  const mailto = () => {
    const body = f.body + '\n\n— ' + f.name + (f.from ? ' (' + f.from + ')' : '');
    window.location.href = 'mailto:' + CLUB.email + '?subject=' + encodeURIComponent(f.subject) + '&body=' + encodeURIComponent(body);
  };

  return (
    <>
      <div className="page-header has-photo" style={{ '--ph': "url('" + PAGE_PHOTOS.contact + "')" }}>
        <div className="container">
          <div className="subtitle">{c.subtitle}</div>
          <h1>{c.title}</h1>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="eyebrow">{c.infoLabel}</div>
              <h2 className="block-title">{c.infoTitle}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {c.details.map(([, label, value]) => (
                  <div key={label} className="info-card">
                    <div className="info-label">{label}</div>
                    <div className="info-value">{value}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '1rem', padding: '1.25rem', background: 'var(--dark-2)', border: '1px solid var(--dark-3)' }}>
                <div style={{ color: 'var(--grey)', fontSize: '0.75rem', fontFamily: 'var(--font-heading)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: '0.75rem' }}>{c.social}</div>
                <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: 1 }}>Facebook →</a>
              </div>
            </div>

            <div style={{ background: 'var(--dark-2)', border: '1px solid var(--dark-3)', padding: '2.5rem' }}>
              {CLUB.email ? (
                <>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: 1, marginBottom: '2rem' }}>{c.formTitle}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {c.fields.map(([label, key, type]) => (
                      <div key={key}>
                        <label style={labelStyle}>{label}</label>
                        <input type={type} value={f[key]} onChange={set(key)} style={inputStyle} />
                      </div>
                    ))}
                    <div>
                      <label style={labelStyle}>{c.message}</label>
                      <textarea rows={5} value={f.body} onChange={set('body')} style={{ ...inputStyle, resize: 'vertical' }} />
                    </div>
                    <button onClick={mailto} style={{ padding: '1rem', background: 'var(--green)', border: '1px solid var(--gold)', color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: 3, textTransform: 'uppercase', cursor: 'pointer' }}>{c.send}</button>
                  </div>
                </>
              ) : (
                <>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: 1, marginBottom: '1rem' }}>{c.soonTitle}</h3>
                  <p style={{ color: 'var(--light-grey)', lineHeight: 1.8 }}>{c.soon}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
