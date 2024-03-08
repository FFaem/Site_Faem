"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <div className="hidden sm:flex items-center space-x-6">
            <span className="text-sm">(xx) x xxxx-xxxx</span>
            <span className="text-sm">WhatsApp</span>
            <span className="text-sm">Área do aluno</span>
            <label className="text-sm" htmlFor="study-toggle">
              Voltar a estudar
            </label>
          </div>
          {/* Botão de menu hambúrguer */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="sm:hidden">
            {/* Ícone de menu hambúrguer (adicione seu ícone aqui) */}
            ☰
          </button>
        </div>
      </div>

      {/* Menu de navegação principal */}
      <div className="bg-white py-4">
        <div className="mx-auto max-w-7xl flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <img alt="Logo" className="h-12" src="/logo-faem-preto.png" />

          {/* Conteúdo do menu mobile */}
          {isMenuOpen && (
            <div className="sm:hidden bg-white">
              <nav className="flex flex-col items-start py-4 px-4 space-y-4">
                <Link href="#" passHref><span className="text-black text-sm cursor-pointer">Home</span></Link>
                <Link href="#" passHref><span className="text-black text-sm cursor-pointer">Cursos</span></Link>
                <Link href="#" passHref><span className="text-black text-sm cursor-pointer">Pós-graduação</span></Link>
                <Link href="#" passHref><span className="text-black text-sm cursor-pointer">Fale conosco</span></Link>
                <span className="text-sm">(xx) x xxxx-xxxx</span>
                <span className="text-sm">WhatsApp</span>
                <span className="text-sm">Área do aluno</span>
                <button className="text-sm">Voltar a estudar</button>
                <Button className="bg-green-500 h-8 w-32 rounded-3xl text-white">
                  Inscreva-se
                </Button>
              </nav>
            </div>
          )}

          {/* Navegação principal para telas maiores */}
          <nav className="hidden sm:flex items-center space-x-6">
            <Link href="#" passHref><span className="text-black text-sm cursor-pointer">Home</span></Link>
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

