import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;
function Filter({filtervalue,options}) {
  const [Searchparams,setSearchparams]=useSearchParams()
  function handelclick(value){
    Searchparams.set(filtervalue,value)
    setSearchparams(Searchparams)
  }
if(Searchparams.get('page'))Searchparams.set('page',1)

  const currrentbutton=Searchparams.get(filtervalue) || options.at(0).value

  return (
    <StyledFilter>
      {options.map((el,i)=><FilterButton 
      onClick={()=>handelclick(el.value)} 
      key={i} active={el.value===currrentbutton}
      disabled={el.value===currrentbutton}
      >{el.lable}</FilterButton>)}
      </StyledFilter>
  )
}

export default Filter
