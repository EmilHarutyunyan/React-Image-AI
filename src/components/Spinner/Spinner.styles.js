import styled from 'styled-components'


export const Spinner = styled.div`
  /* border: 5px solid var(--lightGrey);
  border-top: 5px solid var(--medGrey);
  border-radius: 50%; */
  width: 50%;
  /* height: 252px; */
  /* width: 150px;
  height: 150px;
  background-image: url(${({ image }) => image});
  background-size: 100%;
  background-repeat: no-repeat;
  animation: spin 0.8s linear infinite; */
  margin: 20px auto;
  text-align: center;


  img {
    width: 150px;
    height: 150px;
    /* background-image: url(${({ image }) => image});
    background-size: 100%;
    background-repeat: no-repeat; */
    animation: spin 0.8s linear infinite;
    margin: 20px auto;
    object-fit: cover;
  }
  @keyframes spin {
    0% {
      transfor: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 690px) {
    width: 100%;
  }
`;
