
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Subscribe() {
  return (
    <Card className="flex w-full bg-medium relative" >
      <div className="flex items-center justify-center w-1/2 bg-medium p-4 relative">


        {/* Imagem da estudante */}
        <img
        alt="Estudante Feminina"
        className="h-[313px] w-[313px] object-cover absolute"
        src="/images/estudante1.png"
        style={{
          zIndex: 5,
          right: '16.67%', // Centraliza em relação ao card da direita (1/3 do contêiner).
          bottom: '60%', // Posiciona a imagem a meio caminho da altura do contêiner.
          transform: 'translateY(50%)', // Ajusta para centralizar verticalmente com a parte inferior do cartão.
        }}
      />
      </div>
      <CardContent className="w-1/2 p-6 bg-medium" style={{ zIndex: 1 }}>
  <div className="flex flex-col justify-between h-full bg-medium">
    {/* Aqui removemos a classe mx-auto e text-center que centralizava o texto e definimos a largura máxima do contêiner de título e descrição para que não ocupe a largura total */}
    <div className="p-4 bg-medium text-green-500" style={{ textAlign: 'left', maxWidth: 'max-w-lg' }}>
    <CardTitle className="font-bold" style={{ fontSize: "33px", maxWidth: '520px' }}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</CardTitle>
      <CardDescription className="mt-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus
      </CardDescription>
    </div>
    <Button className="self-start mt-4 bg-green-500 text-white">Clique aqui para se inscrever</Button>
  </div>
</CardContent>
    </Card>
  )
}

export default Subscribe;
