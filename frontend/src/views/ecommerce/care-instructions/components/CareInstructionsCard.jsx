import { useState } from 'react'
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table'
import { Button, Card, CardHeader, CardFooter, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import { LuDownload, LuPlus } from 'react-icons/lu'
import { TbChevronDown, TbEdit, TbEye, TbTrash } from 'react-icons/tb'
import AddCategoryModal from '@/views/ecommerce/care-instructions/components/AddCategoryModal'
import { careInstructions } from '@/views/ecommerce/care-instructions/data'
import DataTable from '@/components/table/DataTable'
import DeleteConfirmationModal from '@/components/table/DeleteConfirmationModal'
import TablePagination from '@/components/table/TablePagination'
import { useToggle } from 'usehooks-ts'

const columnHelper = createColumnHelper()

const CareInstructionsCard = () => {
  const [showModal, toggleModal] = useToggle(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [data, setData] = useState([...careInstructions])
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState([])
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 })
  const [selectedRowIds, setSelectedRowIds] = useState({})

  const toggleDeleteModal = () => setShowDeleteModal(!showDeleteModal)

  const handleDelete = () => {
    const selectedIds = new Set(Object.keys(selectedRowIds).map(Number))
    setData((old) => old.filter((row) => !selectedIds.has(row.id)))
    setSelectedRowIds({})
    setPagination({ ...pagination, pageIndex: 0 })
    setShowDeleteModal(false)
  }

  const columns = [
    {
      id: 'select',
      header: ({ table }) => <input type="checkbox" checked={table.getIsAllRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()} />,
      cell: ({ row }) => <input type="checkbox" checked={row.getIsSelected()} onChange={row.getToggleSelectedHandler()} />,
      enableSorting: false,
      enableColumnFilter: false,
    },
    columnHelper.accessor('title', {
      header: 'Product',
      cell: (info) => (
        <div>
          {info.row.original.title} <br /> <small>{info.row.original.careType}</small>
        </div>
      ),
    }),
    columnHelper.accessor('instructions', { header: 'Instructions' }),
    columnHelper.accessor('originCountry', {
      header: 'Origin',
      cell: (info) => <span>{info.row.original.originCountry}</span>,
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: (info) => (
        <span
          className={`badge ${
            info.row.original.status === 'Active' ? 'bg-success' : info.row.original.status === 'Pending' ? 'bg-warning' : 'bg-secondary'
          }`}>
          {info.row.original.status}
        </span>
      ),
    }),
    {
      header: 'Actions',
      cell: ({ row }) => (
        <div className="d-flex gap-1">
          <Button size="sm" variant="default">
            <TbEye />
          </Button>
          <Button size="sm" variant="default">
            <TbEdit />
          </Button>
          <Button size="sm" variant="default" onClick={() => setSelectedRowIds({ [row.original.id]: true })}>
            <TbTrash />
          </Button>
        </div>
      ),
    },
  ]

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter, pagination, rowSelection: selectedRowIds },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    onRowSelectionChange: setSelectedRowIds,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableColumnFilters: true,
    enableRowSelection: true,
  })

  const pageIndex = table.getState().pagination.pageIndex
  const pageSize = table.getState().pagination.pageSize
  const totalItems = table.getFilteredRowModel().rows.length
  const start = pageIndex * pageSize + 1
  const end = Math.min(start + pageSize - 1, totalItems)

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <input type="search" placeholder="Search care instructions..." value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value)} />
        <div className="d-flex gap-2">
          <Button variant="primary" onClick={toggleModal}>
            <LuPlus /> Add
          </Button>
        </div>
      </CardHeader>

      <DataTable table={table} emptyMessage="No care instructions found" />

      {table.getRowModel().rows.length > 0 && (
        <CardFooter>
          <TablePagination
            totalItems={totalItems}
            start={start}
            end={end}
            itemsName="instructions"
            previousPage={table.previousPage}
            canPreviousPage={table.getCanPreviousPage()}
            pageCount={table.getPageCount()}
            pageIndex={pageIndex}
            setPageIndex={table.setPageIndex}
            nextPage={table.nextPage}
            canNextPage={table.getCanNextPage()}
          />
        </CardFooter>
      )}

      <DeleteConfirmationModal
        show={showDeleteModal}
        onHide={toggleDeleteModal}
        onConfirm={handleDelete}
        selectedCount={Object.keys(selectedRowIds).length}
        itemName="instruction"
      />

      <AddCategoryModal show={showModal} handleClose={toggleModal} />
    </Card>
  )
}

export default CareInstructionsCard
