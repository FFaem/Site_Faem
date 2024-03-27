import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Subscribe() {
  return (
    <Card className="bg-medium relative flex flex-col md:flex-row w-full">
      {/* Imagem da estudante para desktop */}
      <div className="hidden md:flex md:items-center md:justify-center md:w-1/2 md:bg-medium md:p-4 md:relative">
        <img
          alt="Estudante Feminina"
          className="h-[313px] w-[313px] object-cover md:absolute"
          src="/images/estudante1.png"
          style={{
            zIndex: 5,
            right: '16.67%', // Centraliza em relação ao card da direita (1/3 do contêiner).
            bottom: '60%', // Posiciona a imagem a meio caminho da altura do contêiner.
            transform: 'translateY(50%)', // Ajusta para centralizar verticalmente com a parte inferior do cartão.
          }}
        />
      </div>

      <CardContent className="w-full md:w-1/2 p-6 bg-medium" style={{ zIndex: 1 }}>
        <div className="flex flex-col justify-between h-full bg-medium">
          <div className="p-4 bg-medium text-green-500" style={{ textAlign: 'left', maxWidth: '520px' }}>
            <CardTitle className="font-bold" style={{ fontSize: "33px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </CardTitle>
            <CardDescription className="mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus
            </CardDescription>
          </div>
          <Button
  className="mt-4 bg-green-500 text-white w-full md:w-[280px] flex justify-center items-center text-center"
  style={{ fontSize: '16px', padding: '8px 16px' }}
>
Clique aqui para se inscrever
</Button>
          {/* Imagem da estudante para mobile */}
          <div className="md:hidden flex justify-center items-center p-4" style={{fontSize: "16px"}}>
            <img
              alt="Estudante Feminina"
              className="h-[313px] w-[313px] object-cover"
              src="/images/estudante1.png"
            />
          </div>

          
        </div>
      </CardContent>
    </Card>
  )
}

export default Subscribe;
