import React from 'react'
import './Pagination.scss'
import { vendingIcons } from '@/utilities/vendingIcons'

interface Props {
  page: number
  totalPages: number
  currentPage: string
  setCurrentPage: (page: string) => void
}

export const Pagination: React.FC<Props> = ({ page, totalPages, currentPage, setCurrentPage }) => {
  function handlePaginate (e: React.MouseEvent<HTMLButtonElement>) {
    const value = (e.target as HTMLButtonElement).innerText
    if (value !== currentPage) setCurrentPage(value)
  }

  function handleNavigationBack () {
    if (Number(currentPage) - 1 !== 0) {
      setCurrentPage(`${Number(currentPage) - 1}`)
    }
  }

  function handleNavigationNext () {
    if (Number(currentPage) + 1 <= totalPages) {
      setCurrentPage(`${Number(currentPage) + 1}`)
    }
  }

  return (
    <div className='navigation'>
        <button onClick={handleNavigationBack} className='navigation__button navigation__button--navigation'>
          {vendingIcons('arrow-back', 20)}
        </button>
        {(page != null) &&
          <div className='navigation__pagination'>
            {page === totalPages && page - 2 !== 0 &&
              <button onClick={handlePaginate} className='navigation__button'>{page - 2}</button>
            }
            {page !== 1 &&
              <button onClick={handlePaginate} className='navigation__button'>{page - 1}</button>
            }
            {page > 0 &&
              <button onClick={handlePaginate} className='navigation__button navigation__button--current'>{page}</button>
            }
            {page < totalPages &&
              <button onClick={handlePaginate} className='navigation__button'>{page + 1}</button>
            }
            {page - 1 === 0 && page + 2 <= totalPages &&
              <button onClick={handlePaginate} className='navigation__button'>{page + 2}</button>
            }
          </div>
        }
        <button onClick={handleNavigationNext} className='navigation__button navigation__button--navigation'>
          {vendingIcons('arrow-next', 20)}
        </button>
      </div>
  )
}
