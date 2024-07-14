import React, { useRef, useEffect } from 'react'
import './Filter.css'

const Filter = () => {

  const selector1 = useRef(null)
  const selector2 = useRef(null)
  const selector3 = useRef(null)

  useEffect(() => {
    const firstFilter = () => {
      selector1.current.style.backgroundColor = '#FFE34F'
    }
    firstFilter()
  }, [])


  const selectFilter = (filtro) => {
    if(filtro === '1'){
      selector1.current.style.backgroundColor = '#FFE34F'
      selector2.current.style.backgroundColor = '#C15473'
      selector3.current.style.backgroundColor = '#C15473'
    }
    if(filtro === '2'){
      selector2.current.style.backgroundColor = '#FFE34F'
      selector1.current.style.backgroundColor = '#C15473'
      selector3.current.style.backgroundColor = '#C15473'
    }
    if(filtro === '3'){
      selector3.current.style.backgroundColor = '#FFE34F'
      selector1.current.style.backgroundColor = '#C15473'
      selector2.current.style.backgroundColor = '#C15473'
    }
  }
  return (
    <div className='elements-filter'>
      <div className='element-filter' onClick={() => selectFilter('1')}>
        <i class="bi bi-border-all" id='all-icon'></i>
        <span className='filter-name'>Todos</span>
        <div className='selector' ref={selector1}></div>
      </div>
      <div className='element-filter' onClick={() => selectFilter('2')}>
        <i class="bi bi-dice-5-fill" id='slots-icon'></i>
        <span className='filter-name'>Slots</span>
        <div className='selector' ref={selector2}></div>
      </div>
      <div className='element-filter' onClick={() => selectFilter('3')}>
        <i class="bi bi-heart-fill" id='favorite-icon'></i>
        <span className='filter-name'>Favoritos</span>
        <div className='selector' ref={selector3}></div>
      </div>
    </div>
  )
}

export default Filter