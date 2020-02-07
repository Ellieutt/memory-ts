import React, { FC } from 'react'
import './Card.css'

const HIDDEN_SYMBOL = '❓'

interface CardProps {
  card: string
  feedback: string
  onClick: (card: string) => void
}

const Card: FC<CardProps> = ({ card, feedback, onClick }) => (
  <div className={`card ${feedback}`} onClick={() => onClick(card)}>
    <span className="symbol">
      {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
    </span>
  </div>
)

export default Card
