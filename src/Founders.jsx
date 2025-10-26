import React from 'react'
import founders from "./assets/founders/founders.avif";

const Founders = () => {
  return (
    <div class="founders-main-div" id="founders">
        <h1>Founding Trustees</h1>
        <img loading="lazy" src={founders} alt="Founders of Shri Veda Vyasa Seva Trust, Cherthala"/>
    </div>
  )
}

export default Founders