import { Button } from "@/components/ui/button"


export function Jobs() {
  return (
    <div className="bg-medium flex justify-center items-center h-screen dark:bg-dark custom-mt">
      <div className="flex space-x-4 overflow-x-auto">
        {/* Primeiro card, sempre visível */}
        
        <div className="flex-none border-green-500 flex flex-col items-center rounded-lg border border-gray-200 dark:border-white-500">
          <img
            alt="Administração"
            className="h-[150px] w-[250px] rounded-t-lg object-cover"
            src="/images/administração.png"
            style={{
              aspectRatio: "250/150",
              objectFit: "cover",
            }}
          />
          <div className="mt-4 flex w-full flex-col items-center rounded-b-lg bg-medium p-4 text-white dark:bg-dark">
            <h3 className="text-lg font-bold text-dark dark:text-white">Administração</h3>
            <p className="text-sm  text-dark dark:text-white">Bacharelado</p>
            <p className="text-xs line-through  text-dark dark:text-white">R$ 500,00</p>
            <p className="text-xl font-bold  text-green-500">R$ 300,00 <span className="text-sm">(mensal)</span></p>
            <p className="text-xs  text-dark dark:text-white">Turnos: Noite, Manhã</p>
            <Button className="mt-2 w-full bg-green-500 text-white dark:bg-green-700 dark:text-white">Increva-se</Button>
            <Button className="mt-2 w-full border-2 border-dark bg-medium text-dark dark:bg-dark dark:text-white dark:border-white" >Saiba mais</Button>
          </div>
        </div>
        
        {/* Segundo card, oculto em telas pequenas */}
        <div className="flex-none hidden md:flex border-green-500 flex flex-col items-center rounded-lg border border-gray-200 dark:border-white-500">
          <img
            alt="Pedagogia"
            className="h-[150px] w-[250px] rounded-t-lg object-cover"
            src="/images/pedagogia.png"
            style={{
              aspectRatio: "250/150",
              objectFit: "cover",
            }}
          />
          <div className="mt-4 flex w-full flex-col items-center rounded-b-lg bg-medium p-4 text-white dark:bg-dark">
            <h3 className="text-lg font-bold text-dark dark:text-white">Pedagogia</h3>
            <p className="text-sm  text-dark dark:text-white">Licenciatura</p>
            <p className="text-xs line-through  text-dark dark:text-white">R$ 700,00</p>
            <p className="text-xl font-bold  text-green-500">R$ 400,00 <span className="text-sm">(mensal)</span></p>
            <p className="text-xs  text-dark dark:text-white">Turnos: Noite, Manhã</p>
            <Button className="mt-2 w-full bg-green-500 text-white dark:bg-green-700 dark:text-white">Increva-se</Button>
            <Button className="mt-2 w-full border-2 border-dark bg-medium text-dark dark:bg-dark dark:text-white dark:border-white" >Saiba mais</Button>
          </div>
        </div>
        
        {/* Terceiro card, oculto em telas pequenas */}
        <div className="flex-none hidden md:flex border-green-500 flex flex-col items-center rounded-lg border border-gray-200 dark:border-white-500">
          <img
            alt="Engenharia Civil"
            className="h-[150px] w-[250px] rounded-t-lg object-cover"
            src="/images/engenharia civil.png"
            style={{
              aspectRatio: "250/150",
              objectFit: "cover",
            }}
          />
          <div className="mt-4 flex w-full flex-col items-center rounded-b-lg bg-medium p-4 text-white dark:bg-dark">
            <h3 className="text-lg font-bold text-dark dark:text-white">Engenharia Civil</h3>
            <p className="text-sm  text-dark dark:text-white">Doutorado</p>
            <p className="text-xs line-through  text-dark dark:text-white">R$ 600,00</p>
            <p className="text-xl font-bold  text-green-500">R$ 435,00 <span className="text-sm">(mensal)</span></p>
            <p className="text-xs  text-dark dark:text-white">Turnos: Noite, Manhã</p>
            <Button className="mt-2 w-full bg-green-500 text-white dark:bg-green-700 dark:text-white">Increva-se</Button>
            <Button className="mt-2 w-full border-2 border-dark bg-medium text-dark dark:bg-dark dark:text-white dark:border-white" >Saiba mais</Button>
          </div>

        </div>
      </div>
    </div>
  )
}