import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className="Hero">
      <div className="flex-item-centre tab_title">
        <h2 className="title">Joyeux Noël !</h2>
        <p></p>
      </div>
      <div className="heroTxt">
        <p>
          Après des semaines de recherches et d'attente, les produits
          sélectionnés pour Noël sont enfin disponibles ! Mes artisans aux super
          pouvoirs ont travaillé dur pour créer ou recréer une série de
          produits, tous plus beaux les uns que les autres. En espérant que tous
          ces nouveaux objets vous plairont, je vous embrasse ! Laetitia
        </p>
        <a
          className="btn btn-info black btn-lg"
          href="/collections/selection-de-noel"
          aria-label="link to Selection"
        >
          <span>DÉCOUVRIR</span>
        </a>
      </div>
    </div>
  )
}

export default Hero
