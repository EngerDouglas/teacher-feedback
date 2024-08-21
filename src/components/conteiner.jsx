import React from "react";
import '../css/home.css'

function conteiner(){
    return(
        <>
            <div className="justify-content-center d-flex">
                <h3>Materias</h3>
            </div>
            <div className="justify-content-center d-flex">
                <p>
                <spam>"En cada materia puedes ver la lista de profesores"</spam>
                </p>
            </div>
            <div id="container_Materia" className="d-flex justify-content">
                <div className="Carrusel_Materia">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-8 col-lg-6 materia">
                    {/* Section Heading*/}
                    <div
                        className="section_heading text-center wow fadeInUp"
                        data-wow-delay="0.2s"
                        style={{
                        visibility: "visible",
                        animationDelay: "0.2s",
                        animationName: "fadeInUp"
                        }}
                    >
                        <div className="line" />
                    </div>
                    </div>
                </div>
                <div className="row">
                    {/* Single Advisor*/}
                    <div className="col-12 col-sm-6 col-lg-3">
                    <div
                        className="single_advisor_profile wow fadeInUp"
                        data-wow-delay="0.2s"
                        style={{
                        visibility: "visible",
                        animationDelay: "0.2s",
                        animationName: "fadeInUp"
                        }}
                    >
                        {/* Team Thumb*/}
                        <div className="advisor_thumb">
                        <img src="../img/mat.jpg" alt="" />
                        {/* Social Info*/}
                        <div className="social-info">
                            <a href="#">
                            <i className="fa fa-facebook" />
                            </a>
                            <a href="#">
                            <i className="fa fa-twitter" />
                            </a>
                            <a href="#">
                            <i className="fa fa-linkedin" />
                            </a>
                        </div>
                        </div>
                        {/* Team Details*/}
                        <div className="single_advisor_details_info">
                        <h6>Nombre de materia</h6>
                        <p className="designation">Founder &amp; CEO</p>
                        </div>
                    </div>
                    </div>
                    {/* Single Advisor*/}
                    <div className="col-12 col-sm-6 col-lg-3 materia">
                    <div
                        className="single_advisor_profile wow fadeInUp"
                        data-wow-delay="0.3s"
                        style={{
                        visibility: "visible",
                        animationDelay: "0.3s",
                        animationName: "fadeInUp"
                        }}
                    >
                        {/* Team Thumb*/}
                        <div className="advisor_thumb">
                        <img src="../img/mat.jpg" alt="" />
                        {/* Social Info*/}
                        <div className="social-info">
                            <a href="#">
                            <i className="fa fa-facebook" />
                            </a>
                            <a href="#">
                            <i className="fa fa-twitter" />
                            </a>
                            <a href="#">
                            <i className="fa fa-linkedin" />
                            </a>
                        </div>
                        </div>
                        {/* Team Details*/}
                        <div className="single_advisor_details_info">
                        <h6>Nombre de materia</h6>
                        <p className="designation">UI Designer</p>
                        </div>
                    </div>
                    </div>
                    {/* Single Advisor*/}
                    <div className="col-12 col-sm-6 col-lg-3 materia">
                    <div
                        className="single_advisor_profile wow fadeInUp"
                        data-wow-delay="0.4s"
                        style={{
                        visibility: "visible",
                        animationDelay: "0.4s",
                        animationName: "fadeInUp"
                        }}
                    >
                        {/* Team Thumb*/}
                        <div className="advisor_thumb">
                        <img src="../img/mat.jpg" alt="" />
                        {/* Social Info*/}
                        <div className="social-info">
                            <a href="#">
                            <i className="fa fa-facebook" />
                            </a>
                            <a href="#">
                            <i className="fa fa-twitter" />
                            </a>
                            <a href="#">
                            <i className="fa fa-linkedin" />
                            </a>
                        </div>
                        </div>
                        {/* Team Details*/}
                        <div className="single_advisor_details_info">
                        <h6>Nombre de materia</h6>
                        <p className="designation">Developer</p>
                        </div>
                    </div>
                    </div>
                    {/* Single Advisor*/}
                    <div className="col-12 col-sm-6 col-lg-3 materia">
                    <div
                        className="single_advisor_profile wow fadeInUp"
                        data-wow-delay="0.5s"
                        style={{
                        visibility: "visible",
                        animationDelay: "0.5s",
                        animationName: "fadeInUp"
                        }}
                    >
                        {/* Team Thumb*/}
                        <div className="advisor_thumb">
                        <img src="../img/mat.jpg" alt="" />
                        {/* Social Info*/}
                        <div className="social-info">
                            <a href="#">
                            <i className="fa fa-facebook" />
                            </a>
                            <a href="#">
                            <i className="fa fa-twitter" />
                            </a>
                            <a href="#">
                            <i className="fa fa-linkedin" />
                            </a>
                        </div>
                        </div>
                        {/* Team Details*/}
                        <div className="single_advisor_details_info">
                        <h6>Nombre de materia</h6>
                        <p className="designation">Marketing Manager</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="justify-content d-flex margin-all">
                <button className="arrow arrow-left btnparalelo">❮</button>
                <button className="arrow arrow-right btnparalelo">❯</button>
            </div>
            <footer>
                <div className="footer-content">
                <div className="footer-section about">
                    <h2>Sobre Nosotros</h2>
                    <p>
                    En Revisión de Maestros, nos comprometemos a proporcionar una
                    plataforma transparente y confiable donde los estudiantes puedan{" "}
                    </p>
                    <p>
                    {" "}
                    compartir sus experiencias educativas. Creemos en la importancia de la
                    retroalimentación constructiva para mejorar la calidad de la
                    educación. ¡Únete a nuestra comunidad y ayuda a construir un futuro
                    académico mejor para todos!
                    </p>
                    <div className="contact">
                    <span>
                        <i className="fas fa-envelope" /> teacher-feedback@gmail.com
                    </span>
                    </div>
                    <div className="socials">
                    <a href="#">
                        <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                        <i className="fab fa-instagram" />
                    </a>
                    </div>
                </div>
                </div>
                <div className="footer-bottom">
                © 2024 Nombre de Tu Empresa. Todos los derechos reservados.
                </div>
            </footer>
        </>

    )
}

export default conteiner