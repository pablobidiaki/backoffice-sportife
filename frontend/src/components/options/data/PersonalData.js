import styles from './PersonalData.module.css'

export default function PersonalData(){
    return(
        <div className={styles.container}>
            <h1> Dados Pessoais </h1>
            <div className={styles.infosContainer}>
                <div>
                    <p className={styles.infoTitle}>Nome</p>
                    <p className={styles.info}>Pablo</p>
                </div>
                <div>
                    <p className={styles.infoTitle}>Sobrenome</p>
                    <p className={styles.info}>Bidiaki</p>
                </div>
            </div>
            <div className={styles.emailContainer}>
                <p className={styles.infoTitle}>Email</p>
                <p className={styles.info}>pablinADM@gmail.com</p>
            </div>
            <div className={styles.infosContainer}>
                <div>
                    <p className={styles.infoTitle}>CPF</p>
                    <p className={styles.info}>45785172844</p>
                </div>
                <div>
                    <p className={styles.infoTitle}>Gênero</p>
                    <p className={styles.info}>Masculino</p>
                </div>
            </div>
            <div className={styles.infosContainer}>
                <div>
                    <p className={styles.infoTitle}>Data de Nascimento</p>
                    <p className={styles.info}>2003-08-24</p>
                </div>
                <div>
                    <p className={styles.infoTitle}>Telefone</p>
                    <p className={styles.info}>(12)98229-8476</p>
                </div>
            </div>
            <button className={styles.edit}>Editar</button>
        </div>
    )
}