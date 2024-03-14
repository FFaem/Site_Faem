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
          <div className="mt-4 flex w-full flex-col items-center rounded-b-lg bg-[#333] p-4 text-white">
            <h3 className="text-lg font-bold">Administração</h3>
            <p className="text-sm">Bacharelado</p>
            <p className="text-xs line-through">R$ 500,00</p>
            <p className="text-xl font-bold">R$ 300,00 <span className="text-sm">(mensal)</span></p>
            <p className="text-xs">Turnos: Noite, Manhã</p>
            <Button className="mt-2 w-full bg-green-500">Inscreva-se</Button>
            <Button className="mt-2 w-full bg-green-500 variant=outline">Saiba mais</Button>
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
          <div className="mt-4 flex w-full flex-col items-center rounded-b-lg bg-[#333] p-4 text-white">
            <h3 className="text-lg font-bold">Pedagogia</h3>
            <p className="text-sm">Licenciatura</p>
            <p className="text-xs line-through">R$ 700,00</p>
            <p className="text-xl font-bold">R$ 400,00 <span className="text-sm">(mensal)</span></p>
            <p className="text-xs">Turnos: Noite, Manhã</p>
            <Button className="mt-2 w-full bg-green-500">Inscreva-se</Button>
            <Button className="mt-2 w-full bg-green-500 variant=outline">Saiba mais</Button>
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
          <div className="mt-4 flex w-full flex-col items-center rounded-b-lg bg-[#333] p-4 text-white">
            <h3 className="text-lg font-bold">Engenharia Civil</h3>
            <p className="text-sm">Doutorado</p>
            <p className="text-xs line-through">R$ 600,00</p>
            <p className="text-xl font-bold">R$ 435,00 <span className="text-sm">(mensal)</span></p>
            <p className="text-xs">Turnos: Noite, Manhã</p>
            <Button className="mt-2 w-full bg-green-500">Inscreva-se</Button>
            <Button className="mt-2 w-full bg-green-500 variant=outline">Saiba mais</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
