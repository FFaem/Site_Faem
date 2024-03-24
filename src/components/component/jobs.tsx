"use client"

// Jobs.tsx
import React, { useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Button } from "@/components/ui/button"

interface JobCardProps {
  imgSrc: string;
  course: string;
  type: string;
  sale: string;
  value: string;
  turn: string;


}

const JobCard: React.FC<JobCardProps> = ({ imgSrc, course, type, value, sale, turn }) => (
  <li className="flex-none border-green-500 flex flex-col items-center w-[302px] h-[516px] rounded-lg border border-gray-200 dark:border-white-500">
    <div className="flex flex-col items-center rounded-lg border border-gray-200 dark:border-white-500">
      <img className='rounded-t-lg w-full' src={imgSrc} alt={course} style={{ height: '200px', objectFit: 'cover' }} />
    </div>
    <div className="mt-4 flex w-full flex-col items-center rounded-b-lg bg-medium p-4 text-white dark:bg-dark">
      <h3 className="text-lg font-bold text-dark dark:text-white">{course}</h3>
      <p className="text-sm text-dark dark:text-white">{type}</p>
      <p className="text-xs line-through text-dark dark:text-white">{sale}</p>
      <p className="text-xl font-bold text-green-500">{value}<span className="text-sm">(mensal)</span></p>
      <p className="text-xs text-dark dark:text-white">{turn}</p>
      <Button className="mt-2 w-full bg-green-500 text-white dark:bg-green-700 dark:text-white">Increva-se</Button>
      <Button className="mt-2 w-full border-2 border-dark bg-medium text-dark dark:bg-dark dark:text-white dark:border-white">Saiba mais</Button>
    </div>
  </li>
);

const Jobs: React.FC = () => {
  const carouselRef = useRef<HTMLUListElement>(null);
  // Supondo que cada card tenha 200px de largura + 16px de gap, ajuste conforme necessário.
  const cardWidth = 302; // Largura do card
const gap = 16; // Espaço entre os cards
const numberOfCards = 3; // Número de cards para exibir4

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStartX, setScrollStartX] = useState(0);

  const onDragStart = (e: React.MouseEvent<HTMLUListElement> | React.TouchEvent<HTMLUListElement>) => {
    setIsDragging(true);

    // Diferenciamos entre evento de toque e evento de mouse usando "in" operator como type guard
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;

    setStartX(clientX);
    setScrollStartX(carouselRef.current?.scrollLeft ?? 0);
};

const onDragMove = (e: React.MouseEvent<HTMLUListElement> | React.TouchEvent<HTMLUListElement>) => {
  if (!isDragging) return;
  // Use o operador 'in' para verificar se 'touches' está no objeto de evento, indicando um evento de toque
  const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
  const moveX = currentX - startX;

  if (carouselRef.current) {
    carouselRef.current.scrollLeft = scrollStartX - moveX;
  }
};

  const onDragEnd = () => {
    setIsDragging(false);
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      // Calcula a largura total do carrossel
      const totalWidth = carouselRef.current.scrollWidth;
      // Calcula a largura visível (viewport) do carrossel
      const visibleWidth = carouselRef.current.clientWidth;
      // Posição atual de scroll
      const currentScroll = carouselRef.current.scrollLeft;

      // Verifica se está no último slide
      if (currentScroll + visibleWidth + (cardWidth + gap) >= totalWidth) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' }); // Rola para o início
      } else {
        carouselRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' }); // Rola para o próximo card
      }
    }
  };

  return (
    <div className="bg-medium flex justify-center items-center h-screen  dark:bg-dark custom-mt">
     <div className="flex flex-col items-center w-full px-4">
        {/* Título centralizado */}
        <h1 className="text-black text-2xl font-bold text-center my-8 dark:text-white">Conheça nossos cursos</h1>
        
      <div className="relative  w-full overflow-hidden" style={{ maxWidth: `${3 * (cardWidth + gap) - gap}px` }}>
        <FaAngleLeft
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 cursor-pointer z-10"
          size="2em"
          onClick={scrollLeft}
        />
        <ul
          ref={carouselRef}
          className="flex flex-row  gap-4 overflow-x-auto max-w-6xl w-full overflow-hidden scroll-snap-x snap-mandatory p-4 cursor-grab hide-scrollbar" 
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onTouchStart={onDragStart}
          onTouchMove={onDragMove}
          onTouchEnd={onDragEnd}
        >
          {/* Exemplo de JobCards */}
          <JobCard imgSrc="/images/administração.png" course="Administração" type="Bacharelado" sale={'R$ 500,00'} value={'R$ 300,00'} turn={'Turnos: Noite, Manhã'} />
          <JobCard imgSrc="/images/administração.png" course="Administração" type="Bacharelado" sale={'R$ 500,00'} value={'R$ 300,00'} turn={'Turnos: Noite, Manhã'} />
          <JobCard imgSrc="/images/administração.png" course="Administração" type="Bacharelado" sale={'R$ 500,00'} value={'R$ 300,00'} turn={'Turnos: Noite, Manhã'} />
          <JobCard imgSrc="/images/administração.png" course="Administração" type="Bacharelado" sale={'R$ 500,00'} value={'R$ 300,00'} turn={'Turnos: Noite, Manhã'} />
          <JobCard imgSrc="/images/administração.png" course="Administração" type="Bacharelado" sale={'R$ 500,00'} value={'R$ 300,00'} turn={'Turnos: Noite, Manhã'} />
          <JobCard imgSrc="/images/administração.png" course="Administração" type="Bacharelado" sale={'R$ 500,00'} value={'R$ 300,00'} turn={'Turnos: Noite, Manhã'} />
          <JobCard imgSrc="/images/administração.png" course="Administração" type="Bacharelado" sale={'R$ 500,00'} value={'R$ 300,00'} turn={'Turnos: Noite, Manhã'} />
          <JobCard imgSrc="/images/administração.png" course="Administração" type="Bacharelado" sale={'R$ 500,00'} value={'R$ 300,00'} turn={'Turnos: Noite, Manhã'} />
          {/* Repita JobCard com diferentes dados conforme necessário */}
        </ul>
        <FaAngleRight
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full shadow-md p-3 cursor-pointer z-10"
          size="2em"
          onClick={scrollRight}
        />
      </div>
      </div>
    </div>
  );
};

export default Jobs;
