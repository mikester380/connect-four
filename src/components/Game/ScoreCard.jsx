import clsx from 'clsx'
import s from './ScoreCard.module.scss'

export default function ScoreCard({ owner, score, Icon }) {
  return (
    <div className={s.score_card}>
      <Icon className={s.score_card_icon} />
      <p className={s.score_card_owner}>{owner}</p>
      <p className={s.score_card_score}>{score}</p>
    </div>
  )
}
