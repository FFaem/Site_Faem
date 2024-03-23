"use client"

// Jobs.tsx
import React, { useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { Button } from "@/components/ui/button"

interface JobCardProps {
  imgSrc: string;
  course: string;
  type: string;
  description: string;
  sale: string;
  value: string;
  turn: string;


}

const JobCard: React.FC<JobCardProps> = ({ imgSrc, course, type ,description, value, sale, turn }) => (
  <li className="flex-none md:flex  border-green-500 flex flex-col items-center w-[calc(34.3333%-1rem)] rounded-lg border border-gray-200 dark:border-white-500">
    <div className="flex-noneflex flex-col items-center rounded-lg border border-gray-200 dark:border-white-500">
      <img className='rounded-t-lg h-[150px] w-[250px]' src={imgSrc} alt={course} style={{ objectFit: 'cover' }} />
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
  const cardWidth = 200; // Largura do card
  const gap = 16; // Espaço entre os cards

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStartX, setScrollStartX] = useState(0);

  const onDragStart = (e: React.MouseEvent<HTMLUListElement, MouseEvent> | React.TouchEvent<HTMLUListElement>) => {
    setIsDragging(true);
    setStartX(e.type.includes('mouse') ? e.clientX : e.touches[0].clientX);
    setScrollStartX(carouselRef.current?.scrollLeft ?? 0);
  };

  const onDragMove = (e: React.MouseEvent<HTMLUListElement, MouseEvent> | React.TouchEvent<HTMLUListElement>) => {
    if (!isDragging) return;
    const currentX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
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
        
      <div className="relative max-w-6xl w-full overflow-hidden" style={{ maxWidth: `${3 * (cardWidth + gap) - gap}px` }}>
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
          <JobCard imgSrc="/images/administração.png" name="Blanche Pearson" position="Sales Manager" />
          <JobCard imgSrc="/images/administração.png" name="Blanche Pearson" position="Sales Manager" />
          <JobCard imgSrc="/images/administração.png" name="Blanche Pearson" position="Sales Manager" />
          <JobCard imgSrc="/images/administração.png" name="Blanche Pearson" position="Sales Manager" />
          <JobCard imgSrc="/images/administração.png" name="Blanche Pearson" position="Sales Manager" />
          <JobCard imgSrc="/images/administração.png" name="Blanche Pearson" position="Sales Manager" />
          <JobCard imgSrc="/images/administração.png" name="Blanche Pearson" position="Sales Manager" />
          <JobCard imgSrc="/images/administração.png" name="Blanche Pearson" position="Sales Manager" />
 
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
