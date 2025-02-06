// src/App.jsx

import './App.css'
import { useState } from 'react';

const App = () => {

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
      },
    ]

  )

  let { totalStrength, totalAgility } = team.reduce(
    (totals, fighter) => {
      totals.totalStrength += fighter.strength || 0
      totals.totalAgility += fighter.agility || 0
      console.log(totals)
      return totals;
    },
    { totalStrength: 0, totalAgility: 0 }
  )

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter])
      removeSelected(fighter.id)
      setMoney(money - fighter.price)
    } else alert("you donot have enough $$")
  }

  const removeSelected = (id) => {
    const restzombieFighters = zombieFighters.filter((fighter) => {
      return fighter.id !== id
    })
    setZombieFighters(restzombieFighters)
  }

  return (
    <div>

      <h1>Zombie Apocalypse Team</h1>
      <div id="UI">
        <h3>Money: ${money}</h3>
        <h3>Total Strength: {totalStrength}</h3>
        <h3>Total Agility: {totalAgility}</h3>
        {!team.length && <h2>Pick some team members!</h2>}
        <ul>
          {team.map((fighter) => {
            return (
              <li key={fighter.id}>
                <img src={fighter.img} alt={fighter.name} />
                <br /> <br />
                {fighter.name}
                <p>Price: {fighter.price}$</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
              </li>
            )
          })}
        </ul>
      </div>
      <div id="All">
        <h1>Zombie Fighters: </h1>
        <ul>
          {zombieFighters.map((fighter) => {
            return (
              <li key={fighter.id}>
                <img src={fighter.img} alt={fighter.name} />
                <br /> <br />
                {fighter.name}
                <p>Price: {fighter.price}$</p>
                <p>Strength: {fighter.strength}</p>
                <p>Agility: {fighter.agility}</p>
                <button onClick={() => handleAddFighter(fighter)}>Add</button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>



  );
}

export default App
