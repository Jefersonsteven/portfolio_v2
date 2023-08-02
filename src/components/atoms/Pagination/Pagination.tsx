export const Pagination = () => {
  const array = Array(10).fill('')
  const currentPage = 7
  const pagination = array.slice(currentPage - 2, currentPage + 1)

  return (
    <div>
      {pagination.map((item, index) => <p key={index}>👨🏾‍🚀{currentPage - 1 + index}{currentPage === (currentPage - 1 + index) && '👌🏾'}</p>)}
    </div>
  )
}
