import styles from './NavBar.module.css';

import { FaHome } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import { MdModeEditOutline } from 'react-icons/md';
import { IoAddCircleOutline } from 'react-icons/io5';
import { AiFillDelete } from 'react-icons/ai';

export default function NavBar(){
    return(
        <div className={styles.container}>
            <img src='https://i.imgur.com/83LRmyf.png' alt='Logo SportLife' />
            <p className={styles.name}>Pablo Bidiaki</p>
            <p className={styles.office}>Admin</p>
            <div className={styles.iconAndOption}>
                <FaHome />
                <p>Dashboard</p>
            </div>
            <p className={styles.title}>Dados</p>
            <div className={styles.iconAndOption}>
                <BsPersonFill />
                <p>Informações Pessoais</p>
            </div>
            <p className={styles.title}>Ações</p>
            <div className={styles.iconAndOption}>
                <IoAddCircleOutline />
                <p>Adicionar Produto</p>
            </div>
            <div className={styles.iconAndOption}>
                <MdModeEditOutline />
                <p>Editar Produto</p>
            </div>
            <div className={styles.iconAndOption}>
                <AiFillDelete />
                <p>Deletar Produto</p>
            </div>
        </div>
    )
}