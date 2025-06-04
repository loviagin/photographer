import styles from './Booking.module.css';

export default function Booking() {
  return (
    <section className={styles.booking}>
      <div className={styles.bookingContent}>
        <h2>Записаться на фотосессию</h2>
        <p className={styles.bookingSubtitle}>
          Оставьте заявку, и я свяжусь с вами для обсуждения деталей
        </p>
        <form className={styles.bookingForm}>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Ваше имя"
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="tel"
              placeholder="Номер телефона"
              className={styles.formInput}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <select className={styles.formInput} required>
              <option value="">Выберите тип съемки</option>
              <option value="love-story">Love Story</option>
              <option value="family">Семейная</option>
              <option value="children">Детская</option>
              <option value="studio">Студийная</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <textarea
              placeholder="Дополнительная информация"
              className={styles.formTextarea}
              rows={4}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
} 