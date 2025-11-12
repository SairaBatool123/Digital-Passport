import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'
import { Button, Card, CardFooter, CardHeader, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap'
import { LuDownload, LuPlus, LuSearch } from 'react-icons/lu'
import { TbChevronDown, TbEdit, TbEye, TbTrash } from 'react-icons/tb'
import AddCategoryModal from '@/views/ecommerce/journey/components/AddCategoryModal'
import { productJourney } from '@/views/ecommerce/journey/data'
import DataTable from '@/components/table/DataTable'
import DeleteConfirmationModal from '@/components/table/DeleteConfirmationModal'
import TablePagination from '@/components/table/TablePagination'
import { useToggle } from 'usehooks-ts'

const columnHelper = createColumnHelper()

const JourneyCard = () => {
  const [showModal, toggleModal] = useToggle(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [data, setData] = useState([...productJourney])
  const [globalFilter, setGlobalFilter] = useState('')
  const [sorting, setSorting] = useState([])
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 8 })
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
      header: ({ table }) => (
        <input
          type="checkbox"
          className="form-check-input form-check-input-light fs-14"
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }) => (
        <input
          type="checkbox"
          className="form-check-input form-check-input-light fs-14"
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
      enableSorting: false,
      enableColumnFilter: false,
    },
    columnHelper.accessor('title', {
      header: 'Journey Title',
      cell: ({ row }) => (
        <div>
          <h6>{row.original.title}</h6>
          <small className="text-muted">{row.original.phase}</small>
        </div>
      ),
    }),
    columnHelper.accessor('owner', { header: 'Owner' }),
    columnHelper.accessor('startDate', { header: 'Start Date' }),
    columnHelper.accessor('endDate', { header: 'End Date' }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: ({ row }) => (
        <span
          className={`badge ${row.original.status === 'Active' ? 'bg-success' : row.original.status === 'Pending' ? 'bg-warning' : 'bg-secondary'}`}>
          {row.original.status}
        </span>
      ),
    }),
    {
      header: 'Actions',
      cell: ({ row }) => (
        <div className="d-flex gap-1">
          <Button variant="default" size="sm" className="btn-icon rounded-circle">
            <TbEye className="fs-lg" />
          </Button>
          <Button variant="default" size="sm" className="btn-icon rounded-circle">
            <TbEdit className="fs-lg" />
          </Button>
          <Button variant="default" size="sm" className="btn-icon rounded-circle" onClick={() => setSelectedRowIds({ [row.original.id]: true })}>
            <TbTrash className="fs-lg" />
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
      <CardHeader className="d-flex justify-content-between flex-wrap gap-2">
        <div className="d-flex gap-2">
          <input
            type="search"
            className="form-control"
            placeholder="Search journey..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
          {Object.keys(selectedRowIds).length > 0 && (
            <Button variant="danger" size="sm" onClick={toggleDeleteModal}>
              Delete
            </Button>
          )}
        </div>

        <div className="d-flex gap-2">
          <select className="form-select" value={table.getState().pagination.pageSize} onChange={(e) => table.setPageSize(Number(e.target.value))}>
            {[5, 8, 10, 15, 20].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

          <Dropdown align="end">
            <DropdownToggle className="btn-default">
              <LuDownload className="me-1" /> Export <TbChevronDown className="ms-1" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Export as PDF</DropdownItem>
              <DropdownItem>Export as CSV</DropdownItem>
              <DropdownItem>Export as Excel</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <Button variant="primary" onClick={toggleModal}>
            <LuPlus className="me-1" /> Add Journey
          </Button>
        </div>
      </CardHeader>

      <DataTable table={table} emptyMessage="No journeys found" />

      {table.getRowModel().rows.length > 0 && (
        <CardFooter>
          <TablePagination
            totalItems={totalItems}
            start={start}
            end={end}
            itemsName="journeys"
            showInfo
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
        itemName="journey"
      />

      <AddCategoryModal show={showModal} handleClose={toggleModal} />
    </Card>
  )
}

export default JourneyCard
