import React from 'react'
import { useNavigate } from 'react-router-dom';
import CreateBoardButton from '../../components/edit/CreateBoardButton';

function CreateBoardButtonContainer() {
    const navigate = useNavigate();
    const onCreateCok = () => {
        navigate("/edit");
      };
      
    return (
        <CreateBoardButton onCreateCok={onCreateCok} />
    )
}

export default CreateBoardButtonContainer
