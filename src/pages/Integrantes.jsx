import Logo from "../assets/logo.svg"
import Menu from "../assets/menu.svg"
import Bernardo from "../assets/bernardo.svg"
import Anny from "../assets/anny.svg"
import Nicole from "../assets/nicole.svg"
import Insta from "../assets/insta.svg"

export default function Integrantes() {
  return (
    <div className="flex flex-col items-center w-full h-full">
        <div id="mostrarFechar" className="fixed flex z-20 justify-center items-center w-full h-full bg-white/[.60] hidden">
            <div className="bg-white text-darkblue font-semibold flex flex-col items-start px-10 p-6 gap-2 rounded-md text-lg">
                <button onClick={fecharMenu}>x</button>
                <a href="/"><p>HOME</p></a>
                <a href="/Guia"><p>GUIA DE USO</p></a>
                <a href="/Materiais"><p>MATERIAIS</p></a>
                <a href="/Integrantes"><p>INTEGRANTES</p></a>
                <a href="/Ref"><p>BIBLIOGRAFIA</p></a>
            </div>
        </div>

        <header className="w-full"> 
            <button onClick={usarMenu}><img src={Menu} alt="Menu em formato hamburguer" className="fixed w-7 ml-14 mt-2 z-10" /></button>
        </header>

        <header className="flex w-screen justify-center py-8 fixed bg-white">           
            <img src={Logo} alt="Logo locapet" className="w-24" />
        </header>

        <h1 className="pt-24 uppercase font-bold text-xl text-darkblue mb-16">Conheça nossa <span className="text-orange">equipe</span></h1>
        
        <section className="flex text-xs text-white font-light gap-2">
            <div className="bg-darkblue w-28 p-3 flex flex-col gap-4 items-center">
                <img src={Anny} alt="Foto da integrante Anny" className="h-20" />

                <div className="flex flex-col gap-1">
                    <h2>Anny Elly Pantoja</h2>

                    <p> Responsável por adquirir os componentes físicos do projeto e a integração entre eles.</p>
                </div>

                <a href="https://www.instagram.com/annyelly_pantoja?igsh=djVqYWNmdDNlbDZ3"><img src={Insta} alt="Foto da logo do instagram" /></a>
            </div>

            <div className="bg-orange w-28 p-3 flex flex-col gap-4 items-center">
                <img src={Bernardo} alt="Foto do integrante Bernardo" className="h-20" />

                <div className="flex flex-col gap-1">
                    <h2>Bernardo Raposo</h2>

                    <p> Futuro designer, responsável pela interface do site e aspectos estéticos do nosso projeto</p>
                </div>

                <a href="https://www.instagram.com/last_zey?igsh=MThrMDlrM3hjazlnbQ%3D%3D&utm_source=qr"><img src={Insta} alt="Foto da logo do instagram" /></a>
            </div>

            <div className="bg-darkblue w-28 p-3 flex flex-col gap-4 items-center">
                <img src={Nicole} alt="Foto da integrante Nicole" className="h-20" />

                <div className="flex flex-col gap-1">
                    <h2>Nicole de Sá</h2>

                    <p> Responsável pelo software do projeto e pela sua conexão com os componentes físicos.</p>
                </div>

                <a href="https://www.instagram.com/eine_nick/"><img src={Insta} alt="Foto da logo do instagram" /></a>
            </div>
        </section>

        <section className="flex px-6 text-xs py-8 w-full justify-between text-end pt-20">
            <img src={Logo} alt="Logo locapet"/>

            <p className="max-w-52">Alguma dúvida? Entre em contato pelo 
            e-mail: locapet.support@gmail.com</p>
        </section>
    </div>
  )
}

function usarMenu() {
    document.getElementById('mostrarFechar').classList.remove("hidden")
}

function fecharMenu() {
    document.getElementById('mostrarFechar').classList.add("hidden")
}