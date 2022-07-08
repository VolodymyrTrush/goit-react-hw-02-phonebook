import styles from './ContactItem.module.scss';

// Принимает один контакт и метод для удаления контакта
const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      <span className={styles.name}>{contact.name}: </span>
      <a href={`tel:${contact.number}`} className={styles.number}>
        {contact.number}
      </a>
      <button
        className={styles.button}
        type="button"
        onClick={() => onDeleteContact(contact.id)} // Метод на клике, принимает ID контакта
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
