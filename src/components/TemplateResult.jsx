import React, { useRef, useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import styled from 'styled-components';
import categories from './data';

const TemplateResult = ({ selections }) => {
    const [imageUrl, setImageUrl] = useState(null);
    const templateRef = useRef(null);

    const generateImage = () => {
        html2canvas(templateRef.current, { scale: 2 }).then((canvas) => {
            const image = canvas.toDataURL('image/png');
            setImageUrl(image);
        });
    };

    useEffect(() => {
        generateImage();
    }, [selections]);

    return (
        <Container>
            <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
                <Template ref={templateRef}>
                    <Title>2025 Oscar® Ballot</Title>
                    <CategoriesGrid>
                        {categories.map((category) => (
                            <Category key={category.name}>
                                <CategoryTitle>{category.name}</CategoryTitle>
                                {category.nominees.map((nominee) => (
                                    <Nominee key={nominee}>
                                        <Checkbox checked={selections[category.name] === nominee}>
                                            {selections[category.name] === nominee && <Checkmark>✓</Checkmark>}
                                        </Checkbox>
                                        <NomineeName>{nominee}</NomineeName>
                                    </Nominee>
                                ))}
                            </Category>
                        ))}
                    </CategoriesGrid>
                </Template>
            </div>

            {imageUrl && (
                <ResultContainer>
                    <h2>Preview da Imagem Gerada</h2>
                    <DownloadButton href={imageUrl} download="oscar-ballot.png">
                        Baixar Imagem
                    </DownloadButton>
                    <PreviewImage src={imageUrl} alt="Oscar Ballot" />
                </ResultContainer>
            )}
        </Container>
    );
};

export default TemplateResult;

const Container = styled.div`
    padding: 20px;
    font-family: Arial, sans-serif;
`;

const Template = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
`;

const CategoriesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`;

const Category = styled.div`
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 10px;
    text-align: center;
`;

const Nominee = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;
`;

const Checkbox = styled.div`
    width: 14px;
    height: 14px;
    border: 1px solid #333;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    background-color: ${(props) => (props.checked ? '#333' : 'transparent')};
    color: ${(props) => (props.checked ? '#fff' : 'transparent')};
`;

const Checkmark = styled.span`
    font-size: 12px;
`;

const NomineeName = styled.span`
    font-size: 14px;
`;

const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    text-align: center;
`;

const PreviewImage = styled.img`
    width: 100%;
    max-width: 800px;
    border: 2px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const DownloadButton = styled.a`
    display: inline-block;
    margin-top: 10px;
    padding: 12px 25px;
    background: #28a745;
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
        background: #218838;
    }
`;