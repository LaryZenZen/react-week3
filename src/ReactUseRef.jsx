import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import './assets/all.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal } from 'bootstrap'
function ReactUseRef(){
  const boxRef =useRef(null)
  useEffect(()=>{
    console.log(document.querySelector('#box'));
    console.log(boxRef);
  },[])
  // const acquisitionsRef=useRef(null);
  // useEffect(()=>{
  //     const data = [
  //   { year: 2010, count: 10 },
  //   { year: 2011, count: 20 },
  //   { year: 2012, count: 15 },
  //   { year: 2013, count: 25 },
  //   { year: 2014, count: 22 },
  //   { year: 2015, count: 30 },
  //   { year: 2016, count: 28 },
  // ];
  // new Chart(
  //   acquisitionsRef.current,
  //   {
  //     type: 'bar',
  //     data: {
  //       labels: data.map(row => row.year),
  //       datasets: [
  //         {
  //           label: 'Acquisitions by year',
  //           data: data.map(row => row.count)
  //         }
  //       ]
  //     }
  //   }
  // );
  // },[])

  const modalRef = useRef(null);
  const modalMethodRef = useRef(null);
  useEffect(()=>{
    modalMethodRef.current = new Modal(modalRef.current);
  },[])
  function openModal(){
    modalMethodRef.current.show();
  }
  function closeModal(){
    modalMethodRef.current.hide();
  }
  
  return(
    <>
    <h2>bootstrap</h2>
    <button type="button" className='btn btn-primary' onClick={()=>{
      openModal();
    }}>Modal按鈕</button>
    <div className="modal fade" ref={modalRef} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          ...
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" onClick={()=>{
            closeModal();
          }}>ref關閉</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
</div>
      <h1>ref</h1>
      <div className="box" id='box'
      ref={boxRef}
      ></div>
      {/* <canvas ref={acquisitionsRef}></canvas> */}
    </>
  )
}

export default ReactUseRef