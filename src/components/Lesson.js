import React, { useState } from 'react';

function Lesson() {
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');

  const handleInputChange = (e) => {
    setWord(e.target.value);
  };

  const handleSourceLangChange = (e) => {
    setSourceLang(e.target.value);
  };

  const handleTargetLangChange = (e) => {
    setTargetLang(e.target.value);
  };

  const handleTranslate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=${sourceLang}|${targetLang}`);
      const data = await response.json();
      setTranslation(data.responseData.translatedText);
    } catch (error) {
      setTranslation('Error fetching translation');
    }
  };

  const langCodeToSpeechLang = (code) => {
    const map = {
      en: 'en-US',
      es: 'es-ES',
      fr: 'fr-FR',
      de: 'de-DE',
      he: 'he-IL',
      ar: 'ar-SA',
      zh: 'zh-CN',
      ja: 'ja-JP',
      ru: 'ru-RU',
    };
    return map[code] || 'en-US';
  };

  const playAudio = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(translation || word);
      utterance.lang = langCodeToSpeechLang(targetLang);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Sorry, your browser does not support text to speech.');
    }
  };

  return (
    <div className="lesson">
      <h2>Lesson Page</h2>
      <form onSubmit={handleTranslate}>
        <input
          type="text"
          value={word}
          onChange={handleInputChange}
          placeholder="Enter a word or phrase to translate"
          required
        />
        <div>
          <label>
            From:
            <select value={sourceLang} onChange={handleSourceLangChange}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="he">Hebrew</option>
              <option value="ar">Arabic</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
              <option value="ru">Russian</option>
            </select>
          </label>
          <label>
            To:
            <select value={targetLang} onChange={handleTargetLangChange}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="he">Hebrew</option>
              <option value="ar">Arabic</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
              <option value="ru">Russian</option>
            </select>
          </label>
        </div>
        <button type="submit">Translate</button>
      </form>
      {translation && (
        <div>
          <p>Translation: {translation}</p>
          <button onClick={playAudio}>Play Audio</button>
        </div>
      )}
    </div>
  );
}

export default Lesson;
