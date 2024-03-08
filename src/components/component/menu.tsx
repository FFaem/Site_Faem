"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid'


export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-100">
      {/* Top bar com informações de contato e ajustes */}
      <div className="mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button className="text-sm">A-</button>
            <button className="text-base font-semibold">100%</button>
            <button className="text-lg">A+</button>
          </div>
          
          <div className="flex items-center space-x-2">
            <img alt="Área do aluno" className="h-4 sm:hidden" src="/icons/user.png" />
            <span className="text-sm sm:hidden">Área do aluno</span>
            </div>

          <div className="hidden sm:flex items-center space-x-4">
            

            <div className="flex items-center space-x-2">
            <img alt="Telefone" className="h-4" src="/icons/telefone.png" />
            <span className="text-sm">(xx) x xxxx-xxxx</span>
            </div>
          
            <div className="flex items-center space-x-2">
            <img alt="WhatsApp" className="h-4" src="/icons/whatsapp.png" />
            <span className="text-sm">WhatsApp</span>
            </div>

            <div className="flex items-center space-x-2">
            <img alt="Área do aluno" className="h-4" src="/icons/user.png" />
            <span className="text-sm">Área do aluno</span>
            </div>

            <div className="flex items-center space-x-2">
            <img alt="Voltar a estudar" className="h-4" src="/icons/book.png" />
            <span className="text-sm">Voltar a estudar</span>
            </div>

            
            <label className="text-sm" htmlFor="study-toggle">
              
            </label>
          </div>
          
        </div>
      </div>

      {/* Menu de navegação principal */}
      <div className="bg-white py-4">
        <div className="mx-auto max-w-7xl flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <button onClick={toggleMenu} className={`sm:hidden ${isMenuOpen ? 'transform rotate-90' : ''} transition duration-500 ease-in-out`}>
            ☰
          </button>
          <img alt="Logo" className="h-12" src="/logo preto.png" />
          <Button className="sm:hidden bg-green-500 h-8 w-32 rounded-3xl text-white">
            Inscreva-se
          </Button>

          {/* Conteúdo do menu mobile */}
          <div className={`absolute inset-0 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition duration-500 ease-in-out`}>
            <div className="fixed top-0 left-0 h-screen w-full z-50 flex flex-col items-start py-4 px-4 space-y-4 bg-white">
              <button className="mb-4 self-end px-4 py-2 text-black text-sm" onClick={toggleMenu}>X</button>

            <div className="flex items-center space-x-2">
            <img alt="Cursos" className="h-4" src="/icons/educacao.png" />
            <Link href="#" passHref><span className="text-black text-sm cursor-pointer">Cursos</span></Link>
            </div>

            <div className="flex items-center space-x-2">
            <img alt="Pós-graduação" className="h-4" src="/icons/avatar-de-pos-graduacao.png" />
            <Link href="#" passHref><span className="text-black text-sm cursor-pointer">Pós-graduação</span></Link>
            </div>

            <div className="flex items-center space-x-2">
            <img alt="Fale conosco" className="h-4" src="/icons/telefone.png" />
            <Link href="#" passHref><span className="text-black text-sm cursor-pointer">Fale conosco</span></Link>
            </div>

            <div className="flex items-center space-x-2">
            <img alt="WhatsApp" className="h-4" src="/icons/whatsapp.png" />
            <span className="text-sm">WhatsApp</span>
            </div>

            <div className="flex items-center space-x-2">
            <img alt="Voltar a estudar" className="h-4" src="/icons/book.png" />
            <button className="text-sm self-start">Voltar a estudar</button>
            </div>
              
              
    
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-cover opacity-50 z-0">
                {/* Imagem de fundo transparente aqui */}
            </div>
          </div>

          {/* Navegação principal para telas maiores */}
          <nav className="hidden sm:flex items-center space-x-14">
            <Link href="#" passHref><span className="text-black text-sm cursor-pointer">Cursos</span></Link>
            <Link href="#" passHref><span className="text-black text-sm cursor-pointer">Pós-graduação</span></Link>
            <Link href="#" passHref><span className="text-black text-sm cursor-pointer">Fale conosco</span></Link>
            <Button className="bg-green-500 h-8 w-32 rounded-3xl text-white">
              Inscreva-se
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
}
