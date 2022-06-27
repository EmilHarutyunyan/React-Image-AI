import React, { useState } from "react";


function SelectForm() {
  const [selectValue, setSelectValue] = useState("day1");
  const [active, setActive] = useState(false);
  return (
    <>
      <select
        className='form-select'
        name='daytime'
        id='cars'
        defaultValue='day1'
        style={{ display: "none" }}
      >
        <option value={selectValue}>{selectValue}</option>
      </select>
      <div
        className={`select-custom ${active ? "is-active" : ""}`}
        onClick={() => setActive(!active)}
      >
        <div className='select-custom__header '>
          <span className='select-custom__current'>{selectValue}</span>
          <div className='select-custom__icon'>&times;</div>
        </div>
        <div className='select-custom__body'>
          <div
            className='select-custom__item'
            onClick={() => setSelectValue("day2")}
          >
            day2
          </div>
          <div
            className='select-custom__item'
            onClick={() => setSelectValue("day3")}
          >
            day3
          </div>
          <div
            className='select-custom__item'
            onClick={() => setSelectValue("day2")}
          >
            day2
          </div>
          <div
            className='select-custom__item'
            onClick={() => setSelectValue("day4")}
          >
            day4
          </div>
          <div
            className='select-custom__item'
            onClick={() => setSelectValue("sunset1")}
          >
            sunset1
          </div>
          <div
            className='select-custom__item'
            onClick={() => setSelectValue("sunset2")}
          >
            sunset2
          </div>
          <div
            className='select-custom__item'
            onClick={() => setSelectValue("sunset3")}
          >
            sunset3
          </div>
          <div
            className='select-custom__item'
            onClick={() => setSelectValue("sunset4")}
          >
            sunset4
          </div>
          <div
            className='select-custom__item'
            onClick={() => setSelectValue("bluehour1")}
          >
            bluehour1
          </div>
          <div
            className='select-custom__item'
            onClick={() => setSelectValue("bluehour2")}
          >
            bluehour2
          </div>
          <div
            className='select-custom__item'
            onClick={() => setSelectValue("night1")}
          >
            night1
          </div>
          <div
            className='select-custom__item'
            onClick={() => setSelectValue("night2")}
          >
            night2
          </div>
          <div
            className='select-custom__item'
            onClick={() => setSelectValue("night3")}
          >
            night3
          </div>
          <div
            className='select-custom__item'
            onClick={() => setSelectValue("night4")}
          >
            night4
          </div>
          <div
            className='select-custom__item'
            onClick={() => setSelectValue("night5")}
          >
            night5
          </div>
          <div
            className='select-custom__item'
            onClick={() => setSelectValue("night6")}
          >
            night6
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectForm;
