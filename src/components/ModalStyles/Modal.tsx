import styled from 'styled-components'

export const ModalContainer: any = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: ${(props: any) => (props.display ? 'block' : 'none')};
`

export const ModalMain: any = styled.section`
  position: fixed;
  background: ${(props: any) =>
    props.theme === 'dark' ? '#3f3f3f' : '#f4f4f4'};
  color: ${(props: any) => (props.theme === 'dark' ? '#fff' : '#3f3f3f')};
  width: 60%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 3rem;
  border-radius: 2rem;
`
export const Description = styled.p`
  margin-bottom: 1rem;
`

export const Buttons = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 3rem;
  align-items: center;
`

export const ConfirmButton = styled.button`
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border: 2px solid #218838;
  border-radius: 15px;
  background: ${(props: any) =>
    props.theme === 'dark' ? '#3f3f3f' : '#f4f4f4'};
  color: ${(props: any) => (props.theme === 'dark' ? '#fff' : '#3f3f3f')};
`
export const DeclineButton = styled(ConfirmButton)`
  border: 2px solid #c82333;
`
