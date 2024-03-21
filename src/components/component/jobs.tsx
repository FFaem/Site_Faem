"use client"
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

export function Jobs() {
  const cursos = [
    {
      nome: "Administração",
      tipo: "Bacharelado",
      precoOriginal: "R$ 500,00",
      precoComDesconto: "R$ 300,00",
      turnos: "Noite, Manhã",
      imagem: "/images/administração.png"
    },
    {
      nome: "Pedagogia",
      tipo: "Licenciatura",
      precoOriginal: "R$ 700,00",
      precoComDesconto: "R$ 400,00",
      turnos: "Noite, Manhã",
      imagem: "/images/pedagogia.png"
    },
    {
      nome: "Engenharia Civil",
      tipo: "Doutorado",
      precoOriginal: "R$ 600,00",
      precoComDesconto: "R$ 435,00",
      turnos: "Noite, Manhã",
      imagem: "/images/engenharia civil.png"
    },

    {
      nome: "Administração",
      tipo: "Bacharelado",
      precoOriginal: "R$ 500,00",
      precoComDesconto: "R$ 300,00",
      turnos: "Noite, Manhã",
      imagem: "/images/administração.png"
    },
    {
      nome: "Pedagogia",
      tipo: "Licenciatura",
      precoOriginal: "R$ 700,00",
      precoComDesconto: "R$ 400,00",
      turnos: "Noite, Manhã",
      imagem: "/images/pedagogia.png"
    },
    {
      nome: "Engenharia Civil",
      tipo: "Doutorado",
      precoOriginal: "R$ 600,00",
      precoComDesconto: "R$ 435,00",
      turnos: "Noite, Manhã",
      imagem: "/images/engenharia civil.png"
    },
    // Adicione mais cursos conforme necessário...
  ];

  // Função para dividir os cursos em grupos de 3
  const chunkArray = (arr, size) => 
    arr.length ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)] : [];

  const cursosAgrupados = chunkArray(cursos, 3);

  return (

    <div className="bg-medium flex flex-col justify-center items-center h-screen dark:bg-dark custom-mt">
    <div className="bg-medium flex justify-center items-center h-screen dark:bg-dark custom-mt">
      <Carousel key="jobs-carousel">
      <h1 className="text-black text-2xl font-bold text-center my-8 mt-10 dark:text-white">Conheça nossos cursos</h1>
        <CarouselContent className="mt-13">

          {cursosAgrupados.map((grupo, index) => (
            <CarouselItem key={`grupo-${index}`} className="flex justify-center gap-4">
              {grupo.map((curso) => (
                <div key={curso.nome} className="min-w-[250px] border-green-500 flex flex-col items-center rounded-lg border border-gray-200 dark:border-gray-700">
                  
                  <img alt={curso.nome} src={curso.imagem} className="h-[150px] w-[250px] rounded-t-lg object-cover"/>
                  <div className="mt-4 flex w-full flex-col items-center rounded-b-lg bg-medium p-4 text-white dark:bg-dark">
                    <h3 className="text-lg font-bold">{curso.nome}</h3>
                    <p>{curso.tipo}</p>
                    <p className="line-through">{curso.precoOriginal}</p>
                    <p className="text-green-500 font-bold">{curso.precoComDesconto}</p>
                    <p>Turnos: {curso.turnos}</p>
                    <Button className="mt-2 w-full bg-green-500 text-white">Increva-se</Button>
                    <Button className="mt-2 w-full border border-dark text-dark">Saiba mais</Button>
                  </div>
                </div>
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 z-10" />
        <CarouselNext className="absolute right-0 z-10" />
      </Carousel>
        </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .carousel-item {
            display: flex !important;
            justify-content: center;
          }
          .carousel-item > div:not(:nth-child(2)) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
