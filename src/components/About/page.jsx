import styles from "./about.module.scss";

export default function About() {
  return (
      <section className={styles.section_about} id="about">
        <div className={styles.title}>
          <h2>Sobre nós</h2>
        </div>

        <div className={styles.group_about}>

            <div className={styles.img_about}>
                <figure>
                  <img src="/assets/image3.png" alt="" />
                </figure>
            </div>

            <div className={styles.text_about}>
                <div className={styles.box_text}>
                  <p>
                  Desde a nossa fundação em 1998, temos o compromisso de fornecer cuidados excepcionais aos animais de estimação e orientar os seus tutores sobre como promover uma vida saudável e feliz para eles. Aqui, você encontrará informações valiosas e conselhos especializados para todas as suas necessidades veterinárias. Nossa equipe altamente qualificada está pronta para ajudar você e seu amiguinho peludo. Conte conosco para oferecer os melhores cuidados veterinários possíveis!
                  </p>
                </div>
            </div>
        </div>
      </section> 
  ); 
}
