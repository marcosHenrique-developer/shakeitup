import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Modal.module.css';

export function LevelUpModal() {
  const { level, closeModal } = useContext(ChallengesContext);
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcalçou um novo level</p>
        <button type="button" onClick={closeModal}>
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </div>
    </div>
  );
}
