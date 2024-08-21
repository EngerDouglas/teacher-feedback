import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../img/Logo.png'
import '../css/form.css';

const TeacherFeedback = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <img src={logo} alt="logo" className="logo" />
              <h6 className="mb-0 pb-3 mb">
                <span>Log In </span><span>Sign Up</span>
              </h6>
              <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <form id="form-Log-In" action="" method="post">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" required />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" required />
                          </div>
                          <button id="enterbtn" type="Enter" className="btn mt-4">ENTER</button>
                          <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <form id="form-create-user" action="" method="post" onSubmit="return Submit()">
                        <div className="section text-center" id="form-user">
                          <h4 className="mb-4 pb-3">Sign Up</h4>
                          <div className="form-group">
                            <input type="text" name="logname" className="form-style" placeholder="Username" id="signname" minLength="10" required />
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="signemail" required />
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="signpass" minLength="8" required />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <div className="form-group mt-2">
                            <input type="password" name="logverifypass" className="form-style" placeholder="Verify Password" id="signverifypass" minLength="8" required />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <div className="form-group mt-2">
                            <select id="opcionesCareer" name="opciones" className="form-style">
                              <option value="">Choose Your Career</option>
                              <option value="opcion1">Ingenieria en Ciencias de la Computacion</option>
                              <option value="opcion2">Ingenieria Civil</option>
                              <option value="opcion3">Ingenieria Industrial y de Sistemas</option>
                              <option value="opcion4">Ingeniera Electrica</option>
                              <option value="opcion5">Ingenieria Electromecánica</option>
                              <option value="opcion6">Ingenieria Electrónica</option>
                              <option value="opcion7">Ingenieria Mecanica</option>
                              <option value="opcion8">Ingenieria Telematica</option>
                              <option value="opcion9">Matemática Orientada a la Educación Secundaria</option>
                              <option value="opcion10">Química Orientada a la Educación Secundaria</option>
                              <option value="opcion11">Estomatologia</option>
                              <option value="opcion12">Medicina</option>
                              <option value="opcion13">Nutricion y Dietetica</option>
                              <option value="opcion14">Terapia Fisica</option>
                              <option value="opcion15">Arquitectura</option>
                              <option value="opcion16">Ciencias Sociales Orientada a la Educación Secundaria</option>
                              <option value="opcion17">Comunicación Audiovisual y Artes Cinematográficas</option>
                              <option value="opcion18">Comunicación Corporativa</option>
                              <option value="opcion19">Comunicación Social</option>
                              <option value="opcion20">Derecho</option>
                              <option value="opcion21">Diseño e Interiorismo</option>
                              <option value="opcion22">Educación</option>
                              <option value="opcion23">Filosofia</option>
                              <option value="opcion24">Lengua y Literatura Orientada a la Educación Secundaria</option>
                              <option value="opcion25">Lenguas Extranjeras Concentración Inglés</option>
                              <option value="opcion26">Psicología</option>
                              <option value="opcion27">Administración de Empresa</option>
                              <option value="opcion28">Administración Hotelera</option>
                              <option value="opcion29">Dirección Empresarial</option>
                              <option value="opcion30">Economía</option>
                              <option value="opcion31">Gestión Financiera y Auditoría</option>
                              <option value="opcion32">Marketing</option>
                              <option value="opcion33">Mercadotecnia</option>
                              <option value="opcion34">Hospitalidad y Turismo</option>
                              <option value="opcion35">Gastronomía y Artes Culinarias</option>
                            </select>
                          </div>
                          <button id="Createbtn" className="btn mt-4" type="Submit">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      <script src="../js/user.js"></script>
    </div>
  );
};

export default TeacherFeedback;
