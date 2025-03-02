import React, { useState } from 'react';
import { Button, Checkbox, Tooltip } from 'antd';
import styled from 'styled-components';
import categories from './data';
import TemplateResult from './TemplateResult';
import LogoOscars from '../assets/logo-oscars.png';
import { InfoCircleOutlined } from '@ant-design/icons';

const ContentComponent = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [selections, setSelections] = useState({});

    const handleSelection = (category, selected) => {
        setSelections(prev => ({ ...prev, [category]: selected }));
    };

    return (
        <ContainerContent>
            <TitleContainer>
                <LogoOscar
                    src={LogoOscars}
                    alt="Logo do oscar"
                />
                <Year>2025</Year>
            </TitleContainer>
            Template generator
            {currentStep < categories.length ? (
                <div>
                    <Title>
                        <h2>{categories[currentStep].name}</h2>
                        <Tooltip title={categories[currentStep].explanation} placement="rightBottom">
                            <InfoCircleOutlined />
                        </Tooltip>
                    </Title>
                    <OptionsContainer>
                        {categories[currentStep].nominees.map((nominee) => (
                            <Checkbox
                                key={nominee}
                                checked={selections[categories[currentStep].name] === nominee}
                                onChange={() => handleSelection(categories[currentStep].name, nominee)}
                            >
                                {nominee}
                            </Checkbox>
                        ))}
                        <Checkbox
                            checked={selections[categories[currentStep].name] === 'Abstain'}
                            onChange={() => handleSelection(categories[currentStep].name, 'Abstain')}
                        >
                            Abster-se
                        </Checkbox>
                    </OptionsContainer>

                    <ButtonContainer>
                        <Button disabled={currentStep === 0} onClick={() => setCurrentStep(p => p - 1)}>
                            Voltar
                        </Button>
                        <Button
                            disabled={!selections[categories[currentStep].name]}
                            onClick={() => setCurrentStep(p => p + 1)}
                        >
                            {currentStep === categories.length - 1 ? 'Finalizar' : 'Próximo'}
                        </Button>
                    </ButtonContainer>
                </div>
            ) : (
                <TemplateResult selections={selections} />
            )}
        </ContainerContent>
    );
};

export default ContentComponent;

// Estilos
const ContainerContent = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const LogoOscar = styled.img`
    height: 100px;

    @media (max-width: 768px) {
        height: 60px;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 5px;
    }
`;

const Year = styled.div`
    font-size: 32px;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 10px;
`;
const Title = styled.div`
    display: flex;
    gap: 10px;

`;