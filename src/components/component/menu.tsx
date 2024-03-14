"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Theme from './theme';
import Font from './fontControl';

// icones
import { AiOutlineUser } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdBookmarks } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";




export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

  
  };

  return (
    <div className="bg-medium dark:bg-dark">
      {/* Top bar com informações de contato e ajustes */}
      <div className="mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8 border-b border-black dark:border-medium">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-10 ">
          
          <Theme/>
          <Font/> 
          </div>
          

          
          <div className="flex items-center space-x-2 " >
          <AiOutlineUser className='h-8 dark:text-white sm:hidden'/>
          <Link href="https://faem.sistemasiga.net/login" passHref><span className="text-sm sm:hidden dark:text-white">Área do aluno</span></Link>
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            <div className="flex items-center space-x-2 dark:text-white">
            <FaPhoneAlt className="dark:text-white h-5 "/>
            <Link href="#" passHref><span className="text-sm dark:text-white">(xx) x xxxx-xxxx </span></Link>
            </div>

            <div className="flex items-center space-x-2">
              <FaWhatsapp  className="dark:text-white h-5"/>
              <Link href="#" passHref><span className="text-sm dark:text-white">WhatsApp</span></Link>
            </div>

            <div className="flex items-center space-x-2">
            <AiOutlineUser className='dark:text-white h-5'/>
            <Link href="https://faem.sistemasiga.net/login" passHref><span className="text-sm dark:text-white">Área do aluno</span></Link>
            </div>

            <div className="flex items-center space-x-2">
            <IoMdBookmarks className='dark:text-white h-5' />
            <Link href="#" passHref><span className="text-sm dark:text-white">Voltar a estudar</span></Link>
            </div>

            {/* Outros itens da barra superior se necessário */}
          </div>
        </div>
      </div>
      
      {/* Menu de navegação principal */}
      <div className="bg-medium py-3 dark:bg-dark">
        <div className="mx-auto max-w-7xl flex justify-between items-center px-4 sm:px-6 lg:px-8 ">
          <button onClick={toggleMenu} className={`sm:hidden  ${isMenuOpen ? 'transform rotate-90' : ''} transition duration-500 ease-in-out dark:text-white `}>
          <RxHamburgerMenu className='h-10 w-10'/>
          </button>
          
                      <div>
                {/* Imagem para o modo claro */}
                <img
                    alt="Logo Faem - Faculdade Embu das Artes Modo Claro"
                    className="h-12 block dark:hidden"
                    src="/logos/logo preto.png"
                />

                {/* Imagem para o modo escuro */}
                <img
                    alt="Logo Faem - Faculdade Embu das Artes Modo Escuro"
                    className="h-12 hidden dark:block"
                    src="/logos/logo branca.png"
                />
            </div>

          <Button className="sm:hidden bg-green-500 h-8 w-32 rounded-3xl text-white dark:text-white dark:bg-green-500">
            Inscreva-se
          </Button>

          {/* Conteúdo do menu mobile */}
          {isMenuOpen && (
            <div className="absolute inset-0 transform translate-x-0 transition duration-500 ease-in-out z-50">
              <div className="fixed top-0 left-0 h-screen w-full z-50 flex flex-col items-start py-4 px-4 space-y-4 bg-white dark:bg-dark ">
                <button className="mb-4 self-end px-4 py-2 text-black text-sm" onClick={toggleMenu}>X</button>
                
                <div className="flex items-center space-x-2">
                  <img alt="Cursos" className="h-4" src="/icons/educacao.png" />
                  <Link href="#" passHref><span className="text-black text-sm cursor-pointer dark:text-white">Cursos</span></Link>
                </div>

                <div className="flex items-center space-x-2">
                  <img alt="Pós-graduação" className="h-4" src="/icons/avatar-de-pos-graduacao.png" />
                  <Link href="#" passHref><span className="text-black text-sm cursor-pointer dark:text-white">Pós-graduação</span></Link>
                </div>

                <div className="flex items-center space-x-2">
                <FaPhoneAlt className="dark:text-white h-5 sm:hidden"/>
                  <Link href="#" passHref><span className="text-black text-sm cursor-pointer dark:text-white ">Fale conosco</span></Link>
                </div>

                <div className="flex items-center space-x-2">
                  <FaWhatsapp  className="dark:text-white h-5 sm:hidden"/>
                  <span className="text-sm dark:text-white">WhatsApp</span>
                </div>

                <div className="flex items-center space-x-2">
                <IoMdBookmarks className='dark:text-white h-5' />
                  <button className="text-sm self-start dark:text-white">Voltar a estudar</button>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-cover opacity-50 z-0">
                {/* Imagem de fundo transparente aqui */}
              </div>
            </div>
          )}

          {/* Navegação principal para telas maiores */}
          <nav className="hidden sm:flex items-center space-x-14">
            <Link href="#" passHref><span className="text-black text-sm cursor-pointer dark:text-white">Cursos</span></Link>
            <Link href="#" passHref><span className="text-black text-sm cursor-pointer dark:text-white">Pós-graduação</span></Link>
            <Link href="#" passHref><span className="text-black text-sm cursor-pointer dark:text-white">Fale conosco</span></Link>
            <Button className="bg-green-500 h-8 w-32 rounded-3xl text-white dark:text-white dark:bg-green-500">
              Inscreva-se
            </Button>
          </nav>
        </div>
      </div>
    
    </div>
  );
}
