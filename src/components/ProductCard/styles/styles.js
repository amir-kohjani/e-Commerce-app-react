import styled from "styled-components";
export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const Container = styled.div`
  /* margin: 0.5px 0.5px; */
  /* width: calc(100% - 0px); */
  direction: rtl;
  margin: 10px;
  padding: 10px;
  min-width: 250px;
  max-width: 250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  /* background-color: #f5fbfd; */

  position: relative;
  &:hover {
    border: none;

    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
    z-index: 200;
  }
`;
export const ImageWrapper = styled.div`
  width: 100%;
  max-height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  box-sizing: border-box;
  display: block;
  width: 100%;
  min-height: 270px;
  max-height: 270px;
  height: 100%;
  z-index: 2;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const NameProduct = styled.h3`
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: right;
  font-size: 12pt;
  font-weight: 300;
`;
export const Description = styled.span`
  text-align: right;
  font-size: 10pt;
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Price = styled.h3`
direction: rtl;
  font-size: 20pt;
  font-weight: 500;
  padding: 10px;
  color: #e94560;


 
`;
export const Pricewrapper = styled.div`
  display: flex;
  justify-content: space-between;
direction: ltr;
`;

export const Discount = styled.span`
  position: absolute;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius:50%;
  top: -20px;
  left: -14px;
  z-index: 3;
  background: #e94560;
  padding: 3px 10px;
  font-size: 14pt;
  font-weight: bold;
  border-radius: 50px;
  color: #fff;
  margin: 10px;
  :after {
    font-size:14pt;
    content:"%";
    font-weight: bold;
  }
`;