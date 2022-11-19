import React,{useState} from 'react';

function Paginator({task, sum, setSum, sum2, setSum2, page, longPage}) {
const [pagina, setPagina] = useState(0); // estado pagina prev

function next(){
    if(sum2 >= task.length){
    } else {
        setSum(sum + page)
        setSum2(sum2 + page)
        setPagina(pagina+1) 
    }    
}

function prev(){
    if (sum === task.length) {
    } else {
      if(sum>0){
        setSum(sum - page);
        setSum2(sum2 - page); 
        setPagina(pagina-1)
    }
}}
    return (
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
            <button className="pagination-previous" onClick={()=>prev()}>Previous</button>
            <button className="pagination-next" onClick={()=>next()}>Next page</button>
        <ul className="pagination-list">
            {
                longPage?.map(p=>(
                    longPage.indexOf(p) === pagina ? <li key={p}><span className="pagination-link is-current">{p}</span></li> 
                    :<li key={p} ><span className="pagination-link">{p}</span></li>
                ))
            }
        </ul>
        </nav>
    );
}

export default Paginator;