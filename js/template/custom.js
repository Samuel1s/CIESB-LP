/*-- Header template --*/
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav class='navbar fixed-top navbar-expand-lg navbar-light scrolling-navbar'>
                    <a id='logo' class='navbar-brand' href='#page-top'><img
                            src='./img/ciesb-imagens-gerais/logo-ciesb-escola-evangelica.png'></a>
                    <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav'
                        aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span class='navbar-toggler-icon'></span>
                    </button>
                    <div class='collapse navbar-collapse' id='navbarNav'>
                        <ul class='navbar-nav'>
                            <li class='nav-item'>
                                <a class='nav-link' href='#home'>Inicio</a>
                            </li>
                            <li class='nav-item'>
                                <a class='nav-link' href='#about'>Sobre Nós</a>
                            </li>
                            <li class='nav-item'>
                                <a class='nav-link' href='#structure'>Estrutura</a>
                            </li>
                            <li class='nav-item'>
                                <a class='nav-link' href='#methodology'>Metodologia</a>
                            </li>
                            <li class='nav-item'>
                                <a class='nav-link' href='#activities'>Atividades Curriculares</a>
                            </li>
                            <li class='nav-item'>
                                <a class='nav-link' href='#testimonial'>Depoimentos</a>
                            </li>
                            <li class='nav-item'>
                                <a id='enroll-button' class='nav-link' href='#' data-toggle='modal'
                                    data-target='#my-modal-dialog'>Pré-Matrícula</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        `    
    }
}

customElements.define('my-header', MyHeader)
/*-- End Header template --*/

/*-- Footer template --*/
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class='p-4'>
                <a id='logo-footer' href='#section-home'><img src='./img/ciesb-imagens-gerais/ciesb-logo-invertida.png'
                        alt='logo da escola em preto e branco.' width='100px'></a>

                <div class='row mt-4'>
                    <div class='col-md d-md-flex flex-md-column'>
                        <div class='footer-content-text'>
                            <a class='mt-2 mr-3' href='tel:+556135633402'><i class='fas fa-phone'></i>&nbsp;&nbsp;(61)
                                3563-3402</a>
                            <a class='mt-2 mr-3' href='mailto:secretaria@ciesb.com.br' target='_blank'><i
                                    class='fas fa-envelope'></i>&nbsp;&nbsp;secretaria@ciesb.com.br</a>
                        </div>
                        <div class='footer-content-text'>
                            <a class='mt-2 mr-3' href='mailto:coordenacao@ciesbdf.com.br' target='_blank'><i
                                    class='fas fa-envelope'></i>&nbsp;&nbsp;coordenacao@ciesb.com.br</a>
                            <a class='mt-2 mr-3' href='mailto:financeiro@ciesbdf.com.br' target='_blank'><i
                                    class='fas fa-envelope'></i>&nbsp;&nbsp;financeiro@ciesb.com.br</a>
                        </div>
                        <div class='footer-content-text'>
                            <a class='mt-2 mr-3' href='mailto:oportunidades.ciesbdf@gmail.com' target='_blank'><i
                                    class='fas fa-envelope'></i>&nbsp;&nbsp;Trabalhe Conosco</a>
                        </div>
                        <p class='mt-2'>CNPJ: 34.921.170/0001-20</p>
                    </div>
                    <div class='col-md'>
                        <ul>
                            <li><a href='#about'>Sobre Nós</a></li>
                            <li><a href='#structure'>Estrutura</a></li>
                            <li><a href='#methodology'>Metodologia</a></li>
                            <li><a href='#activities'>Atividades Curriculares</a></li>
                            <li><a href='#testimonial'></a>Depoimentos</a></li>
                        </ul>
                    </div>
                </div>

                <div id='line-footer'></div>

                <div class='row mt-4'>
                    <div class='col-md'>
                        <p>Desenvolvido por AdvanceDigital &copy; Todos os direitos reservados a CIESB <span
                                id='year'>${new Date().getFullYear()}</span>.
                        </p>
                    </div>
                    <div class='social-icons col-md align-self-end'>
                        <a class='youtube'><i class='fab fa-youtube'></i></a>
                        <a href='https://www.instagram.com/ciesb_df' target='_blank' class='instagram'><i
                                class='fab fa-instagram'></i></a>
                        <a href='https://www.facebook.com/ciesbdf' target='_blank' class='facebook'><i
                                class='fab fa-facebook-square'></i></a>
                    </div>
                </div>
            </footer>
        `    
    }
}

customElements.define('my-footer', MyFooter)
/*-- End Footer template --*/