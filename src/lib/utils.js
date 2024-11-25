import {
  PLAYER_LABELS,
  TURN_LABELS,
  MODES,
} from './constants'

export function getAlternate(p) {
  if (p === 'yellow') return 'red'
  if (p === 'red') return 'yellow'
}

export function getPlayerLabel(mode, player) {
  if (mode === MODES.withCPU) {
    return PLAYER_LABELS.vsCpu[player]
  }

  if (mode === MODES.withPlayer) {
    return PLAYER_LABELS.vsPlayer[player]
  }
}

export function getTurnLabel(mode, player) {
  if (mode === MODES.withCPU) {
    return TURN_LABELS.vsCpu[player]
  }

  if (mode === MODES.withPlayer) {
    return TURN_LABELS.vsPlayer[player]
  }
}
