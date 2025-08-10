'use client'

import Link from "next/link"
import styled from "styled-components"
import { ShowLeft } from "./globalStyles";

export const LinkHome = styled(Link)`
    color: var(--main-color);
`;

export const NotFoundContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 1.75rem;
    padding-top: 2rem;
    opacity: 0;
    transform: translateX(-20px);
    animation: ${ShowLeft} 0.3s forwards;
`;