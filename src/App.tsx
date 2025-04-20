import { useState, useEffect } from 'react'
import characterData from './data/characterData.json'
import { generateCharacter } from './utils/characterGenerator'
import './App.css'

function App() {
  const [character, setCharacter] = useState({
    personality: '',
    hobby: '',
    occupation: '',
    trait: ''
  })

  useEffect(() => {
    generateNewCharacter()
  }, [])

  const generateNewCharacter = () => {
    setCharacter(generateCharacter(characterData))
  }

  return (
    <div className="container">
      <h1>今日份人设生成器</h1>
      <div className="character-card">
        <div className="character-item">
          <span className="label">🤔 性格：</span>
          <span className="value">{character.personality}</span>
        </div>
        <div className="character-item">
          <span className="label">🎨 爱好：</span>
          <span className="value">{character.hobby}</span>
        </div>
        <div className="character-item">
          <span className="label">💼 职业：</span>
          <span className="value">{character.occupation}</span>
        </div>
        <div className="character-item">
          <span className="label">✨ 特质：</span>
          <span className="value">{character.trait}</span>
        </div>
      </div>
      <button className="generate-btn" onClick={generateNewCharacter}>
        生成新的人设
      </button>
    </div>
  )
}

export default App
