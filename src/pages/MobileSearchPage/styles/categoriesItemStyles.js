import styled from "styled-components";

export const Container = styled.div`
    width: calc(50% - 17px);
    margin: 16px 8px 0px;
    position: relative;
    min-height: 70px;
    float: right;
    a{
        color: transparent;
    }
`;

export const TitleWrapper = styled.div`
    background: linear-gradient(360deg, rgb(40, 41, 44) 0%, rgba(40, 41, 44, 0) 100%);
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0px;
    right: 0px;
    border-radius: 0px 0px 10px 10px;
    transition: all 0.45s ease 0s;
    opacity: 1;
`;

export const Title = styled.h4`
color: rgb(255, 255, 255);
    position: absolute;
    font-size: 15px;
    padding-right: 16px;
    padding-left: 16px;
    bottom: 0px;
    right: 0px;
    margin: 0px;
    padding-bottom: 15px;
    line-height: 20px;
    width: calc(100% - 32px);
`;

export const Image = styled.img`
    max-width: 100%;
    vertical-align: middle;
    transition: all 0.35s ease 0s;
    display: inline;
`;