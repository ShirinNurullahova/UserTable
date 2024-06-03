import React, { useEffect, useRef } from 'react';
import DropdownMenu from './DropDownMenu';
import editIcon from './../assets/images/edit.svg';
import trashIcon from  './../assets/images/trash-can.svg'

interface EditUserProps {
  user: User;
  onClose: () => void;
}

const EditUser: React.FC<EditUserProps> = ({ user, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
    
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);


  const handleEdit = () => {
    console.log('Edit user:', user);
  };

  const handleMoveToTrash = () => {
    console.log('Move to trash:', user);
  };
 const actions = [
    { text: 'Edit user', icon: editIcon, onClick: handleEdit },
    { text: 'Move to trash', icon: trashIcon, onClick: handleMoveToTrash },
  ];

  return (
    <div className="relative" ref={modalRef}>
      <DropdownMenu actions={actions} />
    </div>
  );
};

export default EditUser;




































