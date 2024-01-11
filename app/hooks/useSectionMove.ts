import { useState } from 'react';

interface SectionType {
  label: string;
  id: string;
}

export default function useSectionMove(sections: SectionType[]) {
  const [selectedSection, setSelectedSection] = useState(sections[0].id);

  const handleSectionButtonClick = (id: string) => {
    setSelectedSection(id);
    handleSectionMove(id);
    ``;
  };

  const handleSectionMove = (id: string) => {
    const sectionElement = document.getElementById(id);
    const sectionTop = sectionElement?.getBoundingClientRect().top as number;
    window.scrollTo({
      top: window.scrollY + sectionTop - 180,
      behavior: 'smooth',
    });
  };

  return { selectedSection, handleSectionButtonClick };
}
