import {OtButton} from "@/components/button.jsx"

export default function Home() {
  return (
    <section className=' flex flex-col w-full h-full px-1'>
      <div className=' flex justify-center items-center w-full h-full text-white bg-gradient-to-t from-[#121212] to-[#1c1c1c]'>
        <div className=' flex flex-col items-center w-[380px] h-[450px] text-white bg-gradient-to-b from-[#121212] to-[#1c1c1c]'>
          <h1 className=' my-4 text-3xl font-bold '>Inicia sesión</h1>
          <hr className=" w-[340px] border-0.5 opacity-30 border-b-slate-400 mb-6"  />  
          <div className=' flex flex-col w-4/5 text-white '>
            <form className="flex flex-col ">
              <label className="mb-1 font-bold">Correo electrónico de usuario</label>
              <input type="mail" placeholder="mail@example.com" className=" h-12 rounded-md border border-slate-400 bg-[#121212] p-3 mb-4 focus:border-[#683791] outline-none focus:shadow-md focus:shadow-[#683791]"></input>
              <label className="mb-1 font-bold">Contraseña</label>
              <input type="password" placeholder="*****" className=" h-12 rounded-md border border-slate-400 bg-[#121212] p-3 focus:border-[#683791] outline-none focus:shadow-md focus:shadow-[#683791] mb-6"></input>
              <button className="w-full rounded-xl h-10 bg-[#683791] mb-6">Iniciar sesión</button>
            </form>
            <hr className=" self-center mb-4 w-[340px] border-0.5 opacity-30 border-b-slate-400" />
            <a href="#" className=" mb-4 self-center font-bold underline">¿Se te olvidó tu contraseña?</a>
            <div className=" w-full flex flex-row justify-center">
              <p className="mr-2">¿No estás registrado?</p>
              <a href="#" className=" font-bold underline">Suscribete</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
