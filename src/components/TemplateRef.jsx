import React, { useRef } from 'react';
import styled from 'styled-components';
import categories from './data';

const TemplateResult = ({ selections }) => {
    const templateRef = useRef(null);
    return (
        <Container>
            <Template ref={templateRef}>
                <Title>2025 Oscar® Ballot</Title>
                <CategoriesGrid>
                    {categories.map((category) => (
                        <Category key={category.name}>
                            <CategoryTitle>{category.name}</CategoryTitle>
                            {category.nominees.map((nominee) => (
                                <Nominee key={nominee}>
                                    <Checkbox
                                        checked={selections[category.name] === nominee}
                                    >
                                        {selections[category.name] === nominee && <Checkmark>✓</Checkmark>}
                                    </Checkbox>
                                    <NomineeName>{nominee}</NomineeName>
                                </Nominee>
                            ))}
                        </Category>
                    ))}
                </CategoriesGrid>
            </Template>
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
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    font-size: 12px;
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
    font-size: 12px;
    margin-bottom: 10px;
    text-align: center;
`;

const Nominee = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;
`;

const Checkbox = styled.div`
    width: 12px;
    height: 12px;
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
    font-size: 10px;
`;

const NomineeName = styled.span`
    font-size: 12px;
`;