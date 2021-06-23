import styled from "styled-components";

export const CarrouselCards = styled.div`
  /* display: grid;
  overflow-x: auto;
  scroll-behavior: smooth;
  grid-auto-flow: column; */
  /* max-width: 1440px; */
  /* gap: 40px; */
  /* margin: 60px 0 80px 0; */
  position: relative;
  cursor: pointer;
  margin-top: 80px;
  /* padding-bottom: 0; */
  /* scroll-snap-type: both mandatory; */
  /* contain: content; */
  /* transform: translate(0); */
  @media only screen and (max-width: 767.9px) {
    margin-top: 40px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  overflow-x: scroll;
  scroll-behavior: smooth;
  grid-auto-flow: column;
  grid-template-rows: 1fr;
  column-gap: 40px;
  scroll-snap-type: both mandatory;
  padding-left: 4vw;

  &::-webkit-scrollbar {
    height: 2px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    border-radius: 2px;
    /* margin: 345px; */
    margin: 24vw;
    background: #c4c4c4;
    /* @media only screen and (max-width: 1024px) {
      
      margin: 150px;

    } */
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 2px;
  }
  @media only screen and (max-width: 1024px) {
    /* &::-webkit-scrollbar-track {
      margin: 204px;
    } */
    gap: 24px;
  }
  @media only screen and (max-width: 768px) {
      /* margin: 50px; */
      padding-left: 10px;
      &::-webkit-scrollbar-track {
        margin: 15vw;
      }
  }
  @media only screen and (max-width: 640px) {
    /* width: 95vw;
    margin: 40px 10px 30px 10px; */
    padding-left: 0;
    gap: 16px;
  }
`

// export const AngleContainer = styled.div`
//   max-width: 1440px;
//   height: 1px;
//   margin: 0 auto;
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-content: center;
//   text-align: center;
// `;

export const AngleLeft = styled.button`
  all: unset;
  display: block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  left: 21vw;
  bottom: 1px;
  transform: translateY(50%);
  /* top: 100%;
  transform: translateY(calc(-50% - 1.5px)); */
  /* width: 40px;
  height: 40px; */
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='10' height='17' viewBox='0 0 10 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.5 2L2 8.5L8.5 15' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  /* mask-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='10' height='17' viewBox='0 0 10 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 2L8 8.5L1.5 15' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: 6.5px 13px;
  /* opacity: .4; */

  &:disabled {
  /* background-color: violet; */
    opacity: .4;
    cursor: not-allowed;
  }

  @media only screen and (max-width: 768px) {
    left: 8vw;
  }


  /* margin-left: 20%; */
  `;

export const AngleRight = styled(AngleLeft)`
  left: auto;
  right: 21vw;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='10' height='17' viewBox='0 0 10 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 2L8 8.5L1.5 15' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");

  @media only screen and (max-width: 768px) {
    right: 8vw;
  }
`;

// export const Angle = styled.button`
  
  
//   &:first-child {
//     @media only screen and (max-width: 375px) {
//       left: 20px;
//     }
//   }
//   &:nth-child(2) {
    
//     align-self: flex-end;
//     right: 100px;
//     top: -18px;
//     @media only screen and (max-width: 375px) {
//       right: 20px;
//     }
//   }
// `;
