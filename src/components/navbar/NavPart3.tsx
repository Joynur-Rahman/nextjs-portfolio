'use client'

import React from 'react'
import ShareButton from '@/components/ui/share-button'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { RiTwitterXLine } from 'react-icons/ri'
import ThemeToggleButton from '../ui/theme-toggle-button'
import type { IconType } from 'react-icons'

interface SocialLink {
  icon: IconType
  onClick: () => void
  className?: string
}

const socialLinks: SocialLink[] = [
  {
    icon: FaGithub,
    onClick: () => window.open('https://github.com/Joynur-Rahman', '_blank', 'noopener,noreferrer'),
  },
  {
    icon: FaLinkedinIn,
    onClick: () =>
      window.open(
        'https://www.linkedin.com/in/joynur-rahman-65274a284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        '_blank',
        'noopener,noreferrer'
      ),
  },
  {
    icon: FaInstagram,
    onClick: () =>
      window.open('https://www.instagram.com/joynursrahman?igsh=a3k2d2JnbGhsZWti', '_blank', 'noopener,noreferrer'),
  },
  {
    icon: RiTwitterXLine,
    onClick: () => window.open('https://x.com/rtridevjay?s=08', '_blank', 'noopener,noreferrer'),
  },
]

const NavPart3 = () => {
  return (
    <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-2 xl:gap-3 2xl:gap-4">
      <div className="scale-90 sm:scale-95 md:scale-100 lg:scale-90 xl:scale-100">
        <ShareButton links={socialLinks.map(link => ({ 
    ...link, 
    className: link.className || '' 
  }))} className="text-xs sm:text-sm md:text-base lg:text-sm xl:text-base">
          Connect
        </ShareButton>
      </div>
      <div className="scale-90 sm:scale-95 md:scale-100 lg:scale-90 xl:scale-100">
        <ThemeToggleButton
          variant="circle-blur"
          start="top-right"
          // className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12"
        />
      </div>
    </div>
  )
}

export default NavPart3
